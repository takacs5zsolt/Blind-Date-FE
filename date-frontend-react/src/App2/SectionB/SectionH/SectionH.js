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
        
    }
    
    onSave() {
        //update profile


        this.props.onSave();
    }
    
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