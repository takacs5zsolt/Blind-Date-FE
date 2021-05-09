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
*/

import stranger from "../../../../../Images/stranger_photo.svg";
import './ChatProfile.css';

class ChatProfile extends React.Component {
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
    render() {
        //var path = "/profile/" + this.state.profile.UserID;
        return(
            <div className="small-profile">
                <div id="profile-picture">
                    <img src={this.props.Profile.ProfileType == "FullProfile" ? this.props.Profile.Photo1 : stranger} className="small-profile-img"></img>
                </div>
                <div id="profile-data" className="data">
                    <h2 className="partner-name">{this.props.Profile.UserName}</h2>
                    <h3 className="partner-age">{this.props.Profile.Age}</h3>
                </div>
            </div>
            
        );
    }
}
export default ChatProfile;