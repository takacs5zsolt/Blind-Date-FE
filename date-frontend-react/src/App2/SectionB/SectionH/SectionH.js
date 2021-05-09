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
import EditButtons from './User/EditButtons';
import Abilities from './Other/Abilities/Abilities';
import ChatProfile from './Other/ChatProfile/ChatProfile';
import { getFullEndpoint, endpoints } from '../../REST_API_COMMUNICATION/dateApi';
import SeparatorLine from '../../SeparatorLine/Separator';

import './SectionH.css';
import EditableProfile from '../SectionE/User/EditableProfile';


class SectionH extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*
        this.state = {
            profile: props.Profile,
            viewedProfile: props.Profile,
            viewedID: props.Profile.UserID,
            loading: false
        };
        */
        //state;
    }
    /*
    componentWillMount() {
        console.log("about to get " + this.props.ViewedID);
        if (this.props.Profile.UserID != this.props.ViewedID)
            this.getProfile();
        else {
            this.setState({
                viewedProfile: this.state.profile
            });
        }
    }*/
    /*GOOD
    componentWillReceiveProps(nextProps) {
        console.log("SECTION H - props changed to: " + nextProps.ViewedID + " from " + this.props.ViewedID);
        if (nextProps.ViewedID != this.state.viewedID) {
            this.setState({viewedID : nextProps.ViewedID,
                loading: true});
            //this.getProfile();
        }
        console.log("SECTION H - STATE of viewID is " + this.state.viewedID);
    }
    componentDidUpdate(){
        if(this.state.loading == true){
            this.getProfile();
        }
    }
    getProfile() {
        var endpoint = "";
        if(this.state.viewedID == this.state.profile.UserID){

            endpoint = getFullEndpoint(endpoints.ViewProfile, false);
        }
        else{
            endpoint = getFullEndpoint(endpoints.ViewProfile, false) + "/" + this.state.viewedID;
        }
        console.log("trying to get profile with ID: " + endpoint);

        fetch(endpoint, {
            method: endpoints.ViewProfile.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (!res.ok) {
            }
            else {
                return res.json();
            }
        }).then((data) => {
            this.setState({
                viewedProfile: data,
                loading:false
            });
        }
        )
    }*/

    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.state = {profile : newProps.Profile}
    }*/
    onSave() {
        //update profile


        this.props.onSave();
    }
    /*
    render() {
        console.log("SECTION H - current viewedID is: " + this.state.viewedID);
        if (this.state.loading == true) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        //var path = "/profile/" + this.state.profile.UserID;
        if (this.state.viewedProfile.ProfileType == "RestrictedProfile" || this.state.viewedProfile.ProfileType == "FullProfile") {
            return (
                <div className="h">
                    <ChatProfile Profile={this.state.viewedProfile} />
                    <Abilities Profile={this.state.viewedProfile} />
                </div>

            );
        }
        else {
            return (
                <div className="h">
                    <div className="secondary-holder">
                        <button className="secondary-button">e-mail modositas</button>
                        <button className="secondary-button">jelszo modositas</button>
                        <button className="support-button">kilepek</button>
                    </div>
                    <div className="main-holder">
                        <button className="main-button">mentes</button>
                    </div>
                </div>
            )
        }
    }*/
    onVote(activity){
        this.props.onVote(activity);
    }
    onEmailClick(){

    }
    onPasswordClick(){

    }
    render(){
        if (this.props.ViewedProfile.ProfileType == "RestrictedProfile" || this.props.ViewedProfile.ProfileType == "FullProfile") {
            return (
                <div className="h">
                    <ChatProfile Profile={this.props.ViewedProfile} />
                    <Abilities Profile={this.props.ViewedProfile} onVote={this.onVote.bind(this)}/>
                </div>

            );
        }
        else {
            return (
                <EditButtons onSave={this.onSave.bind(this)} onEmailClick={this.onEmailClick.bind(this)} onPasswordClick={this.onPasswordClick.bind(this)}/>
            )
        }
    }
}
export default SectionH;