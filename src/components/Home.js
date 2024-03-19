import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import mobileLogo from "../images/mobile-logo.jpeg"
import webLogo from "../images/web-logo.jpg"
import backendLogo from "../images/backend-logo.jpg"
import SearchBar from "../components/searchbar"
import Layout from "./Layout";

const Home = () => {
    const handleSearch = (searchTerm) => {
        // Implement your search logic here
        console.log("Searching for:", searchTerm)
      }
  return (
    <Layout>
    <div>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="category-blocks">
      <div className="category-block">
      <Link to={"/Web"}>
        <img src={webLogo} width={100} height={100} alt="Web Logo" />
            <h3>Web Services</h3>
            </Link>
        </div>
      <div className="category-block">
      <Link to={"/Mobile"}>
        <img src={mobileLogo} width={100} height={100} alt="Mobile Logo" />
            <h3>Mobile Services</h3>
        </Link>
        </div>
        <div className="category-block">
      <Link to={"/Backend"}>
        <img src={backendLogo} width={100} height={100} alt="Backend Logo" />
            <h3>Backend Services</h3>
      </Link>
      </div>
      </div>
        
    </div>
    </Layout>
 );
};
export default Home;