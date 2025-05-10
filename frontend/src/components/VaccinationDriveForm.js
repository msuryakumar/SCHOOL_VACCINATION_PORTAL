// src/components/VaccinationDriveForm.js
import React, { useState } from 'react';
import { createDrive } from '../services/api';

const VaccinationDriveForm = () => {
  const [vaccineName, setVaccineName] = useState('');
  const [date, setDate] = useState('');
  const [availableDoses, setAvailableDoses] = useState('');
  const [applicableGrades, setApplicableGrades] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driveData = { vaccineName, date, availableDoses, applicableGrades: applicableGrades.split(',') };
    await createDrive(driveData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Vaccination Drive</h3>
      <input
        type="text"
        placeholder="Vaccine Name"
        value={vaccineName}
        onChange={(e) => setVaccineName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Available Doses"
        value={availableDoses}
        onChange={(e) => setAvailableDoses(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Applicable Grades (comma separated)"
        value={applicableGrades}
        onChange={(e) => setApplicableGrades(e.target.value)}
        required
      />
      <button type="submit">Create Drive</button>
    </form>
  );
};

export default VaccinationDriveForm;
