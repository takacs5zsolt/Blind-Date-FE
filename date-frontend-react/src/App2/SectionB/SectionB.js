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

import ProfilePage from '../SectionC/SectionF/ProfilePage/ProfilePage';
import PhotoSection from '../SectionC/SectionF/PhotoSection/PhotoSection';
import SeparatorLine from '../SeparatorLine/Separator';

class SectionB extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //state;
    }
    componentDidMount(){
        
    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.state = {profile : newProps.Profile}
    }
    */
    onSave(){
        this.props.onSave();
    }
    onVote(activity){
        this.props.onVote(activity);
    }
    render() {
        console.log("SECTION B: current viewedID is " + this.props.ViewedID);
        if(this.props.Profile == null){
            return(
                <p>LOADING...</p>
            );
        }/*
        return(
            <div id="section-b" className="column2">
              <UtilitySection />
              <SectionE Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile == null ? this.props.Profile.UserID : this.props.ViewedID} />
              <SectionH Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile == null ? this.props.Profile.UserID : this.props.ViewedID} onVote={this.props.onVote} onSave={this.props.onSave}/>
            </div>
        )*/
        return(
            <div id="section-b" className="column2">
              <UtilitySection />
              <SectionH Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile} onVote={this.props.onVote.bind(this)} onSave={this.onSave.bind(this)}/>
              <SectionE Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile} />
            </div>
        )
    }
}
export default SectionB;