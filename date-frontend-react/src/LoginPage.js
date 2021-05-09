import React from 'react';
import './LoginPage.css';
import Login from './Components/HomePage/LoginComponent';

function LoginPage() {
    return(
        <Login />
    );
    /*
    return (
        <div id="wrapper">
            <div id="login-container" className="section">
                <p>Login</p>
                <input id="login-email" type="email" placeholder="e-mail address"></input><br></br>
                <input id="login-password" type="password" placeholder="password"></input><br></br>
                <input type="button" value="LOGIN"></input>
            </div>
            <div id="registration-container" className="section">
                <p>Registration</p>
                <div id="auth section">
                    <input id="registration-email" type="email" placeholder="e-mail address"></input><br></br>
                    <input id="registration-password" type="password" placeholder="password"></input><br></br>
                    <input id="registration-password-confirm" type="password" placeholder="confirm password"></input>
                </div>
                <hr></hr>
                <div id="account-section">
                    <p>Account information</p>
                    <input id="name" type="text" placeholder="Name"></input><br></br>
                    <input id="age" type="number" min="18" max="90" step="1" value="25"></input>
                    <div id="gender">
                        <label>
                            <input type="radio" value="Male" name="gender" radioGroup="gender"></input>
                            Male
                        </label>
                        <label>
                            <input type="radio" value="Female" name="gender" radioGroup="gender"></input>
                            Female
                        </label>
                    </div>
                    <div id="photo-upload">
                        <input type="file"></input>
                    </div>
                </div>
                <hr></hr>
                <div id="search">
                    <p>Search options</p>
                    <div id="interested-gender">
                        <label>
                            <input type="radio" value="Male" name="interested" radioGroup="interested" ></input>
                                Male
                            </label>
                        <label>
                            <input type="radio" value="Female" name="interested" radioGroup="interested"></input>
                                Female
                            </label>
                    </div>
                    <div id="age-filter">
                        <input type="number" min="18" max="90" step="1" value="20"></input><span> - </span>
                        <input type="number" min="18" max="90" step="1" value="30"></input>
                    </div>
                </div>
                <div id='register-button'>
                    <input type="button" value="REGISTER"></input>
                </div>
            </div>
        </div>
    );*/
}

export default LoginPage;