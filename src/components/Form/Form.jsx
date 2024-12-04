import './Form.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [passwordList, setPasswordList] = useState([]);

  // Fetch passwords from the backend
  useEffect(() => {
    axios.get('https://cryptonest1.onrender.com/showpassword').then((response) => {
      const updatedPasswords = response.data.map((item) => {
        return {
          id: item.id,
          passwords: item.passwords,
          title: item.title,
          iv: item.iv,
          showDecrypted: false,
          decryptedPassword: null,
        };
      });
      setPasswordList(updatedPasswords);
    });
  }, []);

  // Add a new password
  const addPass = () => {
    if (password && title) {
      axios
        .post('https://cryptonest1.onrender.com/addpassword', { password, title })
        .then((response) => {
          setPasswordList(
            passwordList.concat({
              id: response.data.id,
              passwords: password,
              title: title,
              iv: response.data.iv,
              showDecrypted: false,
              decryptedPassword: null,
            })
          );
          setPassword('');
          setTitle('');
        })
        .catch((error) => {
          console.error('Error adding password:', error);
        });
    } else {
      alert('Please enter both password and title.');
    }
  };

  // Toggle between title and decrypted password
  const togglePasswordDisplay = (id) => {
    const updatedList = passwordList.map((item) => {
      if (item.id === id) {
        if (item.showDecrypted) {
          // If already decrypted, toggle back to title
          item.showDecrypted = false;
        } else {
          // Decrypt the password
          axios
            .post(
              'https://cryptonest1.netlify.app/decryptpass',
              { password: item.passwords, iv: item.iv },
              { headers: { 'Content-Type': 'application/json' } }
            )
            .then((response) => {
              item.decryptedPassword = response.data.decryptedPassword;
              item.showDecrypted = true;
              setPasswordList(passwordList.slice()); // Trigger state update
            })
            .catch((error) => {
              console.error('Error decrypting password:', error);
            });
        }
      }
      return item;
    });
    setPasswordList(updatedList); // Update the state to reflect toggling
  };

  return (
    <div className="containerpage">
      {/* Form Section */}
      <div className="Form">
        <input
          type="text"
          placeholder="Ex. password@123"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          placeholder="Ex. Facebook"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button onClick={addPass}>Add Password</button>
      </div>

      {/* Display Passwords */}
      <div className="DisplayPass">
        {passwordList.map((item) => (
          <div
            key={item.id}
            className="Pass"
            onClick={() => togglePasswordDisplay(item.id)}
          >
            <h3>
              {item.showDecrypted
                ? item.decryptedPassword
                : item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
