//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import {useForm} from "react-hook-form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/navigation';
//import DoctorHomePage from './pages/DoctorHomePage';
import DoctorAddPatientPage from './pages/DoctorAddPatientPage';
import DoctorEditPatientPage from './pages/DoctorEditPatientPage';
import FrontPage from './pages/FrontPage';
//import validator from 'validator';

function App() {
  const [patient] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/doctor/add" element={<DoctorAddPatientPage />} />
        <Route path="/doctor/edit/:id" element={<DoctorEditPatientPage patient={patient} />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
const { register, handleSubmit } = useForm();
function onSubmit(data) {
  console.log(data);
  // {username: "test", email:"test", password:"test"}
}
return (
  <div style={styles.container}>
    <h4>Patient Information</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="name" {...register('name',{
          required: true,
          minLength: 6,
          maxLength: 20,
        })}
        placeholder="John Doe"
        style={styles.input}
      />
      <input
        type="email"{...register("email",{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
        placeholder="johndoe@email.com"
        style={styles.input}
      />
      <input
        type="address"{...register("address",{
          required: true,
        })}
        placeholder="Address"
        style={styles.input}
      />
      <p>Details of patients' visit</p>
      <textarea rows="10" cols="60" type="text" minLength="4"
        maxLength="1200"{...register("text",{
        required: true,
      })}
        placeholder="Enter diagnostic notes"
      />
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  </div>

);
}

const styles = {
container: {
  width: "80%",
  margin: "0 auto",
},
input: {
  width: "100%",
},
};

*/
export default App;




