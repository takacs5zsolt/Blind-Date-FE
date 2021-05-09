import React from 'react';
import './Global.css';
import {Route} from 'react-router-dom';
import Chat from '../ChatPage/Chat';
import Profile from '../ProfilePage/Profile';

class Content extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        return (
            //chatContent = <Route exact path="/chat/id" component={Chat id=id}
            //date(chat) content = <Route exact path="/date" component={Chat id=null}

            //ProfileContent = <Route exact path="/profile/id" component={Profile id=id}
            //ProfileContent = <Route exact path="/profile" component{Profile id=null}
            <div>
                <Route exact path="/chat/:id" component={<Chat />} />
                
                <Route exact path="/chat" render=
                {
                    <Chat id={null} />
                } />
                <Route exact path="/profile/:id" component={<Profile />} />
                <Route exact path="/profile" render=
                {
                    <Profile id={null} />
                } />
            </div>
        );
    }
}
export default Content;