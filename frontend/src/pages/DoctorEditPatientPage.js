import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const DoctorEditPatientPage = ({ patient }) => {
 
    const [name, setName]       = useState(patient.name);
    const [age, setAge]         = useState(patient.age);
    const [weight, setWeight] = useState(patient.weight);
    const [height, setHeight] = useState(patient.height);
    const [date, setDate] = useState(patient.date);
    const [diagnosis, setDiagnosis] = useState(patient.diagnosis);
    const [unit, setUnit] = useState('');

    
    const history = useNavigate();

    const editPatient = async () => {
        const response = await fetch(`/patients/${patient._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                age: age, 
                weight: weight,
                height: height, 
                date: date,
                diagnosis: diagnosis,
                unit: unit,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert("Successfully edit patient!");
            history.push("/");
        } else {
            const errMessage = await response.json();
            history.push("/");
            alert(`Failed to update patient. Status ${response.status}. ${errMessage.Error}`);
        }
    }

    return (
        <>
        <article>
            <h2>Edit a patient in the database</h2>
            <p>Review the patient in the list and choose one to edit.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                <legend>Which patient do you need to udpate?</legend>
                    <label for="name">Patient name</label>
                    <input
                        required
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />

                <label for="age">Age</label>
                <input
                    type="number"
                    required
                    min="0" max="140"
                    value={age}
                    onChange={e => setAge(e.target.value)} 
                    id="age" />
                <label for="weight">Weight</label>
                <input
                    required
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} 
                    id="weight" />
                <label for="unit">Unit</label>
                <select
                    onChange={e => setUnit(e.target.value)}>
                     <option value ="lb">lb</option>
                     <option value ="kg">kg</option>
                </select> 
                <label for="height">Height</label>
                <input
                    required
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.target.value)} 
                    id="height" />
                <label for="unit">Unit</label>
                <select
                    onChange={e => setUnit(e.target.value)}>
                     <option value ="cm">cm</option>
                     <option value ="inch">inch</option>
                </select> 

                <label for="date">Date</label>    
                <input
                    type="text"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)} 
                    id="date"/>
                <label for="diagnosis">Diagnosis</label>
                    <input  
                        type="text"
                        required
                        placeholder="Edit discussion notes"
                        value="text"
                        onChange={e => setDiagnosis(e.target.value)} />
                <label for="submit">

                <button
                    onClick={editPatient}
                    id="submit"
                >Save</button>change to the database</label>
            </fieldset>
            </form>
        </article>
        </>
    );
}
export default DoctorEditPatientPage;