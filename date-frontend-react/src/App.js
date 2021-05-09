import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTop from './Components/HomePage/NavTop';
import Home from '../src/Components/HomePage/HomePage';
import './Components/HomePage/home.css';
import MatchesContainer from './Components/MatchesPage/MatchesContainer';
import { NavLink, Route, HashRouter, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Chat from './Components/ChatPage/Chat';
import Profile from './Components/ProfilePage/Profile';
import DefaultPage from './Components/Global/DefaultPage';
import DateChatPage from './Components/ChatPage/DateChatPage';
import ConcreteChatPage from './Components/ChatPage/ConcreteChatPage';
import EmailChanger from './Components/ProfilePage/EmailChanger';
import PasswordChanger from './Components/ProfilePage/PasswordChanger';

import AppNew from '../src/App2/AppNew';


function App() {
  
  return (<AppNew/>);

  var token = getToken();
  console.log("token is: " + token);
  
  if (token == null) {
    //return loginPage;
    return (
      <Home />

    );
  }
  else {
    //get profile from web api : to populate navtop
    //get matches from web api: to populate matches
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
      //Navtop
      //matches
      //content container + nav bottom


    );
  }
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

export default App;
