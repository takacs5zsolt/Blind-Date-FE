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
import stranger from "../../../../Images/stranger_photo.svg";
import Abilities from '../../../SectionB/SectionH/Other/Abilities/Abilities';
import SeparatorLine from '../../../SeparatorLine/Separator';

import './ProfilePage.css';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {profile : props.Profile};
        //state;
    }
    componentDidMount(){

    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.setState({profile : newProps.Profile});
    }
    */
    onVote(activity){
        this.props.onVote(activity);
    }
    render() {
        if(this.props.Profile.ProfileType === "RestrictedProfile" || this.props.Profile.ProfileType === "FullProfile"){
            return(
                <div>
                    <div id="basic-data">
                        <div className="center-data">
                            <img className="main-photo" src={this.props.Profile.ProfileType == "RestrictedProfile" ? stranger : this.props.Profile.Photo1}></img>
                        </div>
                        <p className="center-data name">{this.props.Profile.UserName}</p>
                        <p className="center-data age">{this.props.Profile.Age}</p>
                    </div>
                    <SeparatorLine />
                    <div>
                        <Abilities Profile={this.props.Profile} onVote={this.onVote.bind(this)}/>
                    </div>
                </div>
            )
        }
        else{
            return(        
                <div>
                    <div id="basic-data">
                        <div className="center-data">
                            <img className="main-photo" src={this.props.Profile.ProfileType == "RestrictedProfile" ? stranger : this.props.Profile.Photo1}></img>
                        </div>
                        <p className="center-data name">{this.props.Profile.UserName}</p>
                        <p className="center-data age">{this.props.Profile.Age}</p>
                    </div>
                </div>
            )
        }
    }
}
export default ProfilePage;