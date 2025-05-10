// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getUpcomingDrives } from '../services/api';

const Dashboard = () => {
  const [upcomingDrives, setUpcomingDrives] = useState([]);
  
  useEffect(() => {
    const fetchUpcomingDrives = async () => {
      const response = await getUpcomingDrives();
      setUpcomingDrives(response.data);
    };

    fetchUpcomingDrives();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Upcoming Vaccination Drives</h3>
        {upcomingDrives.length === 0 ? (
          <p>No upcoming drives</p>
        ) : (
          <ul>
            {upcomingDrives.map((drive) => (
              <li key={drive._id}>
                {drive.vaccineName} - {new Date(drive.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
