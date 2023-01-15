import React from 'react';
import './MedicalHistory.css';

const mockMedicalHistory = require('./mockedMedicalHistory.json');

function MedicalHistory() {
    return (
        <div className="medical-history-container">
        <div className="medical-history-entries">
        {mockMedicalHistory.records.map((record, i) => (
        <div key={i} className="medical-history-entry">
        <div className="date">
        <label className="entry-label">Date: </label>
        <span className="content">{record.date}</span>
        </div>
        <div className="doctor-name">
        <label className="entry-label">Doctor: </label>
        <span className="content">{record.doctorName}</span>
        </div>
        <div className="department">
        <label className="entry-label">Department: </label>
        <span className="content">{record.department}</span>
        </div>
        <div className="diagnosis">
        <label className="entry-label">Diagnosis: </label>
        <span className="content">{record.diagnosis}</span>
        </div>
        <div className="medications">
        <label className="entry-label">Medications: </label>
        <span className="content">{record.medications}</span>
        </div>
        </div>
        ))}
        </div>
        </div>
        );
        }

export default MedicalHistory;
