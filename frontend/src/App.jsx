//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import {useForm} from "react-hook-form";
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import Navigation from './components/navigation';
//import DoctorHomePage from './pages/DoctorHomePage';
import DoctorAddPatientPage from './pages/DoctorAddPatientPage';
import DoctorEditPatientPage from './pages/DoctorEditPatientPage';
import FrontPage from './pages/FrontPage';
import PatientDetails from './pages/PatientDetails';
//import SearchPatientPage from './pages/SearchPatientPage';
import DoctorHomePage from './pages/DoctorHomePage';
import PatientHomePage from './pages/PatientHomePage';
import NotFoundPage from './pages/NotFoundPage';
//import SearchBar from '.components/SearchPatient';
//import validator from 'validator';


function App() {
  const [patient] = useState([]);
  return (
    <>
    <div className="header-container">
      <ul className="header-tabs">
        <li>
          <Link to="/" className="tab-link">Home</Link>
        </li>
        <li>
          <Link to="/Doctor" className="tab-link">Staff View</Link>
        </li>
        <li>
          <Link to="/Patient" className="tab-link">Patient View</Link>
        </li>
      </ul>
    </div>
    <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Patient" element={<PatientHomePage />} />
        <Route path="/Doctor" element={<DoctorHomePage/>} />
        <Route path="/Doctor/add-patient" element={<DoctorAddPatientPage />} />
        <Route path="/Doctor/edit-patient/:id" element={<DoctorEditPatientPage patient={patient} />} />
        <Route path="/Doctor/:id" element={<PatientDetails />} />

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}


export default App;




