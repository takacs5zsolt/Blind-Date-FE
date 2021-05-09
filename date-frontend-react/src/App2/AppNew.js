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

function AppNew() {
  var token = getToken();
  console.log("token is: " + token);
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
    var chat = chat3;
    var chatprofile = chat.Profile;
    var chatMessages= chat.Messages;
    var userProfile = user;
    var dateProfile = date.Profile;
    
    var currentView = chatprofile;

    var sectionB_Data = null;
    var matchesData = matches;
    console.log(JSON.stringify(user));
    return(
        <div className="AppContainer">
            <SectionA />
            <div id="section-b" className="column2">
              <UtilitySection />
              <SectionH Profile={currentView}/>
              <SectionE Profile={currentView} Messages={chatMessages}/>
            </div>
            <SectionC Profile={currentView}/>
        </div>
    );
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

function getToken() {
  var token = localStorage.getItem('DateApplication');
  if (token != null) {
    return token;
  }
  else {
    return null;
  }
}

export default AppNew;
