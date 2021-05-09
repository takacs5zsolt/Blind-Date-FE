import React from 'react';
import '../Global/Global.css';
import Input from '../Global/InputComponent';
import Button from '../Global/ButtonComponent';
import {getFullEndpoint, endpoints} from '../Global/Endpoints';
import {saveToken} from '../Global/Token';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {isLogged : null};
    }
    login(){
        console.log("CLICKED ON LOGIN!");
        var email = document.getElementById("login-email").value;
        var pw = document.getElementById("login-password").value;

        var body = {
            "EMail" : email,
            "PassW" : pw
        }
        console.log(JSON.stringify(body));

        var endpoint = getFullEndpoint(1, false);
        console.log("trying to reach: " + endpoint);
        fetch(endpoint,{
            method : endpoints[1].method,
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res =>{
            if(!res.ok){
                console.log("error occured during login");
                this.setState({isLogged : false});
            }
            else if(res.ok){
                console.log("login successful!");
                this.setState({isLogged : true});
                return res.json();
            }
        })
        .then((data) =>{
            if(this.state.isLogged == true){
                console.log("token : " + data)
                localStorage.setItem('DateApplication', data);
                setTimeout(function(){window.location.reload()}, 1500);
            }
        })
    }
    render() {
        var message = null;
        if(this.state.isLogged === true){
            console.log("evaulated true");
            message = "Logged in successfully!";
        }
        else if(this.state.isLogged === false){
            console.log("evaulated false");
            message = "Email or password was wrong";
        }
        return (
            <div className="section-card">
                <div className="section-title">
                    You can log in here
                <hr></hr>
                </div>
                <div className="section-content">
                    <Input ID="login-email" placeholder="E-mail address" password={false} label="E-mail: " />
                    <Input ID="login-password" type="password" placeholder="Password" password={true} label="Password: " />
                    <button className="button-female" onClick={() => this.state.isLogged === true ? null : this.login()}>LOGIN</button>
                    <p>{message}</p>
                </div>
            </div>
        );
    }
}
export default Login;