import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch application names from the backend server
    axios.get('http://localhost:5000/api/applications') // Replace with your backend server URL
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching application names:', error);
      });
  }, []);

  return (
    <div>
      <h2>Application Names</h2>
      <ul>
        {applications.map(application => (
          <li>
            {application.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;