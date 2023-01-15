import React from 'react';
import { useLocation } from 'react-router-dom';

console.log('PatientDetails file');

const PatientDetails = ({ match }) => {
    // for now, we'll just use the hardcoded data located in components/PatientData.json
    const data = require('../components/PatientData.json');
    const { state } = useLocation();
    console.log('PatientDetails file');

    console.log(state);


    const patient = data.patients.find(patient => patient._id === match.params.id);

    if(!patient) {
        return <h2>Patient not found</h2>;
    }

    return (
        <div className="patient-details">
            <h2>Patient Details</h2>
            <div className="patient-info">
                <label>Name:</label>
                <input type="text" value={patient.name} readOnly />
            </div>
            <div className="patient-info">
                <label>Birthday:</label>
                <input type="text" value={patient.birthday} readOnly />
            </div>
            <div className="patient-info">
                <label>Weight:</label>
                <input type="text" value={patient.weight} readOnly />
            </div>
            <div className="patient-info">
                <label>Height:</label>
                <input type="text" value={patient.height} readOnly />
            </div>
            <div className="patient-info">
                <label>Date of last visit:</label>
                <input type="text" value={patient.date} readOnly />
            </div>
            <div className="patient-info">
                <label>Diagnosis:</label>
                <div className="diagnosis-list">
                    {patient.diagnosis.map((diagnosis, index) => (
                        <p key={index}>{diagnosis}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
