// import React from "react"
// import Layout from "../../components/Layout"
// import { Link } from "@reach/router"

// const MobilePage = () => {
//   const applications = [
//     { name: "Store Facts On Demand (SFOD)", developer: "Developer 1", description: "Description of App 1" },
//     { name: "POS2GO(STP)", developer: "Developer 2", description: "Description of App 2" },
//     { name: "TechXL(TXL)", developer: "Developer 3", description: "Description of App 3" },
//     // Add more application objects as needed
//   ];

//   return (
//     <Layout>
//       <h2>Mobile Applications</h2>
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

// export default MobilePage