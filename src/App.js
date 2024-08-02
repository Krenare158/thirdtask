// src/App.js
import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState({
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    buttonColor: '#007bff',
    buttonBorderColor: '#007bff',
    buttonMouseoverColor: '#0056b3'
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChangeColor = (key, value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [key]: value
    }));
  };

  return (
    <div className="App" style={{ color: theme.fontColor, backgroundColor: theme.backgroundColor }}>
      <button onClick={togglePopup} className="popup-button" style={{
        backgroundColor: theme.buttonColor,
        borderColor: theme.buttonBorderColor
      }}>
        Show Popup
      </button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} onChangeColor={handleChangeColor} />
    </div>
  );
};

export default App;
