// import React from "react"
// import Layout from "../../components/Layout"
// import { Link } from "@reach/router"

// const WebPage = () => {
//   const applications = [
//     { name: "Execution Priorities Communicator (XPC)", developer: "Developer 1", description: "Description of App 1" },
//     { name: "App 2", developer: "Developer 2", description: "Description of App 2" },
//     // Add more application objects as needed
//   ];

//   return (
//     <Layout>
//       <h2>Web Applications</h2>
//       <div className="application-blocks">
//         {applications.map((app, index) => (
//           <Link to={`/category/mobile/${index}`} key={index}>
//             <div className="application-block">
//               <h3>{app.name}</h3>
//               <p>Developer: {app.developer}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </Layout>
//   )
// }

// export default WebPage