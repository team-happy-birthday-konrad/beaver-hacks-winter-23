import React from 'react';
import { useState, useEffect, useLocation } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientHomePage.css';

import FileUploader from '../components/FileUploader';
console.log('hery ')

function PatientHomePage({ patientId }) {

//   just use the first mock patient for now
const mockPatientData = require('../components/PatientData.json');
const mockPatient = mockPatientData.patients[0];
  const [patient, setPatient] = useState(mockPatient);
  const [editing, setEditing] = useState(false);
  const [updatedPatient, setUpdatedPatient] = useState(false);

  useEffect(() => {
    // fetch patient data
    fetch(`/api/patients/${patientId}`)
      .then(response => response.json())
      .then(data => {
        setPatient(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [patientId]);




 const birthdate = new Date(patient.birthdate);

 const age = new Date().getFullYear() - birthdate.getFullYear();

 const email = patient.email;

 const phone = patient.phone;

 const name = patient.name;

 const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPatient({
      ...updatedPatient,
      [name]: value
    });
  };

  const handleUpdate = () => {
    // update patient details on the server
    fetch(`/api/patients/${patientId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPatient),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // setPatient(data);  // TODO: update the patient state
        setEditing(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

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
          
          <div className="patient-details-container">
                <div className="card">
                    <div className="patient-details">
                        <h2>Contact Details</h2>
                        {editing ? (
                    <>
                    <input
                        type="text"
                        name="name"
                        value={updatedPatient.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={updatedPatient.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        value={updatedPatient.phone}
                        onChange={handleChange}
                    />
                    <button onClick={handleUpdate}>Update Patient Details</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                    </>
                            ) : (
                            <>
                            <p>Name: {orNA(name)}</p>
                            <p>Email: {orNA(email)}</p>
                            <p>Phone: {orNA(phone)}</p>
                            <p>Age: {orNA(age)}</p>
                            <button onClick={handleEdit}>Edit Contact Details</button>
                            </>
                        )}
                    </div>
                </div>


                <div className="card">
                    <div className="patient-history">
                        <h2>Medical History</h2>
                        <p>Diagnosis: {orNA(patient.diagnosis)}</p>
                        <p>Medications: {orNA(patient.medications)}</p>
                    </div>
                </div>



          </div>
                <div className="card">
                    <div className="upload-section">
                        <h2>Upload Medical Records</h2>
                        <FileUploader />
                    </div>
                </div>

        </div>
      );
    
}

export default PatientHomePage;
