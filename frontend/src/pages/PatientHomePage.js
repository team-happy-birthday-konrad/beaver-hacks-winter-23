import React from 'react';
import { useState, useEffect, useLocation } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorHomePage.css';

import FileUploader from '../components/FileUploader';
console.log('hery ')

function PatientHomePage({ patientId }) {
//   const [patient, setPatient] = useState({});

//   useEffect(() => {
//     // fetch patient data
//     fetch(`/api/patients/${patientId}`)
//       .then(response => response.json())
//       .then(data => {
//         setPatient(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [patientId]);

  const mockPatientData = require('../components/PatientData.json');
//   just get the first patient for now
  const mockPatient = mockPatientData.patients[0];

//   setPatient(mockPatient);
 const patient = mockPatient;

  return (
    <div>
      <h1>Patient Home Page</h1>
      <h2>Contact Details</h2>
      <p>Name: {patient.name}</p>
      <p>Email: {patient.email}</p>
      <p>Phone: {patient.phone}</p>
      <FileUploader />
      
    </div>
  );
}

export default PatientHomePage;
