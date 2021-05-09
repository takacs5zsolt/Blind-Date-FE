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

import './Chat.css';
import ChatBubble from './ChatBubble';
import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';
import ChatInput from './ChatInput';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state ={
            messages:null,
            loading:true
        }
        /*
        this.state = {
            viewedID: props.ViewedID,
            messages: null,
            loading: true
        };
        */
        //state;
    }
    componentDidMount() {
        this.getMessages();
    }
    componentWillReceiveProps(newProps) {
        this.setState({messages:null, loading:true});
        /* GOOD
        if (newProps.ViewedID !== this.state.viewedID)
            this.setState({ viewedID: newProps.ViewedID, loading: true });
            */


            /*
        if (newProps.SentMessage !== null) {
            this.setState({ messages: this.state.messages.push(newProps.SentMessage) })
        }
        */
    }

    componentDidUpdate() {
        if (this.state.loading) {
            this.getMessages();
        }
    }
    getMessages() {
        var endpoint = getFullEndpoint(endpoints.ViewMessages, false) + this.props.ViewedProfile.UserID + "/0";

        console.log("trying to get messages with ID: " + endpoint);

        fetch(endpoint, {
            method: endpoints.ViewMessages.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (!res.ok) {
            }
            else {
                return res.json();
            }
        }).then((data) => {
            this.setState({
                //viewedProfile: data.Profile,
                messages: data.Messages,
                loading: false
            });
        }
        )
    }
    onMessageSent(message){
        this.setState({messages: this.state.messages.concat(message)});
    }
    render() {
        if (this.state.loading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        return (
            <div>

                <div className="chat-container">
                    {this.state.messages.map(message => {
                        return (
                            <ChatBubble Message={message} Profile={this.props.Profile} />
                        )
                    })}

                </div>
                <ChatInput Profile={this.props.ViewedProfile} onSent={this.onMessageSent.bind(this)}/>
            </div>
        );
    }
}
export default Chat;