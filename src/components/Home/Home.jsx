import './Home.css';
import Navbar from './Navbar/Navbar.jsx'
import Card from './Card/Card.jsx'
import Hero from './Hero/Hero.jsx'
function Home() {
  return (
    <div className="Home">
    <Navbar></Navbar>
    <Hero></Hero>
    <Card></Card>
    </div>
  
  );
}

export default Home;