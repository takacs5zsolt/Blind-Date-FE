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
import stranger from '../../../Images/stranger_photo.svg';

class Date extends React.Component {
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
        this.props.onClick(this.props.Date.Profile);
    }
    render() {
        if(this.props.Date == null){
            return(
                <div className="match-button-new date">
                    <p>Belevagom magam a randizasba!</p>
                </div>
            );
        }
        var mainID = "date-" + this.props.Date.Profile.UserID;
        return(
            <div className="match-button-new date" id={mainID} onClick={this.handleClick.bind(this)}>
                <div className="match-picture-container">
                    <img className="match-picture" src={this.props.Date.Profile.ProfileType == "FullProfile" ? this.props.Date.Profile.Photo1 : stranger}></img>
                </div>
                <div className="match-data">
                    <p className="match-name">{this.props.Date.Profile.UserName}</p>
                    <p className="match-age">{this.props.Date.Profile.Age}</p>
                    <p className="match-content">{this.props.Date.Messages[0].Content}</p>
                    <p className="message-date">{this.props.Date.Messages[0].MessageDate}</p>
                </div>
            </div>
        );
    }
}
export default Date;