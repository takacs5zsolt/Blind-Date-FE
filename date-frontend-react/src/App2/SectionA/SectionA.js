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
import '../AppNew.css';

import SeparatorLine from '../SeparatorLine/Separator';
import LogoComponent from '../LogoComponent/LogoComponent';
import UserProfileDataComponent from '../UserProfileDataComponent/UserProfileDataComponent';
import MatchContainer from './SectionD/MatchContainer';

import { getFullEndpoint, endpoints } from '../REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from '../REST_API_COMMUNICATION/token';

class SectionA extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*
        this.state = {
            profile: props.Profile
        }; */
    }
    /*
    componentDidMount() {
        if (this.state.Matches == null) {
            var endpoint = getFullEndpoint(endpoints.ViewMatches, false);
            fetch(endpoint, {
                method: endpoints.ViewMatches.method,
                headers: {
                    "Authorization": "Bearer" + getToken(),
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (!res.ok) {

                }
                else {
                    return res.json();
                }
            }).then(data => {
                this.setState({
                    matches: data
                })
            })
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps !== this.props)
            this.state = { profile: newProps.Profile,
                matches: newProps.Matches}
    }
    */
   handleClick(profile){
       this.props.onClick(profile);
   }
    render() {
        return (
            <>
                <LogoComponent />
                <SeparatorLine />
                <UserProfileDataComponent Profile={this.props.Profile} onClick={this.handleClick.bind(this)} />
                <SeparatorLine Height={3} />
                <MatchContainer onClick={this.props.onClick} />
            </>
        )
    }
}
export default SectionA;
