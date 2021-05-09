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

import Chat from './Other/Chat';
import ChatInput from './Other/ChatInput';
import EditableProfile from './User/EditableProfile';
import SeparatorLine from '../../SeparatorLine/Separator';

import './SectionE.css';

import { NavLink, Route, HashRouter, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

class SectionE extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //state;
    }
    componentDidMount() {

    }
    /*
    componentWillReceiveProps(newProps) {
        if (newProps.ViewedID !== this.state.viewedID)
            this.setState({ viewedID: newProps.ViewedID });
    }
    */
    render() {
        if (this.props.Profile.UserID == this.props.ViewedProfile.UserID) {
            return (
                <div className='e-container'>
                    <Route path="/email" render={(props) => {
                        return (<h1>EmailChanger</h1>)
                    }} />
                    <Route path="/password" render={(props) =>{
                        return(<h1>PasswordChanger</h1>)
                    }} />
                    <EditableProfile Profile={this.props.Profile} />

                </div>
            )
        }
        else {
            return (
                <div className='e-container'>
                    <Chat Profile={this.props.Profile} ViewedProfile={this.props.ViewedProfile}/>
                </div>
            )
        }
    }
}
export default SectionE;