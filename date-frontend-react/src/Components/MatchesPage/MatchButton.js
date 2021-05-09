import React from 'react';
//import '../Global/Global.css';
import MatchButtonMessage from './MatchButtonMessage';
import './MatchButton.css';
import {createPhotoURL} from '../Global/ImageHandler';
import strangerPhoto from '../../Images/stranger_photo.svg';

class MatchButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.timer = 0;
        this.state = {unRead : null};
        this.lastMessage = null;
        //state;
    }
    
    fetchForUnreadMessages(id){
            console.log("FETCHING UNREAD MESSAGES! for " + id);
        
        fetch("http://localhost:50144/api/user/getunreadmessages/" + id + "/false",{
            method : 'GET',
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                return resp.json();
            }
        })
        .then((data) =>{
            if(data.length > 0){
                this.lastMessage = data[data.length-1];
                this.setState({unRead : data});
            }
            else{
                this.setState({unRead : null});
            }
        })
    }
    componentDidMount(){
        //fetch Matches from api with a timer
        var id = this.props.Profile.UserID;
        this.timer = setInterval(() => this.fetchForUnreadMessages(id), 3000);
        //console.log("ID is " + this.props.Profile.UserID);
        
        
    }
    componentWillUnmount(){
        //clear interval for fetching matches
        
        clearInterval(this.timer);
        
    }
    getVerified(verified){
        if(verified === true){
            return "Hitelesitett";
        }
        else{
            return "";
        }
    }
    classForReceivedUnreadMessages(unReadMessages){
        if(unReadMessages === null){
            return "new-message-hide"
        }
        else{
            return "new-message-show";
        }
    }
    showMessage(lastMsg){
        if(lastMsg.Content !== null || lastMsg.Content !== ""){
            return lastMsg.Content;
        }
        else{
            return this.props.Profile.UserName + " sent a photo.";
        }
    }
    getUnReadCount(number){
        if(number > 9){
            return "9+";
        }
        return number;
    }
    returnMessage(message){
        if(message === null){
            return null;
        }
        if(message.ContentType === "Photo"){
            return "Sent a photo.";
        }
        else{
            return message.Content;
        }
    }
    render() {
        //
        //<MatchButtonMessage message={this.props.Profile.PlusData} />
        console.log("State of unRead is: " + this.state.unRead);
        if(this.state.unRead === null)
        {
            if(this.lastMessage === null){
                return (
                    <div className="match-button">
                        <div>
                            <img src={this.props.Profile.ProfileType == "RestrictedProfile" ? this.props.Photo : createPhotoURL(this.props.Profile.Photo1)} className={this.props.Profile.Male == true ? "match-photo male-border" : "match-photo female-border"}></img>
                        </div>
                        <div className="match-data">
                            <p>{this.props.Profile.UserName}, {this.props.Profile.Age}</p>
                            <p>{
                                this.returnMessage(this.props.Message)                      
                            }</p>
                        </div>
                    </div>
                );
            }
            else{
                return (
                    <div className="match-button">
                        <div>
                            <img src={this.props.Profile.ProfileType == "RestrictedProfile" ? this.props.Photo : createPhotoURL(this.props.Profile.Photo1)} className={this.props.Profile.Male == true ? "match-photo male-border" : "match-photo female-border"}></img>
                        </div>
                        <div className="match-data">
                            <p>{this.props.Profile.UserName}, {this.props.Profile.Age}</p>
                            <p>{
                                this.showMessage(this.lastMessage)                        
                            }</p>
                        </div>
                    </div>
                );
            }
            
        }
        else{
            return (
                <div className="match-button">
                    <div className={this.classForReceivedUnreadMessages(this.state.unRead)}>
                        {this.getUnReadCount(this.state.unRead.length)}
                    </div>
                    <div>
                        <img src={this.props.Profile.ProfileType == "RestrictedProfile" ? this.props.Photo : createPhotoURL(this.props.Profile.Photo1)} className={this.props.Profile.Male == true ? "match-photo male-border" : "match-photo female-border"}></img>
                    </div>
                    <div className="match-data">
                        <p>{this.props.Profile.UserName}, {this.props.Profile.Age}</p>
                        <p>{this.showMessage(this.state.unRead[this.state.unRead.length-1])}</p>
                    </div>
                </div>
            );
        }
        
    }
}
export default MatchButton;