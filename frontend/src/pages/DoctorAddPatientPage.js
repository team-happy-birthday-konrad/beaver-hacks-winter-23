import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const DoctorAddPatientPage = () => {

    const [name, setName]       = useState('');
    const [age, setAge]         = useState('');
    const [weight, setWeight] = useState('lb');
    const [unit, setUnit] = useState('');
    const [height, setHeight] = useState('cm');
    const [date, setDate] = useState('');
    const [diagnosis, setDiagnosis] = useState(' ');
     
    const history = useNavigate();

    const addPatient = async () => {
        const newPatient = { name, age, weight, height, date, diagnosis,unit };
        const response = await fetch('/patients', {
            method: 'post',
            body: JSON.stringify(newPatient),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the patient!");
        } else {
            alert(`Failed to add patient, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add Patient to the Database</h2>
            <p>Fill out the fields below to add a new patient.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Please fill out patient information?</legend>
                    <label for="name">Patient name</label>
                    <input
                          type="text"
                          placeholder="Patient name"
                          value={name}
                          required
                          onChange={e => setName(e.target.value)} 
                          id="name" />
                          

                    <label for="age">Age</label>
                    <input
                        type="number"
                        value={age}
                        required
                        placeholder="Patient Age"
                        min="0" max="10"
                        onChange={e => setAge(e.target.value)} 
                        id="age" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        required
                        placeholder="Patient Weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight"/>

                    <label for="unit">Unit</label>
                    <select
                        onChange={e => setUnit(e.target.value)}>
                        <option value="lb">lb</option>
                        <option value="kg">kg</option>
                    </select>

                    <label for="height">Height</label>
                    <input
                        type="number"
                        required
                        placeholder="Patient Height"
                        value={height}
                        onChange={e => setHeight(e.target.value)} 
                        id="height"/>

                    <label for="height">height</label>
                    <select
                        onChange={e => setUnit(e.target.value)}>
                        <option value="cm">cm</option>
                        <option value="inch">inch</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        required
                        placeholder="DD-MM-YYYY"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                    <label for="diagnosis">Diagnosis</label>
                    <input  
                        type="text"
                        required
                        placeholder="Enter discussion notes"
                        value="text"
                        onChange={e => setDiagnosis(e.target.value)} />
                    <label for="submit">
                    <button
                        onClick={addPatient}
                        id="submit"
                    >Add</button> patient to the database</label>
                </fieldset>
                </form>
            </article>
            </>
    );
}

export default DoctorAddPatientPage;