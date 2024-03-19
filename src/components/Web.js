import React, { useState } from "react";
import Layout from "./Layout";
import ApplicationModal from "../templates/ApplicationModal";
import { Link } from "@reach/router"

const Web = () => {
  const applications = [
    { name: "Execution Priorities Communicator (XPC)", developer: "Developer 1", description: "Description of App 1" },
    { name: "App 2", developer: "Developer 2", description: "Description of App 2" },
    // Add more application objects as needed
  ];

  const [selectedApplication, setSelectedApplication] = useState(null);

  const openModal = (application) => {
    setSelectedApplication(application);
  };

  const closeModal = () => {
    setSelectedApplication(null);

  };

  return (
    <Layout>
      <h2>Web Applications</h2>
      <div className="application-blocks">
        {applications.map((app, index) => (
          <div key={index} className="application-block" onClick={() => openModal(app)}>
          <h3>{app.name}</h3>
          <p>Developer: {app.developer}</p>
        </div>
      ))}
    </div>
    {selectedApplication && (
      <ApplicationModal application={selectedApplication} onClose={closeModal} />
    )}
  </Layout>
);
};

export default Web