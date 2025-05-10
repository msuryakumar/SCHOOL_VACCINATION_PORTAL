// src/components/ReportTable.js
import React, { useEffect, useState } from 'react';
import { generateReport } from '../services/api';

const ReportTable = () => {
  const [report, setReport] = useState([]);
  
  useEffect(() => {
    const fetchReport = async () => {
      const response = await generateReport({ vaccinatedStatus: true });
      setReport(response.data);
    };

    fetchReport();
  }, []);

  return (
    <div>
      <h3>Vaccination Report</h3>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Vaccinated Status</th>
            <th>Date of Vaccination</th>
            <th>Vaccine Name</th>
          </tr>
        </thead>
        <tbody>
          {report.map((student) => (
            <tr key={student._id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.vaccinatedStatus ? 'Yes' : 'No'}</td>
              <td>{new Date(student.vaccinatedDate).toLocaleDateString()}</td>
              <td>{student.vaccineName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
