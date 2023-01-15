import React from 'react';
import Patient from './Patient';
import './PatientList.css';

function PatientList({ patients, onDelete, onEdit }) {
    return (

        <div className="table-container">

            <table id="Patients">
                <caption className="caption-styling">You can add/edit patients here</caption>
                <thead className="table-header">

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
        </div>
    );
}

export default PatientList;