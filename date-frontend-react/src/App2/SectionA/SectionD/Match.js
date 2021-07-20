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

import './Match.css';

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        /*this.state = { 
            match: this.props.Match 
        };*/
        //state;
    }
    componentDidMount() {

    }
    /*
    componentWillReceiveProps(newProps) {
        if (newProps !== this.props)
            this.state = { match: newProps.Match }
    }
    */
   handleClick(){
       this.props.onClick(this.props.Match.Profile);

   }
    render() {
        var mainID = "match-" + this.props.Match.Profile.UserID;
        var messageContent = this.props.Match.Messages[0].Content.length > 25 ? this.props.Match.Messages[0].Content.substring(0,26) + '...' : this.props.Match.Messages[0].Content;

        return(
            <div className="match-button-new" id={mainID} onClick={this.handleClick.bind(this)}>
                <div className="match-picture-container">
                    <img className="match-picture" src={this.props.Match.Profile.Photo1}></img>
                </div>
                <div className="match-data">
                    <p className="match-name">{this.props.Match.Profile.UserName}</p>
                    <p className="match-age">{this.props.Match.Profile.Age}</p>
                    <p className="match-content">{messageContent}</p>
                    <p className="message-date">{this.props.Match.Messages[0].MessageDate}</p>
                </div>
            </div>
        );
    }
}
export default Match;