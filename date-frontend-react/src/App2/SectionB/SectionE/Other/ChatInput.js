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

import './ChatInput.css';
import { getFullEndpoint, endpoints } from '../../../REST_API_COMMUNICATION/dateApi';

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*
        this.state = {
            profile: props.Profile
        };
        */
        //state;
    }
    componentDidMount() {

    }
    /*
    componentWillReceiveProps(newProps) {
        if (newProps !== this.props)
            this.state = {
                profile: newProps.Profile
            }
    }
    */
    sendMessage(){
        var endpoint = getFullEndpoint(endpoints.SendMessage, false) + this.props.Profile.UserID;

        console.log("trying to get messages with ID: " + endpoint);

        var input = document.querySelector('input[type="file"]');
        var data = new FormData()
        //data.append('photo', input.files[0])
        data.append('photo', null);
        data.append('message', document.getElementById('input-text').value);

        fetch(endpoint, {
            method: endpoints.SendMessage.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication')
            },
            body: data
        }).then((res) => {
            if (!res.ok) {
            }
            else {
                return res.json();
            }
        }).then((data) => {
            this.onMessageSent(data);
            return data;
        }
        )
    }
    onMessageSent(message){
        this.props.onSent(message);
    }
    handleClickSend(){
        this.sendMessage();
    }
    render() {
        return (
            <div className="chat-input-container">
                <div>
                    <input maxLength="200" id="input-text" className="chat-input-text" type="text"></input>
                </div>
                <div className="chat-icon-container">
                    <img className="input-icon" src="https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png"></img>
                    <img onClick={()=> this.handleClickSend()} className="input-icon" src="https://www.pngarts.com/files/2/Send-PNG-Picture.png"></img>
                </div>
            </div>
        );
    }
}
export default ChatInput;