// import React, { useState } from "react";
// import { Link } from "gatsby";
// import Layout from "../../components/Layout";
// import ApplicationModal from "../../templates/ApplicationModal";

// const BackendPage = () => {
//   const applications = [
//     { name: "Java", developer: "James Gosling", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
//     { name: "Javascript", developer: "Brendan Eich", description: "multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods" },
//     { name: "Python", developer: "Ryan Reynolds", description: "multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods" },
//     { name: "Ruby", developer: "Mainak Sengupta", description: "multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods" },
    
//     // Add more application objects as needed
//   ];

//   const [selectedApplication, setSelectedApplication] = useState(null);

//   const openModal = (application) => {
//     setSelectedApplication(application);
//   };

//   const closeModal = () => {
//     setSelectedApplication(null);

//   };

//   return (
//     <Layout>
//       <h2>Backend Applications</h2>
//       <div className="application-blocks">
//         {applications.map((app, index) => (
//           <div key={index} className="application-block" onClick={() => openModal(app)}>
//             <h3>{app.name}</h3>
//             <p>Developer: {app.developer}</p>
//           </div>
//         ))}
//       </div>
//       {selectedApplication && (
//         <ApplicationModal application={selectedApplication} onClose={closeModal} />
//       )}
//     </Layout>
//   );
// };

// export default BackendPage;