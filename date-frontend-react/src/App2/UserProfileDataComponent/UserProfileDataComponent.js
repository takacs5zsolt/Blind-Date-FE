import React from 'react';

import './UserProfileData.css';

class UserProfileDataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {profile : props.Profile};
    }

    handleClick(){
        this.props.onClick(this.props.Profile);
    }
    render() {
        var idName = "profile-"+ this.props.Profile.UserID;
        var userName = this.props.Profile.UserName.length > 7 ? this.props.Profile.UserName.slice(0,6) : this.props.Profile.UserName.length;
        return (
            <div className="profile" id={idName} onClick={this.handleClick.bind(this)}>
                    <img className="userprofile-photo" src={this.props.Profile.Photo1}></img>
                <div className="basic-data">
                    <p className="user-name">{userName}</p>
                    <p className="user-age">{this.props.Profile.Age}</p>
                </div>
                <div id="icons" className="icons">
                    <img className="settings" src="https://www.kindpng.com/picc/m/1-12279_transparent-android-settings-icon-png-icon-png-setting.png"></img>
                    <img className="logout" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png" ></img>
                </div>
            </div>
        );
    }
}

export default UserProfileDataComponent;