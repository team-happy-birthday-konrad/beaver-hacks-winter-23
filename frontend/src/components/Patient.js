import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import './PatientCard.css'; // Import CSS file
import './PatientModal.css'; // Import CSS file
//import {useParams} from "react-router-dom"
import { Modal } from 'react-bootstrap';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Patient({ patient, onEdit, onDelete }) {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      setShowModal(true);
    }
  
    const handleModalClose = () => {
      setShowModal(false);
    }

    //const {id} = useParams();
    const name = patient.name || 'N/A';
    const age = patient.age || 'N/A';
    const weight = patient.weight || 'N/A';
    const height = patient.height || 'N/A';
    const diagnosis = patient.diagnosis || 'N/A';
    const address = patient.address || 'N/A';
    const insurance = patient.insurance || 'N/A';
    const date = patient.visit_date instanceof Date ? patient.visit_date.toISOString().substring(0, 10) : patient.visit_date instanceof String ? patient.visit_date.substring(0, 10) : 'N/A';

    const history = useNavigate();

    // const handleClick = () => {
    //     console.log('Patient was clicked', patient);

    //     history(`/patient-details/${patient._id}`);
    // }



    return (
        <div>
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

        <div >
        <Modal className="patient-modal" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <p>Visit Date: {date}</p>
          <p>Diagnosis: {diagnosis}</p>
          <p>Address: {address}</p>
          <p>Insurance: {insurance}</p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleModalClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
    );
}

export default Patient;