import React from 'react';
import './MedicalHistory.css';

const mockMedicalHistory = require('./mockedMedicalHistory.json');

function MedicalHistory() {
    return (
        <div className="medical-history-container">
            <h2>Medical History</h2>
            <div className="medical-history-entries">
                {mockMedicalHistory.records.map((record, i) => (
                    <div key={i} className="medical-history-entry">
                        <div className="date">{record.date}</div>
                        <div className="doctor-name">{record.doctorName}</div>
                        <div className="department">{record.department}</div>
                        <div className="diagnosis">{record.diagnosis}</div>
                        <div className="medications">{record.medications}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedicalHistory;
