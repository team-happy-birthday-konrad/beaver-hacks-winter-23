import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Patient({ patient, onEdit, onDelete }) {
    return (
        <tr>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.weight}</td>            
            <td>{patient.height}</td>
            <td>{patient.date.substring(0,10)}</td>
            <td>{patient.diagnosis}</td>
            <td><MdDeleteForever onClick={() => onDelete(patient._id)} /></td>
            <td><MdEdit onClick={() => onEdit(patient)} /></td>
        </tr>
    );
}

export default Patient;