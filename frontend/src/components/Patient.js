import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import './PatientCard.css'; // Import CSS file
//import {useParams} from "react-router-dom"

import { useNavigate } from 'react-router-dom';

function Patient({ patient, onEdit, onDelete }) {
    //const {id} = useParams();
    const name = patient.name || 'N/A';
    const age = patient.age || 'N/A';
    const weight = patient.weight || 'N/A';
    const height = patient.height || 'N/A';

    const history = useNavigate();

    const handleClick = () => {
        console.log('newwwww', patient);

        history(`/patient-details/${patient._id}`);
    }

    const date = patient.visit_date instanceof Date ? patient.visit_date.toISOString().substring(0, 10) : patient.visit_date instanceof String ? patient.visit_date.substring(0, 10) : 'N/A';
    const diagnosis = patient.diagnosis || 'N/A';


    return (
        <tr className="patient-card" onClick={handleClick}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{weight}</td>            
            <td>{height}</td>
            <td>{date.substring(0, 10)}</td>
            <td>{diagnosis}</td>
            <td><MdDeleteForever onClick={() => onDelete(patient._id)} /></td>
            <td><MdEdit onClick={() => onEdit(patient)} /></td>
        </tr>
    );
}

export default Patient;