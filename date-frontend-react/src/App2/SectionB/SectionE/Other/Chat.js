import React from 'react';

import './Chat.css';
import ChatBubble from './ChatBubble';
import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';
import ChatInput from './ChatInput';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';

import Pusher from 'pusher-js';
import { almostOriginalAuthorizer } from '../../../Pusher/pusher';


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state ={
            messages:null,
            loading:true
        }
    }
    

    componentWillMount(){
        
    }
    handleIncomingMessage(message){
        alert(message);
    }
    componentDidMount() {
        this.getMessages();
        
        var token = localStorage.getItem("DateApplication");

        var channelName = 'private-'+this.props.Profile.UserID;
        console.log('channel name:', channelName);

        Pusher.log = (message) =>{
            window.console.log(message);
        }
        Pusher.logToConsole = true;

        const pusher = new Pusher("3f8c906f35c890687dc7",{
                authEndpoint : 'http://localhost:50144/api/user/auth',
                cluster: 'eu'
                //authorizer: almostOriginalAuthorizer
            });
        
        pusher.connection.bind("connected",()=>{
            console.log("REALTIME IS GO!");
        });
        console.log('pusher object created @ ', pusher);
        
        const channel = pusher.subscribe(channelName);
        const bind = channel.bind('message_received', (data)=>{
            console.clear();
            console.log(data);
        })

        channel.bind("pusher:subscription_error",(error)=>{
            console.log("subscription error @ ", error);
        });

        channel.bind("pusher:subscription_succeeded",() =>{
            console.log("subscription succeeded!");
        });

        channel.bind('message_received', (message) =>{
            console.clear();
            console.log(message);
        });

        console.log('events binded');

        
    }
    componentWillReceiveProps(newProps) {
        this.setState({messages:null, loading:true});
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
                    <LoadingSpinner/>
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