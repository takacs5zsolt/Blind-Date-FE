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
//import './SectionC.css';
import SectionE from './SectionE/SectionE';
import UtilitySection from './SectionG/UtilitySection';
import SectionH from './SectionH/SectionH';
import EditButtons from './SectionH/User/EditButtons';
import EditableProfile from './SectionE/User/EditableProfile';
import ChatProfile from './SectionH/Other/ChatProfile/ChatProfile';
import Abilities from './SectionH/Other/Abilities/Abilities';
import Chat from './SectionE/Other/Chat';

import ProfilePage from '../SectionC/SectionF/ProfilePage/ProfilePage';
import PhotoSection from '../SectionC/SectionF/PhotoSection/PhotoSection';
import SeparatorLine from '../SeparatorLine/Separator';
import CredentialChangeButtons from './SectionE/User/CredentialChangeButtons';

class SectionB extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state ={
            clickedButton : null
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            clickedButton : null
        })
    }
    onSave() {
        this.props.onSave();
    }
    onVote(activity) {
        this.props.onVote(activity);
    }
    onEmailChange(){
        this.setState({
            clickedButton : "email"
        })
    }
    onPasswordChange(){
        this.setState({
            clickedButton : "password"
        })
    }
    onCancel(){
        this.setState({
            clickedButton : null
        })
    }
    render() {
        console.log("SECTION B: current viewedID is " + this.props.ViewedID);
        if (this.props.Profile == null) {
            return (
                <p>LOADING...</p>
            );
        }

        if (this.props.ViewedProfile.ProfileType == "FullUserProfile") {
            return (
                <div id="section-b" className="column2">
                    <UtilitySection />
                    <EditButtons onSave={this.onSave.bind(this)} 
                        onEmailClick={this.onEmailChange.bind(this)} 
                        onPasswordClick={this.onPasswordChange.bind(this)}
                        onCancel={this.onCancel.bind(this)}/>
                    <div className='e-container'>
                        <EditableProfile Profile={this.props.Profile} ClickedButton={this.state.clickedButton}/>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div id="section-b" className="column2">
                    <UtilitySection />
                    <div className="h">
                        <ChatProfile Profile={this.props.ViewedProfile} />
                        <Abilities Profile={this.props.ViewedProfile} onVote={this.onVote.bind(this)} />
                    </div>
                    <div className='e-container'>
                        <Chat Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile} />
                    </div>
                </div>
            );
        }
        /*
        return(
            <div id="section-b" className="column2">
              <UtilitySection />
              <SectionH Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile} onVote={this.onVote.bind(this)} onSave={this.onSave.bind(this)}/>
              <SectionE Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile} />
            </div>
        )*/
    }
}
export default SectionB;