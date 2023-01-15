import React from 'react';
//import {MdRestaurant, MdShoppingCart, MdFoodBank} from 'react-icons/md';
//import {BiDrink} from 'react-icons/bi';
//import {SiFoodpanda} from 'react-icons/si';

import './FrontPage.css';

function FrontPage() {
    return (
        <div className="landing-page">
            <h1 className="app-name">MediCare</h1>
            <h2 className="welcome-message">Welcome to our electronic medical record system</h2>
            <div className="form-container">
                <h3 className="form-header">Doctor Sign In</h3>
                <form className="doctor-form">
                    <label>
                        Email:
                        <input type="email" placeholder="Enter email" required/>
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="Enter password" required/>
                    </label>
                    <button type="submit">Sign In</button>
                </form>
                <h3 className="form-header">Patient Sign In</h3>
                <form className="patient-form">
                    <label>
                        Email:
                        <input type="email" placeholder="Enter email" required/>
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