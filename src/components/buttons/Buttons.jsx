import React from 'react';
import './buttons.css';

const Buttons = ({ updateUserDetails }) => {
  return (
    <div className="button">
      <button className="saveButton" onClick={() => updateUserDetails()}>
        Save
      </button>
    </div>
  );
};

export default Buttons;
