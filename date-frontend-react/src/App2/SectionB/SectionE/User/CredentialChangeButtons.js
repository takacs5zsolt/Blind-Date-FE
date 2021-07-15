import React from 'react';

import '../../SectionH/SectionH.css';

import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';



class CredentialChangeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            loading: false,
            result: {
                success: false,
                description: null
            }
        }
    }
    getEmailInputs() {
        var currentPassword = document.getElementById('current-password-input-for-email').value;
        var newEmail = document.getElementById('new-email-input-for-email').value;
        var data = {
            EMail: "",
            PassW: currentPassword,
            NewEmail: newEmail
        };
        return data;
    }
    getPasswordInputs() {
        var currentPassword = document.getElementById('current-password-input-for-password').value;
        var newPassword = document.getElementById('new-password-input-for-password').value;
        var data = {
            EMail: "",
            PassW: currentPassword,
            NewPassword: newPassword
        };
        return data;
    }
    catchError(error){
        this.setState({
            result:{
                description:error
            }
        })
    }
    restoreData(){
        var value1ToRestore = this.props.Clicked == "email" ? "new-email-input-for-email" : "new-password-input-for-password";
        var value2ToRestore = this.props.Clicked == "email" ? "current-password-input-for-email" : "current-password-input-for-password";

        document.getElementById(value1ToRestore).value = "";
        document.getElementById(value2ToRestore).value = "";
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
            this.setState({
                loading:false
            })

            if (!res.ok) {
                console.error("error during updating email");
                this.setState({
                    result:{
                        success: false
                    }
                })
               return res.json();
            }
            else {
                console.log("update email was successful!");
                this.setState({
                    result:{
                        success: true
                    }
                })
                this.restoreData();
                return res.json();
            }
        }).then((res) => {
            this.setState({
                result:{
                    success: this.state.result.success,
                    description: this.state.result.success ? res : res.Message
                }
            })
        }
        )
        .catch(error => {
            console.log(error);

            this.setState({
                result:{
                    success: false,
                    description:"NINCS KAPCSOLAT..."
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
            this.setState({
                loading:false
            })
            if (!res.ok) {
                console.error("error during updating password");
                this.setState({
                    result:{
                        success: false
                    }
                })
                return res.json();
            }
            else {
                console.log("update password was successful!");
                this.setState({
                    result:{
                        success: true
                    }
                })
                this.restoreData();
                return res.json();
            }
        }).then((res) => {
            this.setState({
                result:{
                    success: this.state.result.success,
                    description: this.state.result.success ? res : res.Message
                }
            })
        }
        )
        .catch(error => {
            console.log(error);
            this.setState({
                result:{
                    success: false,
                    description:"NINCS KAPCSOLAT..."
                }
            })
        });
    }
    
    onSave() {
        console.log('saving started');

        this.setState({
            loading: true
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
                <div className="button-holder">
                    <p className={this.state.result.success ? "success-notification" : "error-notification"} style={this.state.result.description === null ? {display : 'none'} : {display:'block'}}>
                       {this.state.result.description}
                   </p>
                    <button
                        className={this.state.loading ? "main-button loading-button" : "main-button"}
                        onClick={this.state.loading ? () => { } : () => this.onSave()}>{this.state.loading ? "Továbbítás alatt..." : "Mentés"}</button>
                   
                </div>
            </div>
        )
    }
}
export default CredentialChangeButtons;