import React from 'react';
import PatientList from '../components/PatientList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorHomePage({ setPatient }) {
    // Use the history for updating
    const history = useNavigate();

    // Use state to bring in the data
    const [patients, setPatients] = useState([]);

    // RETRIEVE the list of patient
    const loadPatients = async () => {
        const response = await fetch('/patients');
        const patients = await response.json();
        setPatients(patients);
    } 
    

    // UPDATE a patient
    const onEdit = async patient => {
        setPatients(patient);
        history.push("/edit-patient");
    }


    // DELETE a patient
    const onDelete = async _id => {
        const response = await fetch(`/patients/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/patients');
            const patients = await getResponse.json();
            setPatients(patients);
        } else {
            console.error(`Failed to delete patients with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the patient
    useEffect(() => {
        loadPatients();
    }, []);

    // DISPLAY the patient
    return (
        <>
            <article>
                <h2>Current Patients</h2>
                <PatientList 
                    patients={patients} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            </article>
        </>
    );
}

export default DoctorHomePage;