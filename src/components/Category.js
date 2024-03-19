import React from "react"
import { Link } from "@reach/router"

const CategoryNew = ({ category }) => {
  // Sample data, replace with your actual application data
  const applications = [
    { name: "App 1", logo: "app1-logo.png", developer: "Developer 1", description: "Description of App 1" },
    { name: "App 2", logo: "app2-logo.png", developer: "Developer 2", description: "Description of App 2" },
    // Add more application objects as needed
  ]

  return (
    <div className="category-page">
      <h2>{category} Applications</h2>
      <div className="application-blocks">
        {applications.map((app, index) => (
          <Link to={`/category/test`} key={index}>
            <div className="application-block">
              <img src={app.logo} alt={app.name} />
              <h3>{app.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryNew