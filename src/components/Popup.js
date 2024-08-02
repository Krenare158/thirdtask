// src/components/Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, onChangeColor }) => {
  if (!isOpen) return null;

  const handleColorChange = (key, e) => {
    onChangeColor(key, e.target.value);
  };

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Theme Color</h2>
        <div className="popup-item">
          <label>Font Color</label>
          <input type="color" onChange={(e) => handleColorChange('fontColor', e)} />
          <input type="text" value="#000000" readOnly />
        </div>
        <div className="popup-item">
          <label>Background Color</label>
          <input type="color" onChange={(e) => handleColorChange('backgroundColor', e)} />
          <input type="text" value="#ffffff" readOnly />
        </div>
        <div className="popup-item">
          <label>Button Color</label>
          <input type="color" onChange={(e) => handleColorChange('buttonColor', e)} />
          <input type="text" value="#007bff" readOnly />
        </div>
        <div className="popup-item">
          <label>Button Border Color</label>
          <input type="color" onChange={(e) => handleColorChange('buttonBorderColor', e)} />
          <input type="text" value="#007bff" readOnly />
        </div>
        <div className="popup-item">
          <label>Button Mouseover Color</label>
          <input type="color" onChange={(e) => handleColorChange('buttonMouseoverColor', e)} />
          <input type="text" value="#0056b3" readOnly />
        </div>
        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default Popup;
