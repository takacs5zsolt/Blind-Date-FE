import React from 'react';

import '../SectionH.css';

import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from '../../../REST_API_COMMUNICATION/token';
import noUiSlider from "nouislider";



class CredentialChangeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            showEmailChange: false,
            emailLoading: false,
            emailResult: {
                success: false,
                description: null
            },

            showPasswordChange: false,
            passwordLoading: false,
            passwordResult: {
                success: false,
                description: null
            },
        }
    }
    /*
    componentWillMount() {
        this.setState({
            updating: false,
            updated: false
        })
    }
    */
    getEmailInputs() {
        var currentEmail = document.getElementById('current-email-input-for-email').value;
        var currentPassword = document.getElementById('current-password-input-for-email').value;
        var newEmail = document.getElementById('new-email-input-for-email').value;
        var data = {
            EMail: currentEmail,
            PassW: currentPassword,
            NewEmail: newEmail
        };
        return data;
    }
    getPasswordInputs() {
        var currentEmail = document.getElementById('current-email-input-for-password').value;
        var currentPassword = document.getElementById('current-password-input-for-password').value;
        var newPassword = document.getElementById('new-password-input-for-password').value;
        var data = {
            EMail: currentEmail,
            PassW: currentPassword,
            NewPassword: newPassword
        };
        return data;
    }
    updateEmail() {
        console.log('SAVING email...');

        var data = this.getEmailInputs();
        var endpoint = getFullEndpoint(endpoints.ChangeEmail, false);

        fetch(endpoint, {
            method: endpoints.ChangeEmail.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (!res.ok) {
                console.error("error during updating email");
                throw Error(res.json());
            }
            else {
                console.log("update email was successful!");
                return res.json();
            }
        }).then((res) => {
            this.setState({
                emailLoading : false,
                emailResult:{
                    success: true,
                    description: res
                }
            })
        }
        )
        /*
        .then(() => {
            this.props.onSave();
        })*/
        .catch(function(error){
            console.log(error);
            this.setState({
                emailLoading : false,
                emailResult:{
                    success: false,
                    description: error
                }
            })
        });
    }
    updatePassword() {
        console.log('SAVING password...');

        var data = this.getPasswordInputs();
        var endpoint = getFullEndpoint(endpoints.ChangePassword, false);

        fetch(endpoint, {
            method: endpoints.ChangePassword.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (!res.ok) {
                console.error("error during updating password");
                throw Error(res.json());
            }
            else {
                console.log("update password was successful!");
                return res.json();
            }
        }).then((res) => {
            this.setState({
                passwordLoading : false,
                passwordResult:{
                    success: true,
                    description: res
                }
            })
        }
        )
        /*
        .then(() => {
            this.props.onSave();
        })*/
        .catch(function(error){
            console.log(error);
            this.setState({
                passwordLoading : false,
                passwordResult:{
                    success: false,
                    description:error
                }
            })
        });
    }
    /*
    updateProfile() {
        console.log('SAVING profile...');

        var data = this.getProfileInputs();
        var endpoint = getFullEndpoint(endpoints.UpdateProfile, false);

        fetch(endpoint, {
            method: endpoints.UpdateProfile.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (!res.ok) {
                console.error("error during updating profile.");
            }
            else {
                console.log("update profile was successful!");
                //return res.json();
            }
        }).then(() => {
            this.setState({
                updated: true,
                updating: false
            })
        }
        ).then(() => {
            this.props.onSave();
        })
    }*/
    onSave() {
        console.log('saving started');
        //console.log("Profile is: " + JSON.stringify(this.getProfileInputs()));
        this.setState({
            updating: true
        });
        if(this.props.Clicked == "email"){
            this.updateEmail();
        }
        else if(this.props.Clicked == "password"){
            this.updatePassword();
        }
        else{
            return;
        }
        //this.updateProfile();

        //console.log("Profile is: " + JSON.stringify(this.getProfileInputs()));

    }
    onEmailChange() {
        console.log('Email changing');
    }
    onPasswordChange() {
        console.log('password changing');
    }
    onExit() {
        localStorage.removeItem('DateApplication');
        window.location.reload();
    }
    render() {
        return (
            <div className="main-container">
                <div className="secondary-holder">
                    <div id="email-change-form" style={{display: this.props.Clicked == "email" ? "block" : "none"}}>
                        <div id="new-email-container-for-email" className="input-line input-box">
                            <label htmlFor="new-email-input-for-email">Az új e-mail címed:</label>
                            <input className="inputField"
                                type="text"
                                id="new-email-input-for-email"
                                maxLength="25">
                            </input>
                        </div>
                        <div id="current-email-container-for-email" className="input-line input-box">
                            <label htmlFor="current-email-input-for-email">A jelenlegi e-mail címed:</label>
                            <input className="inputField"
                                type="text"
                                id="current-email-input-for-email"
                                maxLength="25">
                            </input>
                        </div>
                        <div id="current-password-container-for-email" className="input-line input-box">
                            <label htmlFor="current-password-input-for-email">A jelenlegi jelszavad:</label>
                            <input className="inputField"
                                type="password"
                                id="current-password-input-for-email"
                                maxLength="25">
                            </input>
                        </div>
                    </div>
                    <div id="password-change-form" style={{display: this.props.Clicked == "password" ? "block" : "none"}}>
                        <div id="new-password-container-for-password" className="input-line input-box">
                            <label htmlFor="new-password-input-for-password">Az új jelszavad:</label>
                            <input className="inputField"
                                type="password"
                                id="new-password-input-for-password"
                                maxLength="25">
                            </input>
                        </div>
                        <div id="current-email-container-for-password" className="input-line input-box">
                            <label htmlFor="current-email-input-for-password">A jelenlegi e-mail címed:</label>
                            <input className="inputField"
                                type="text"
                                id="current-email-input-for-password"
                                maxLength="25">
                            </input>
                        </div>
                        <div id="current-password-container-for-password" className="input-line input-box">
                            <label htmlFor="current-password-input-for-password">A jelenlegi jelszavad:</label>
                            <input className="inputField"
                                type="password"
                                id="current-password-input-for-password"
                                maxLength="25">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="main-holder">
                    <button
                        className={this.state.updating ? "main-button loading-button" : "main-button"}
                        onClick={this.state.updating ? () => { } : () => this.onSave()}>{this.state.updating ? "Továbbítás alatt..." : "Mentés"}</button>
                </div>
            </div>
        )
    }
}
export default CredentialChangeButtons;