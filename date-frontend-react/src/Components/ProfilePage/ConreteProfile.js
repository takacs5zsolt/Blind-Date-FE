import React from 'react';
import BasicProfileData from './BasicProfileData';
import AdvancedProfileData from './AdvancedProfileData';
import Abilites from './Abilities';
import './Profile.css';
import PhotoData from './PhotoData';
import {endpoints, getFullEndpoint} from '../Global/Endpoints';

class ConcreteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            successfull: null,
            genderValid: null,
            interestedValid: null,
            agesValid: null
        }
    }
    validateRadioSelector(groupName){
        var selected = document.querySelector('input[name="' + groupName + '"]:checked');
        if(selected == null){
            return false;
        }
        return true;
    }
    validateAge(minAge, maxAge){
        if(minAge < maxAge){
            return true;
        }
        return false;
    }
    updateProfile(){
        console.log("About to update profile...");
        var data = this.collectData();
        var endpoint = getFullEndpoint(5, false);
        if(data != null){
            fetch(endpoint,{
                method: endpoints[5].method,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
                },
                body: JSON.stringify(data)
            })
            .then(resp=>{
                if(resp.ok){
                    this.setState({successfull : true});
                }
                else{
                    this.setState({successfull : false});
                }
            })
        }
    }
    collectData(){
        var name = document.getElementById('user-name').value;
        var age = document.getElementById('user-age').value;
        var ageMin = document.getElementById('age-filter-min').value;
        var ageMax = document.getElementById('age-filter-max').value;
        var gender;
        var interested;

        if(this.validateRadioSelector("Gender")){
            gender = document.querySelector('input[name="Gender"]:checked').value;
        }
        else{
            this.setState({genderValid : false});
            return null;
        }
        
        if(this.validateRadioSelector("Interested")){
            interested = document.querySelector('input[name="Interested"]:checked').value;
        }
        else{
            this.setState({interestedValid : false});
            return null;
        }

        if(!this.validateAge(ageMin, ageMax)){
            this.setState({agesValid : false});
            return null;
        }

        var userProfile = {
            "UserName": name,
            "Age": age,
            "Male": gender,
            "Interested": interested,
            "MinAge": ageMin,
            "MaxAge": ageMax
        };

        return userProfile;
    
    }
    infoText(){
        if(this.state.successfull === false){
            return "Something went wrong during connecting to the server.... Please try again later.";
        }
        if(this.state.agesValid === false){
            return "Minimum age must be less than maximum age!";
        }
        if(this.state.genderValid === false){
            return "Please select your gender!";
        }
        if(this.state.interestedValid === false){
            return "Please select your interested gender!";
        }
        if(this.state.successfull === true){
            return "Profile has been updated successfully!";
        }
    }
    render() {
        console.log("render of concrete profile");
        console.log("Type of Profile: " + this.props.data.ProfileType);
        if(this.props.data.ProfileType == "FullUserProfile"){
            return(
                <div className="profile-page">
                    <BasicProfileData profile={this.props.data} />
                    <AdvancedProfileData profile={this.props.data} />
                    <hr></hr>
                    <PhotoData profile={this.props.data} />
                    <input type="button" className="button-female" id="okBtn" value="UPDATE" onClick={() => this.updateProfile()}></input>
                    <p>{this.infoText()}</p>
                </div>
            )
        }
        return (
            <div className="profile-page">
                <BasicProfileData profile={this.props.data} />
                <hr></hr>
                <Abilites profile={this.props.data} Abilities={this.props.data.Abilities}/>
                <hr></hr>
                <PhotoData profile={this.props.data} />
            </div>
        );
    }
}
export default ConcreteProfile;