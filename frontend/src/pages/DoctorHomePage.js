import React from 'react';
import PatientList from '../components/PatientList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorHomePage.css';


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

    
    const data = {
        "patients" : [
            {
                "name": "Nancy Le",
                "age": 20,
                "weight": 50,
                "unit": "kg",
                "height": 170,
                "data": "01-11-2022",
                "diagnosis": "Need to take more multivitamin"
            },
            {
                "name": "Bob Littleman",
                "age": 50,
                "weight": 120,
                "unit":"lb",
                "height": 180,
                "data": "07-31-2019",
                "diagnosis": "Collapsed colon. Needs xray and pain med"
            },
            {
                "name": "Cat Tom",
                "age": 34,
                "weight": 75,
                "unit":"lb",
                "height": 177,
                "data": "03-06-2021",
                "diagnosis": "Increase dosage for mouse allergy"
            },
            {
                "name": "Jerry Sassy Mouse",
                "age": 29,
                "weight": 71,
                "unit": "kg",
                "height": 160,
                "data": "02-22-2021",
                "diagnosis": "Xanax for ADHD"
            },
    ]}
    

    // DISPLAY the patient
    return (
        <>
            <article>
                <div class='header-container'>
                    <h2>Current Patients</h2>
                </div>
                <PatientList 
                    patients={data.patients} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            </article>
        </>
    );
}

export default DoctorHomePage;