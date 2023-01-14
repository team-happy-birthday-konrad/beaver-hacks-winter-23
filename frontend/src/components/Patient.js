import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Patient({ patient, onEdit, onDelete }) {
    console.log(patient);

    const name = patient.name || 'N/A';
    const age = patient.age || 'N/A';
    const weight = patient.weight || 'N/A';
    const height = patient.height || 'N/A';

    // if date is a date object, convert it to a string of the form YYYY-MM-DD.
    // if date is a string object, check if it is in the form YYYY-MM-DD.
    // if date is a string object, but not in the form YYYY-MM-DD, then return 'N/A'.
    const date = patient.date instanceof Date ? patient.date.toISOString().substring(0,10) : patient.date instanceof String ? patient.date.substring(0,10) : 'N/A';
    const diagnosis = patient.diagnosis || 'N/A';


    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{weight}</td>            
            <td>{height}</td>
            <td>{date.substring(0,10)}</td>
            <td>{diagnosis}</td>
            <td><MdDeleteForever onClick={() => onDelete(patient._id)} /></td>
            <td><MdEdit onClick={() => onEdit(patient)} /></td>
        </tr>
    );
}

export default Patient;