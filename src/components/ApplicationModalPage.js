import React, { useState } from "react";

const ApplicationModalPage = ({ name, details, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{name} Details</h2>
        <p>{details}</p> {/* Display details passed as prop */}
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
          <option value="default" disabled>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {selectedOption !== "default" && (
          <p>Selected option: {selectedOption}</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationModalPage;