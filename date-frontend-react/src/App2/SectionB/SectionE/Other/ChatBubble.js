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
import { createPhotoURL } from '../../../REST_API_COMMUNICATION/ImageHandler';
import './ChatBubble.css';

class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*
        this.state = {
            profile: props.Profile,
            message: props.Message
        };
        */
        //state;
    }
    componentDidMount() {
    }
    /*
    componentWillReceiveProps(newProps) {
        if (newProps.Message !== this.props.Message)
            this.state = {
                message: newProps.Message
            }
    }*/
    render() {
        var bubbleClass = this.props.Profile.UserID == this.props.Message.SenderID ? " bubble currentUserSender" : "bubble otherSender ";
        return (
            <div className={bubbleClass} id={this.props.Profile.UserID}>
                <div id="content-photo" className="message-photo">
                        <img className="message-photo" src={this.props.Message.ContentPhoto === null || this.props.Message.ContentPhoto === "" ? "" : createPhotoURL(this.props.Message.ContentPhoto)}></img>
                </div>
                <p>
                    {this.props.Message.Content}
                </p>
            </div>
        );
    }
}
export default ChatBubble;