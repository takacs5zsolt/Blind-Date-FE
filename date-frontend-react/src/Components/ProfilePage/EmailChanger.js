import React from 'react';
import Input from '../Global/InputComponent';
import '../Global/Global.css';
import {NavLink} from 'react-router-dom';
import {endpoints, getFullEndpoint} from '../Global/Endpoints';

class EmailChanger extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state={updated:null}
    }
    handleOK(){
        //this.setState({updated:true});

        var oldEmail = document.getElementById('old-mail').value;
        var newEmail = document.getElementById('new-mail').value;
        var password = document.getElementById('password').value;

        var body = {
            "EMail" : oldEmail,
            "PassW" : password,
            "NewEmail" : newEmail
        }

        var endpoint = getFullEndpoint(10, false);
        
        fetch(endpoint, {
            method: endpoints[10].method,
            headers:{
                "Content-Type":"application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            },
            body: JSON.stringify(body)
        })
        .then(resp =>{
            if(resp.ok){
                this.setState({updated:true})
            }
            else{
                this.setState({updated:false});
            }
        })
    }
    render() {
        if(this.state.updated === true){
            return(
                <div className="section-card section center-self">
                    <Input ID="old-mail" label="Old E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-mail" label="New E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="password" label="Current password: " placeholder="password" type="password" />
                    <p>E-mail changed successfully!</p>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        else if(this.state.updated === false){
            return(
                <div className="section-card sectionz center-self">
                    <Input ID="old-mail" label="Old E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-mail" label="New E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="password" label="Current password: " placeholder="password" type="password" />
                    <p>Current e-mail or password was wrong!</p>
                    <button className="button-female"onClick={()=>this.handleOK()}>OK</button>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        else{
            return(
                <div className="section-card sectionz center-self">
                    <Input ID="old-mail" label="Old E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="new-mail" label="New E-mail address: " placeholder="E-mail address" type="e-mail" />
                    <Input ID="password" label="Current password: " placeholder="password" type="password" />
                    <button className="button-female"onClick={()=>this.handleOK()}>OK</button>
                    <NavLink to="/profile"><button className="button-male">BACK</button></NavLink>
                </div>
            );
        }
        
        
    }
}
export default EmailChanger;