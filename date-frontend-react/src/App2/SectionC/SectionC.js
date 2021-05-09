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
import './SectionC.css';

import ProfilePage from './SectionF/ProfilePage/ProfilePage';
import PhotoSection from './SectionF/PhotoSection/PhotoSection';
import SeparatorLine from '../SeparatorLine/Separator';

import { getFullEndpoint, endpoints} from '../REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from '../REST_API_COMMUNICATION/token';

class SectionC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*
        this.state = {
            profile : props.Profile,
            viewedID : props.Profile.UserID,
            viewedProfile: props.Profile,
            loading: false
        }*/
        //state;
    }
    /*
    componentWillMount(){
        this.getProfile();
    }
    componentWillReceiveProps(newProps){
        if(newProps.ViewedID !== this.state.viewedID)
            this.setState({
                viewedID: newProps.ViewedID,
                loading: true
            });
    }
    componentDidUpdate(){
        if(this.state.loading)
            this.getProfile();
    }
    getProfile() {
        var endpoint ='';
        if(this.state.profile.UserID !== this.state.viewedID)
            endpoint = getFullEndpoint(endpoints.ViewProfile, false) + "/" + this.state.viewedID;

        else
            endpoint = getFullEndpoint(endpoints.ViewProfile, false);
        fetch(endpoint, {
            method: endpoints.ViewProfile.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                console.error("error during fetching matches.");
            }
            else {
                return res.json();
            }
        }).then(data => {
            this.setState({
                viewedProfile : data,
                loading: false
            });
        }
        )
    }*/
    onPhotoChange(){
        this.props.onSave();
    }
    onVote(activity){
        this.props.onVote(activity);
    }
    render() {
        /*
        if(this.state.loading){
            return(
                <p>LOADING</p>
                );
        }*/
        return(
            <div className="column3">
                <ProfilePage Profile={this.props.ViewedProfile} onVote={this.onVote.bind(this)}/>
                <SeparatorLine />
                <PhotoSection Profile={this.props.ViewedProfile} onSave={this.onPhotoChange.bind(this)}/>
            </div>
        )
    }
}
export default SectionC;