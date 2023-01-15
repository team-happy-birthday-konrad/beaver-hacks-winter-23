import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import './PatientCard.css'; // Import CSS file
import './PatientModal.css'; // Import CSS file
//import {useParams} from "react-router-dom"
//import { Modal } from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Patient({ patient, onEdit, onDelete }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const handleClick = (selectedRec) => {
        setSelectedData(selectedRec);
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
        <div className="App">
            <table class="table">
            <thead>
                <tr className="patient-card" >
                    <th scope ="col">Name</th>
                    <th scope ="col">Age</th>
                    <th scope = "col">Weight</th>
                    <th scope = "col">Height</th>
                    <th scope = "col">Date</th>
                    <th scope = "col">Diagnosis</th>
                    <th scope ="col">Action</th>
                    <th scope ="col">Show Details</th>
                </tr>

            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{weight}</td>            
                <td>{height}</td>
                <td>{date.substring(0, 10)}</td>
                <td>{diagnosis}</td>
                <td><MdDeleteForever onClick={() => onDelete(patient._id)} />
                <MdEdit onClick={() => onEdit(patient)} /></td>
                <td>
                    <a href ="#" onClick={()=> handleClick(patient)}>
                        More details
                    </a>
                </td>
        </tr> 
    </tbody>
    </table>
        {showModal && <Modal details ={selectedData} handleClose={handleModalClose} />}
</div>
);
}

const Modal = ({ handleClose, details }) => {
    return (
      <div className="modal display-block">
        <section className="modal-main">
          <div className="App">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Height</th>
                  <th scope="col">Date</th>
                  <th scope="col">Diagnosis</th>
                  <th scope="col">Address</th>
                  <th scope="col">Insurance</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details.name}</td>
                  <td>{details.age}</td>
                  <td>{details.weight}</td>
                  <td>{details.height}</td>
                  <td>{details.date}</td>
                  <td>{details.diagnosis}</td>
                  <td>{details.address}</td>
                  <td>{details.insurance}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };



