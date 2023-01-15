import React from 'react';
import PatientList from '../components/PatientList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DoctorHomePage.css';


function DoctorHomePage({ setPatient }) {
    // Use the history for updating
    const history = useNavigate();

    const mockPatientData = require('../components/PatientData.json');

    console.log('woooww', mockPatientData.patients);

    // Use state to bring in the data
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        setPatients(mockPatientData.patients);
    }, []);

    // RETRIEVE the list of patient

    const loadPatients = async () => {
        const response = await fetch('/patients');
        const patients = await response.json();
        setPatients(patients);

        // instead, load the data from the hard-coded data
        setPatients(mockPatientData.patients);
    } 
    

    // UPDATE a patient
    const onEditPatient = async patient => {
        setPatients(patient);
        history("/edit-patient");
    }


    // DELETE a patient
    const onDeletePatient = async _id => {
        const response = await fetch(`/patients/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/patients');
            const patients = await getResponse.json();
            setPatients(patients);
        } else {
            console.error(`Failed to delete patients with _id = ${_id}, status code = ${response.status}`)
        }
    }

     //LOAD the patient
    /*useEffect(() => {
        loadPatients();
    }, []);*/

    // DISPLAY the patient
    return (
        <>
        <div className="row">
        <div className="col-md-6">
        <Link to="./record-medical-history-entry" className="btn btn-primary">Record Medical History Entry</Link>
        </div>
        <div className="col-md-6">
        <div className='header-container'>
        <h2>Current Patients</h2>
        </div>
        <PatientList 
                             patients={patients} 
                             onEdit={onEditPatient} 
                             onDelete={onDeletePatient} 
                         />
        </div>
        </div>
        </>
        );
}

export default DoctorHomePage;