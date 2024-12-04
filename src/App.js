import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home.jsx';
import GetStartedPage from './components/SignUpLogIn/SignUpLogIn.jsx';
import Form from './components/Form/Form.jsx'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/save-passwords" element={<Form />} /> {/* Form to manage passwords */}
      </Routes>
    </Router>
  );
};

export default App;
