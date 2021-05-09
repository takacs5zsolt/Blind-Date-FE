import React from 'react';
import '../Global/Global.css';
import './MatchButtonMessage.css';

class MatchButtonMessage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //state;
    }
    render(){
        var content = this.props.PlusData;
        return(
            <div className="match-button-message">
                <p className="message">{content}</p>
                <p className="message-date">{this.props.message.MessageDate}</p>
            </div>
        );
    }
}

export default MatchButtonMessage;