import React from 'react';
import Patient from './Patient';
import './PatientList.css';

function PatientList({ patients, onDelete, onEdit }) {
    return (
        <table id="Patients">
            <caption className="caption-styling">You can add/edit patients here</caption>
            <thead className="table-header-styling">
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