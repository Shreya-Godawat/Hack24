import React, { useState } from "react";
import Layout from "./Layout";
import ApplicationModal from "../templates/ApplicationModal";
import { Link } from "@reach/router"

const Mobile = () => {
  const applications = [
    { name: "Store Facts On Demand (SFOD)", developer: "Developer 1", description: "Description of App 1" },
    { name: "POS2GO(STP)", developer: "Developer 2", description: "Description of App 2" },
    { name: "TechXL(TXL)", developer: "Developer 3", description: "Description of App 3" },
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
      <h2>Mobile Applications</h2>
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

export default Mobile