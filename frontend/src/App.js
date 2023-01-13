//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useForm} from "react-hook-form";
//import validator from 'validator';

function App() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
    // {username: "test", email:"test", password:"test"}
  }
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div style={styles.container}>
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="username" {...register('username',{
            required: true,
            minLength: 6,
            maxLength: 20, 
          })}
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          {...register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,

          })}
          placeholder="Email"
          style={styles.input}
        />
        <input
          name="password"
          ref={register}
          placeholder="Password"
          style={styles.input}
        />
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


export default App;




