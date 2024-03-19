import React, { useState } from "react";
import ApplicationModal from "./ApplicationModal";

const ApplicationBlocks = ({ applications }) => {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const openModal = (application) => {
    setSelectedApplication(application);
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };

  return (
    <div className="application-blocks">
      {applications.map((application) => (
        <div key={application.id} className="application-block" onClick={() => openModal(application)}>
          <h3>{application.name}</h3>
          {/* Add other application details if needed */}
        </div>
      ))}
      {selectedApplication && (
        <ApplicationModal application={selectedApplication} onClose={closeModal} />
      )}
    </div>
  );
};

export default ApplicationBlocks;