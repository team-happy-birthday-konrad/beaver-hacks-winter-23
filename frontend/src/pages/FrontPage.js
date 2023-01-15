import React from 'react';
//import {MdRestaurant, MdShoppingCart, MdFoodBank} from 'react-icons/md';
//import {BiDrink} from 'react-icons/bi';
//import {SiFoodpanda} from 'react-icons/si';
import logo from './initialcrop_w_trans.png';

import './FrontPage.css';


function FrontPage() {
    return (
        <div className="landing-page">
            <img src={logo} alt='B++MedicEHR'/>
            <h2 className="welcome-message">Welcome to our electronic medical record system</h2>
            <div className="form-container">
            <h3 className="form-header">Patient Sign In</h3>
                <form className="patient-form">
                    <label>
                         Patient Username:
                        <input type="email" placeholder="Enter username" required/>
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Enter password" required/>
                    </label>
                    <button type="submit">Sign In</button>
</form>

                <h3 className="form-header">Staff Sign In</h3>
                <form className="doctor-form">
                    <label>
                        BMEHR Email:
                        <input type="email" placeholder="Enter email ending with @bmehr.org" required/>
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Enter password" required/>
                    </label>
                    <button type="submit">Sign In</button>
                </form>
                
</div>
</div>
);
}

export default FrontPage;