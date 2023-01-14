import React from 'react';
import Patient from './Patient';

function PatientList({ patients, onDelete, onEdit }) {
    return (
        <table id="Patients">
            <caption>You can add/edit patients here</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Date</th>
                    <th>Diagnosis</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, i) => 
                    <Patient
                        patient={patient} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default PatientList;