import React from 'react';
import '../Global/Global.css';
import './ChatProfile.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import stranger from "../../Images/stranger_photo.svg";
import {createPhotoURL} from '../Global/ImageHandler';

class ChatProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {profile : props.profile};
        //state;
    }
    componentDidMount(){

    }
    render() {
        var path = "/profile/" + this.state.profile.UserID;
        return(
            <div className="chat-profile">

                <NavLink to={path}>
                <div className="data-pos">
                    <p>{this.state.profile.UserName}</p>
                    <img src={this.state.profile.ProfileType == "FullProfile" ? createPhotoURL(this.state.profile.Photo1) : stranger} className="chat-profile-photo"></img>
                    <p>{this.state.profile.Age}</p>
                </div>
            </NavLink>
            </div>
            
        );
    }
}
export default ChatProfile;