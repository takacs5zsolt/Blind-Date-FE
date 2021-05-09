import React from 'react';
import '../Global/Global.css';
import './ChatBubble.css';
import { createPhotoURL } from '../Global/ImageHandler';

class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { showDate: false }
        //state;
    }
    handleClick() {
        this.setState({ showDate: !this.state.showDate });
    }
    render() {
        if (this.state.showDate == true) {
            return (
                <div className={this.props.self ? "chat-bubble self-bubble" : "chat-bubble other-bubble"} onClick={() => this.handleClick()}>
                    <div id="content-photo" className="message-photo">
                        <img className="message-photo" src={this.props.Message.ContentPhoto === null || this.props.Message.ContentPhoto === "" ? "" : createPhotoURL(this.props.Message.ContentPhoto)}></img>
                    </div>
                    <div id="content">{this.props.Message.Content != null ? this.props.Message.Content : null}</div>
                    <div id="message-date" className="message-date">{this.props.Message.MessageDate}</div>
                </div>
            );

        }
        return (
            <div className={this.props.self ? "chat-bubble self-bubble" : "chat-bubble other-bubble"} onClick={() => this.handleClick()}>
                <div id="content-photo" className="message-photo">
                    <img className="message-photo" src={this.props.Message.ContentPhoto === null || this.props.Message.ContentPhoto === "" ? "" : createPhotoURL(this.props.Message.ContentPhoto)}></img>
                </div>
                <div id="content">{this.props.Message.Content != null ? this.props.Message.Content : null}</div>
            </div>
        );

    }
}
export default ChatBubble;