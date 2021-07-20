import React from 'react';
import { NavLink, Route, HashRouter, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import './AppNew.css';

import LogoComponent from './LogoComponent/LogoComponent';
import SeparatorLine from './SeparatorLine/Separator';
import SectionH from './SectionB/SectionH/SectionH';

import user from './DummyDatas/user.json';
import chat1 from './DummyDatas/Chats/2chat.json';
import chat2 from './DummyDatas/Chats/3chat.json';
import chat3 from './DummyDatas/Chats/4chat.json';

import date from './DummyDatas/Chats/5chat.json';
import matches from './DummyDatas/matches.json';

import { getFullEndpoint, endpoints } from './REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from './REST_API_COMMUNICATION/token';

/*
import logo from './logo.svg';
import './App.css';
import NavTop from './Components/HomePage/NavTop';
import Home from '../src/Components/HomePage/HomePage';
import './Components/HomePage/home.css';
import MatchesContainer from './Components/MatchesPage/MatchesContainer';
import Chat from './Components/ChatPage/Chat';
import Profile from './Components/ProfilePage/Profile';
import DefaultPage from './Components/Global/DefaultPage';
import DateChatPage from './Components/ChatPage/DateChatPage';
import ConcreteChatPage from './Components/ChatPage/ConcreteChatPage';
import EmailChanger from './Components/ProfilePage/EmailChanger';
import PasswordChanger from './Components/ProfilePage/PasswordChanger';
*/

import SectionA from './SectionA/SectionA';
import SectionC from './SectionC/SectionC';
import SectionE from './SectionB/SectionE/SectionE';
import UtilitySection from './SectionB/SectionG/UtilitySection';
import UserProfileDataComponent from './UserProfileDataComponent/UserProfileDataComponent';
import MatchContainer from './SectionA/SectionD/MatchContainer';
import SectionB from './SectionB/SectionB';

//import LogoComponent from './LogoComponent/LogoComponent';
//import SeparatorLine from './SeparatorLine/Separator';
//import UserProfileDataComponent from './UserProfileDataComponent/UserProfileDataComponent';
//import MatchContainer from './SectionA/SectionD/MatchContainer';

//import UtilitySection from './SectionB/SectionG/UtilitySection';

import Home from '../Components/HomePage/HomePage';

import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

class WebApp extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            userProfile: null,
            currentViewedProfile: null,
            loading:true
        }
    }


    getToken() {
        var token = localStorage.getItem('DateApplication');
        if (token != null) {
            return token;
        }
        else {
            return null;
        }
    }
    /*
    getMatches() {
        var endpoint = getFullEndpoint(endpoints.ViewMatches, false);

        fetch(endpoint, {
            method: endpoints.ViewMatches.method,
            headers: {
                "Authorization": "Bearer " + this.getToken(),
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
                //profile: this.state.profile,
                //currentViewedID: this.state.currentViewedID,
                matches: data
            })
        })
    }*/
    getProfile() {
        var endpoint = getFullEndpoint(endpoints.ViewProfile, false) + '/0';

        fetch(endpoint, {
            method: endpoints.ViewProfile.method,
            headers: {
                "Authorization": "Bearer " + this.getToken(),
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (!res.ok) {
                console.error("error during fetching matches.");
            }
            else {
                console.log("matches fetching was successful!");
                return res.json();
            }
        }).then((data) => {
            this.setState({
                userProfile: data,
                currentViewedProfile: data,
                loading: false
            });
        }
        )
    }


    //EVENTS
    onCurrentViewedIDChange(profile) {
        console.log("change ID to " + profile.UserID);
        
        this.setState({
            currentViewedProfile : profile
        });
        /*
        this.setState({
            profile: this.state.profile,
            currentViewedID: id
        })*/
    }
    onSave() {
        //this.getProfile();
        console.log("saved");
        this.getProfile();
    }
    onVote(activity) {
        console.log("voted as " + activity);
    }
    //


    componentDidMount() {
        if (this.getToken() != null) {
            this.getProfile();
        }
    }

    render() {
        /*
        if(this.state.profile == null){
            this.getProfile();
        }
        */
        var token = this.getToken();
        if (token == null) {
            return (
                <Home />
            )
        }
        else {


            /*
            if (token == null) {
              //return loginPage;
              return (
                <Home />
          
              );
              else {
                  //get profile from web api : to populate navtop
                  //get matches from web api: to populate matches
                  
              }*/
              /*
            var chat = chat3;
            var chatprofile = chat.Profile;
            var chatMessages = chat.Messages;
            var userProfile = user;
            var dateProfile = date.Profile;

            var currentView = chatprofile;

            var sectionB_Data = null;
            var matchesData = matches;
            */
            if (this.state.loading) {
                return (<div className="AppContainer">
                    <LoadingSpinner/>
                </div>);
            }
            else {

                /*asdreturn (
                    <div className="AppContainer">
                    <SectionA Profile={this.state.profile} Matches={this.state.Matches} onClick={this.onCurrentViewedIDChange} />
                    <SectionB Profile={this.state.profile} ViewedID={this.state.currentViewedID} onVote={this.onVote} onSave={this.onSave()} />
                    <SectionC Profile={this.state.profile} ViewedID={this.state.currentViewedID} onVote={this.onVote} />
                </div>*/
                
                return (
                    <div className="AppContainer">
                        <div id="section-a" className="column1">
                            <LogoComponent />
                            <SeparatorLine />
                            <UserProfileDataComponent Profile={this.state.userProfile} onClick={this.onCurrentViewedIDChange.bind(this)} />
                            <SeparatorLine Height={3} />
                            <MatchContainer onClick={this.onCurrentViewedIDChange.bind(this)} />
                        </div>
                        <div id="section-b" className="column2">
                            <UtilitySection />
                            <SectionB Profile={this.state.userProfile} ViewedProfile={this.state.currentViewedProfile} onVote={this.onVote.bind(this)} onSave={this.onSave.bind(this)} />
                        </div>
                        <SectionC ViewedProfile={this.state.currentViewedProfile} onVote={this.onVote.bind(this)} onSave={this.onSave.bind(this)}/>
                    </div>
                );
                
            }
        }
    }
    /*
        return (
          <div className="main">
              <Link to="/profile">
                <NavTop />
              </Link>
              <div id="row" className="row">
                <MatchesContainer />
                <div id="content" className="content">
                  <Route exact path="/" component={DefaultPage} />
    
                  <Route path="/chat/:id?" render={(props) => {
                    return (<Chat id={props.match.params.id === undefined ? null : props.match.params.id} />)
                  }} />
                  <Route path="/profile/:id?" render={(props) => {
                    return (<Profile id={props.match.params.id === undefined ? null : props.match.params.id} />);
                  }} />
                  <Route exact path="/settings/email" component={EmailChanger} />
                  <Route exact path="/settings/password" component={PasswordChanger} />
                </div>
              </div>
          </div>
      */
    //Navtop
    //matches
    //content container + nav bottom


    //);
    //}
}


export default WebApp;
