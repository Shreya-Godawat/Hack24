import React from "react"
import { Link } from "@reach/router"
import "../components/Navbar.css"
// import logo from "../images/Logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        {/* <img src={logo} width={50} height={50} alt="Company Logo" className="logo" /> */}
      </Link>
      <h1 className="title">Commercial IT Application Catalogue</h1>
    </nav>
  )
}

export default Navbar