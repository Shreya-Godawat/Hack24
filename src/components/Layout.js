import React from "react"
import Navbar from "./Navbar"
// import Sidebar from "./Sidebar"
import { Helmet } from "react-helmet"
import "./layout.css"
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title> Application Search Dashboard</title>
        <meta name="description" content="Application Search Dashboard" />
      </Helmet>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="content">{children}</div>
    </>
  )
}

export default Layout