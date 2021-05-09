import React from 'react';
import InputComponent from '../Global/InputComponent';
import RadioComponent from '../Global/RadioComponent';
import stranger from '../../Images/stranger_photo.svg';
import RadioGroup from '../Global/RadioGroupComponent';
import VerifiedComponent from '../Global/VerifiedComponent';
import GenderComponent from '../Global/GenderComponent';
import '../Global/Global.css';
import {createPhotoURL} from '../Global/ImageHandler';

const genderSelectorOptions =[
    {
        ID: "gender-male",
        value: true,
        label: "Male"
    },
    {
        ID:"gender-female",
        value: false,
        label: "Female"
    }
]

class BasicProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        //console.log("RENDER OF BASIC PROFILE DATA");
        //console.log(this.props.profile);
        //console.log("Gender value must be: " + this.props.profile.Male);
        if(this.props.profile.ProfileType == "FullUserProfile"){
            return (
                <div>
                    <img className="nav-photo" src={createPhotoURL(this.props.profile.Photo1)}></img>
                    <div>
                        <input className="input" id="user-name" type="text" defaultValue={this.props.profile.UserName}></input><br></br>
                        <input className="input" id="user-age" type="number" defaultValue={this.props.profile.Age} step="1" min="18" max="60"></input><br></br>
                        <RadioGroup GroupName="Gender" options={genderSelectorOptions} defaultValue={this.props.profile.Male}/>
                        <VerifiedComponent Verified={this.props.profile.Verified} />
                    </div>
                </div>
            );
        }
        else{

            return (
                <div>
                <img className="nav-photo" src={this.props.profile.ProfileType == "FullProfile" ?
                createPhotoURL(this.props.profile.Photo1) : stranger}></img>
                <div>
                    <p>{this.props.profile.UserName}</p>
                    <p>{this.props.profile.Age}</p>
                    <GenderComponent Gender={this.props.profile.Male} />
                    <VerifiedComponent Verified={this.props.profile.Verified} />
                </div>
            </div>
        );
        }
    }
}
export default BasicProfileData;