// src/components/StudentForm.js
import React, { useState } from 'react';
import { addOrUpdateStudent } from '../services/api';

const StudentForm = ({ student }) => {
  const [studentId, setStudentId] = useState(student ? student.studentId : '');
  const [name, setName] = useState(student ? student.name : '');
  const [grade, setGrade] = useState(student ? student.grade : '');
  const [vaccinatedStatus, setVaccinatedStatus] = useState(student ? student.vaccinatedStatus : false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { studentId, name, grade, vaccinatedStatus };
    await addOrUpdateStudent(studentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{student ? 'Edit' : 'Add'} Student</h3>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
      />
      <label>
        Vaccinated:
        <input
          type="checkbox"
          checked={vaccinatedStatus}
          onChange={() => setVaccinatedStatus(!vaccinatedStatus)}
        />
      </label>
      <button type="submit">{student ? 'Update' : 'Add'} Student</button>
    </form>
  );
};

export default StudentForm;
