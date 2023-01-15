import React from 'react';
import { useState, useEffect, useLocation } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientHomePage.css';

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

 const birthdate = new Date(patient.birthdate);

 const age = new Date().getFullYear() - birthdate.getFullYear();

 const email = patient.email;

 const phone = patient.phone;

 const name = patient.name;

 const orNA = (value) => {
    if (value) {
        return value;
    } else {
        return 'N/A';
    }
    }

  return (
    <div className='patient-home-page'>
      <h1>Patient Home Page</h1>
      <h2>Contact Details</h2>
      <p>Name: {orNA(name)}</p>
      <p>Email: {orNA(email)}</p>
      <p>Phone: {orNA(phone)}</p>
        <p>Age: {orNA(age)}</p>
        <h2>Medical History</h2>
        <p>Diagnosis: {orNA(patient.diagnosis)}</p>
        <p>Medications: {orNA(patient.medications)}</p>
        
      <FileUploader />
      
    </div>
  );
}

export default PatientHomePage;
