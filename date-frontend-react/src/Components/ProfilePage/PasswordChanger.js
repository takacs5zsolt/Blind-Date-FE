import React from 'react';
import Input from '../Global/InputComponent';
import '../Global/Global.css';
import { NavLink } from 'react-router-dom';
import {endpoints, getFullEndpoint} from '../Global/Endpoints';

class PasswordChanger extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { updated: null,
        passwordMatch : null};
    }
    validatePassword(password, confirmPassword){
        if(password === confirmPassword){
            return true;
        }
        return false;
    }
    handleOK(){
        //this.setState({updated:true});

        var email = document.getElementById('mail').value;
        var oldPass = document.getElementById('current-password').value;
        var newPass = document.getElementById('new-password').value;
        var newPassConfirm = document.getElementById('new-password-confirm').value;

        var isValid = this.validatePassword(newPass, newPassConfirm);

        if(isValid){
            var endpoint = getFullEndpoint(9, false);
            var bodyData = {
                "EMail" : email,
                "PassW" : oldPass,
                "NewPassword" : newPass
            }

            fetch(endpoint,{
                method : endpoints[9].method,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
                },
                body: JSON.stringify(bodyData)
            })
            .then(resp =>{
                if(resp.ok){
                    this.setState({updated : true,
                    passwordMatch : true});
                }
                else{
                    this.setState({updated : false, passwordMatch: true});
                }
            })
        }
        else{
            this.setState({updated:null, passwordMatch : false});
        }
    }
    render() {
        if (this.state.updated === true) {
            return (
                <div className="section section-card">
                    <Input ID="mail" label="E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-password" label="New password: " placeholder="New password" type="password" />
                    <Input ID="new-password-confirm" label="New password confirm: " placeholder="Confirm your new password" type="password" />
                    <Input ID="current-password" label="Current password: " placeholder="Your current password" type="password" />
                    <p>Your password has been changed successfully!</p>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        if(this.state.passwordMatch === false){
            return (
                <div className="section section-card">
                    <Input ID="mail" label="E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-password" label="New password: " placeholder="New password" type="password" />
                    <Input ID="new-password-confirm" label="New password confirm: " placeholder="Confirm your new password" type="password" />
                    <Input ID="current-password" label="Current password: " placeholder="Your current password" type="password" />
                    <p>New password mismatch!</p>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        if(this.state.updated === false){
            return (
                <div className="section section-card">
                    <Input ID="mail" label="E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-password" label="New password: " placeholder="New password" type="password" />
                    <Input ID="new-password-confirm" label="New password confirm: " placeholder="Confirm your new password" type="password" />
                    <Input ID="current-password" label="Current password: " placeholder="Your current password" type="password" />
                    <p>E-mail or current password was wrong!</p>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        return (
            <div className="section section-card">
                <Input ID="mail" label="E-mail address: " placeholder="E-mail address" type="e-mail" />
                <Input ID="new-password" label="New password: " placeholder="New password" type="password" />
                <Input ID="new-password-confirm" label="New password confirm: " placeholder="Confirm your new password" type="password" />
                <Input ID="current-password" label="Current password: " placeholder="Your current password" type="password" />
                <button className="button-female" onClick={()=>this.handleOK()}>OK</button>
                <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
            </div>
        );

    }
}
export default PasswordChanger;