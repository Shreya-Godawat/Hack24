import React, { useState } from "react";
import Layout from "../components/Layout"

const ApplicationModal = ({ application, onClose }) => {
  const [openSections, setOpenSections] = useState(Array(10).fill(false));
  const [selectedOption, setSelectedOption] = useState("default");

  const toggleSection = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{application.name} </h2>
        <p>Description: {application.description}</p>
        <div className="columns">
          <div className="column">
            {openSections.slice(0, 5).map((isOpen, index) => (
              <div key={index}>
                <button className="collapsible" onClick={() => toggleSection(index)}>
                  {isOpen ? `Collapse Section ${index + 1}` : `Expand Section ${index + 1}`}
                </button>
                <div className={`collapsible-content ${isOpen ? "show" : ""}`}>
                  <h3>Section {index + 1}</h3>
                  <p>Details for Section {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="column">
            {openSections.slice(5, 10).map((isOpen, index) => (
              <div key={index + 5}>
                <button className="collapsible" onClick={() => toggleSection(index + 5)}>
                  {isOpen ? `Collapse Section ${index + 6}` : `Expand Section ${index + 6}`}
                </button>
                <div className={`collapsible-content ${isOpen ? "show" : ""}`}>
                  <h3>Section {index + 6}</h3>
                  <p>Details for Section {index + 6}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;