import React from "react"
import Layout from "../components/Layout"
import { Link } from "@reach/router"
import mobileLogo from "../images/mobile-logo.jpeg"
import webLogo from "../images/web-logo.jpg"
import backendLogo from "../images/backend-logo.jpg"
import SearchBar from "../components/searchbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home"
import CategoryNew from "../components/Category"
import Backend from "../components/Backend"
import Mobile from "../components/Mobile"
import Web from "../components/Web"

const IndexPage = () => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm)
  }

  return (
    // <Layout>
      <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/login" element={<LoginFormComponent />}></Route> */}
                <Route path="/category" element={<CategoryNew category={"category shreya"} />}>
                </Route>
                <Route path='/backend' element={<Backend />} >
                </Route>
                <Route path='/mobile' element={<Mobile />} >
                </Route>
                <Route path='/web' element={<Web />} >
                </Route>
                
                
              </Routes>
            </Router>
      /* <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="category-blocks">
        <div className="category-block">
          <Link to="/category/mobile">
            <img src={mobileLogo} width={100} height={100} alt="Mobile Logo" />
            <h3>Mobile</h3>
          </Link>
        </div>
        <div className="category-block">
          <Link to="/category/web">
            <img src={webLogo} width={100} height={100} alt="Web Logo" />
            <h3>Web</h3>
          </Link>
        </div>
        <div className="category-block">
          <Link to="/category">
            <img src={backendLogo} width={100} height={100} alt="Backend Logo" />
            <h3>Backend Services</h3>
          </Link>
        </div>
      </div> */
    // </Layout>
  )
}

export default IndexPage