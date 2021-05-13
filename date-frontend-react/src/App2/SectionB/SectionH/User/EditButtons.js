import React from 'react';

import '../SectionH.css';

import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from '../../../REST_API_COMMUNICATION/token';
import noUiSlider from "nouislider";



class EditButtons extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            updating: false,
            updated:false,
            clickedChanger: false
        }
    }
    componentWillMount(){
        this.setState({
            updating:false,
            updated: false,
            clickedChanger : false
        })
    }
    getProfileInputs(){
        var userName = document.getElementById('username-input').value;
        var ageSlider = document.getElementById('age-slider').noUiSlider.get();
        var male = document.querySelector('input[name="gender"]:checked').value;
        var interested = document.querySelector('input[name="interested-gender"]:checked').value
        var filterSlider = document.getElementById('filter-slider').noUiSlider.get();

        var profile = {
            UserName : userName,
            Age: ageSlider,
            Male : male,
            Interested: interested,
            MinAge: filterSlider[0],
            MaxAge: filterSlider[1]
        };
        return profile;
    }
    updateProfile(){
        console.log('SAVING profile...');

        var data =  this.getProfileInputs();
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
                updating:false
            })
            }
        ).then(()=>{
            this.props.onSave();
        })
    }
    onSave() {
        console.log('saving started');
        //console.log("Profile is: " + JSON.stringify(this.getProfileInputs()));
        this.setState({
            updating: true
        });
        this.updateProfile();
        
        
        
        //this.props.onSave();
        /*UPDATE when state is updated
        this.updateProfile();
        while(!this.state.updating){
            
        }
        this.updated = false;
        this.props.onSave();
        */
       /*
        setTimeout(() => {  this.setState({
            updating: false,
            updated : true
        })
        console.log("Profile is: " + JSON.stringify(this.getProfileInputs()));
        }, 2000);
        */
        
        console.log("Profile is: " + JSON.stringify(this.getProfileInputs()));
        
    }
    onEmailChange(){
        console.log('Email changing');
        this.setState({
            clickedChanger : true
        })
        this.props.onEmailClick();
    }
    onPasswordChange(){
        console.log('password changing');
        this.setState({
            clickedChanger : true
        })
        this.props.onPasswordClick();
    }
    onExit(){
        localStorage.removeItem('DateApplication');
        window.location.reload();
    }
    onCancel(){
        console.log("Clicked on Cancel.");
        this.setState({
            clickedChanger : false
        })
        this.props.onCancel();
    }
    render() {
        var buttonToShow;
        if(this.state.clickedChanger){
            buttonToShow = <button 
            className="secondary-button"
            onClick={this.onCancel.bind(this)}> Mégsem </button>
        }
        else{
            buttonToShow = <button 
            className={this.state.updating? "main-button loading-button" :  "main-button" }
            onClick={this.state.updating? ()=>{} : ()=>this.onSave()}>{this.state.updating ? "Továbbítás alatt..." : "Mentés"}</button>;
        }
        return (
            <div className="h">
                <div className="secondary-holder">

                    <button 
                        className="secondary-button"
                        onClick={()=>this.onEmailChange()}>E-mail módosítás</button>

                    <button 
                        className="secondary-button"
                        onClick={()=>this.onPasswordChange()}>Jelszó módosítás</button>
                    <button 
                        className="support-button"
                        onClick={()=>this.onExit()}>Kilépés</button>
                </div>
                <div className="main-holder">
                    buttonToShow
                </div>
            </div>
        )
    }
}
export default EditButtons;