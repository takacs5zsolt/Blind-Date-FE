import React from 'react';
/*
import '../Global/Global.css';
import './ChatProfile.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import {createPhotoURL} from '../Global/ImageHandler';

import './SectionH.css';
*/
import stranger from '../../../../Images/stranger_photo.svg';

import Photo from './Photo';

class PhotoSection extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {profile : props.Profile};
        //state;
    }
    componentDidMount(){

    }
    onPhotoChange(){
        this.props.onSave();
    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.setState({profile : newProps.Profile});
    }*/
    render() {
        if(this.props.Profile.ProfileType === "RestrictedProfile"){
            return(
                <div>
                    <p>Majd kesobb lathatod a fenykepeit.</p>
                </div>
            )
        }
        else{
            return(        
                <div className="photo-section">
                    <Photo onSave={this.onPhotoChange.bind(this)} Photo={this.props.Profile.Photo1} ProfileType={this.props.Profile.ProfileType} Place={1} />
                    <Photo onSave={this.onPhotoChange.bind(this)} Photo={this.props.Profile.Photo2} ProfileType={this.props.Profile.ProfileType} Place={2} />
                    <Photo onSave={this.onPhotoChange.bind(this)} Photo={this.props.Profile.Photo3} ProfileType={this.props.Profile.ProfileType} Place={3} />
                    <Photo onSave={this.onPhotoChange.bind(this)} Photo={this.props.Profile.Photo4} ProfileType={this.props.Profile.ProfileType} Place={4} />
                    <Photo onSave={this.onPhotoChange.bind(this)} Photo={this.props.Profile.Photo5} ProfileType={this.props.Profile.ProfileType} Place={5} />
                </div>
            )
        }
    }
}
export default PhotoSection;