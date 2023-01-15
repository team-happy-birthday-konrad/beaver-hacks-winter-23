import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import './RecordMedicalHistoryPage.css';

function RecordMedicalHistoryPage() {
    const [currentDoctor, setCurrentDoctor] = useState('');
    const [department, setDepartment] = useState('');
    const [date, setDate] = useState('');
    const [patient, setPatient] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [medications, setMedications] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // fetch current doctor data
        fetch('/api/staff/current')
            .then(response => response.json())
            .then(data => {
                setCurrentDoctor(data.name);
                setDepartment(data.department);
            })
            .catch(error => {
                console.error(error);
            });

        // get current date
        const currentDate = new Date();
        setDate(currentDate.toLocaleDateString());
    }, []);

    const handlePatientChange = (event) => {
        setPatient(event.target.value);
    };

    const handleDiagnosisChange = (event) => {
        setDiagnosis(event.target.value);
    };

    const handleMedicationChange = (event) => {
        setMedications(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleConfirm = () => {
        // send form data to server
        fetch('/api/medical-history', {
            method: 'POST',
            body: JSON.stringify({ patient, diagnosis, medications }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setShowModal(false);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div className="record-medical-history-page">
            <h1>Record Medical History Entry</h1>
            <p>Doctor: {currentDoctor}</p>
            <p>Department: {department}</p>
            <p>Date: {date}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Patient:
                    <select value={patient} onChange={handlePatientChange}>
                        <option value=""></option>
                        <option value="patient1">Patient 1</option>
                        <option value="patient2">Patient 2</option>
                        <option value="patient3">Patient 3</option>
                    </select>
                </label>
                <br />
                <label>
                    Diagnosis:
<input type="text" value={diagnosis} onChange={handleDiagnosisChange} />
</label>
<br/>
<label>Medications:
<select multiple value={selectedMedications} onChange={handleMedicationChange}>
{mockMedications.map((medication, i) => (
<option key={i} value={medication}>{medication}</option>
))}
</select>
</label>
<br/>
<input type="submit" value="Submit"/>
</form>
{showModal && (
<div className="confirmation-modal">
<div>Selected Patient: {selectedPatientName}</div>
<div>Diagnosis: {diagnosis}</div>
<div>Medications: {selectedMedications.join(', ')}</div>
<button onClick={handleConfirm}>Confirm</button>
<button onClick={handleCancel}>Cancel</button>
</div>
)}
</div>
);
}

export default RecordMedicalHistoryPage;

const currentDoctor = {
name: "John Smith",
department: "Surgery"
};

const selectedPatientName = "Patient 1";

const selectedMedications = ["Ibuprofen", "Acetaminophen"];

const mockPatients = [
{ id: "patient1", name: "Patient 1" },
{ id: "patient2", name: "Patient 2" },
{ id: "patient3", name: "Patient 3" }
];

const currentDate = new Date().toDateString();
const mockMedications = ["Ibuprofen", "Paracetamol", "Aspirin", "N/A"];
const mockPatientData = require('./PatientData.json');