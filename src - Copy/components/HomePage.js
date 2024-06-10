import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import livingRoomImage from '../assets/home.jpg';  
import curtainsIcon from '../assets/Curtains.png';  
import tvIcon from '../assets/TV.png'; 
import sofaIcon from '../assets/Sofa.png'; 
import './HomePage.css';  

const HomePage = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container fluid className="p-0 position-relative">
      <img src={livingRoomImage} alt="Living Room" className="img-fluid w-100"/>
      <div className={`centered-text ${showButtons ? 'hide' : 'show'}`}>
        Your Centered Text Here
      </div>
      <div className={`buttons-container ${showButtons ? 'show' : 'hide'}`}>
        <button className="button" style={{ top: '45%', left: '25%' }}>
          <img src={curtainsIcon} alt="Curtains Icon" />
        </button>
        <button className="button" style={{ top: '50%', left: '50%' }}>
          <img src={tvIcon} alt="TV Icon" />
        </button>
        <button className="button" style={{ top: '80%', left: '20%' }}>
          <img src={sofaIcon} alt="Sofa Icon" />
        </button>
      </div>
    </Container>
  );
};

export default HomePage;
