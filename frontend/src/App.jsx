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
import DoctorHomePage from './pages/DoctorHomePage';
//import validator from 'validator';

function App() {
  const [patient] = useState([]);
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">FrontPage</Link>
        </li>
        <li>
          <Link to="/Doctor">Doctor</Link>
          </li>

      </ul>
    </nav>
    
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Doctor" element={<DoctorHomePage/>} >
          <Route path="./doctorhomepage/add-patient" element={<DoctorAddPatientPage />} />
          <Route path="./doctorhomepage/edit-patient/:id" element={<DoctorEditPatientPage patient={patient} />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;




