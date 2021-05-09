import React from 'react';
import '../Global/Global.css';
import ChatInput from './ChatInput';
import ChatProfile from './ChatProfile';
import {getFullEndpoint, endpoints} from '../Global/Endpoints';
import Profile from '../ProfilePage/Profile';
import ChatBubble from './ChatBubble';
import './Chat.css';

class ConcreteChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {messages : props.messages}
        this.timer = null;
    }
    displaySentMessage(message){
        
        this.setState(state =>{
            return state.messages.concat(message);
        });
        
       this.setState({messages : this.state.messages.concat(message)});
    }
    getNewMessages(id){
        
        console.log("getting new messages...");
        fetch('http://localhost:50144/api/user/getunreadmessages/' + id + '/true',{
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                console.log("200 for new messages!");
                return resp.json();
            }
            else{
                console.log("error during getting new messages...");
            }
        })
        .then(data =>{
            if(data !== undefined){
                
                if(data.length > 0){
                    console.log("GOT NEW MESSAGES!" + data);
                    data.map(element => this.displaySentMessage(element));
                }
            }
            else{
                console.log("ZERO new messages...");
            }
        })
        
    }
    componentDidMount(){

        var id = this.props.profile.UserID;
        console.log("MOUNTED WITH ID: " + id);
        this.timer = setInterval(() => this.getNewMessages(id), 3000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        return(
            <div>
                <ChatProfile profile={this.props.profile} />
                <div className="chats">

                {this.state.messages.map(message =>{
                    return(
                        <ChatBubble Message={message} self={this.props.profile.UserID == message.SenderID ? false : true}/>
                        )
                    })}
                    </div>
                <ChatInput SendingToID={this.props.profile.UserID} onMessageSent={(message) => this.displaySentMessage(message)}/>
            </div>
        )
    }
}
export default ConcreteChatPage;