import React from 'react';
import '../Global/Global.css';
import { getFullEndpoint, endpoints } from '../Global/Endpoints';
import { getToken } from '../Global/Token';
import MatchButton from './MatchButton';
import './Match.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import dateIcon from '../../Images/dating.svg';
import datingLogo from '../../Images/dating_logo.svg';

class MatchesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            fetched: false,
            matches: null,
            date: null
        }
        this.timer = null;
        this.fetchMatches = this.fetchMatches.bind(this);
    }
    componentDidMount() {
        //fetch Matches from api with a timer
        this.timer = setInterval(this.fetchMatches, 3000);
        var endpoint = getFullEndpoint(11, false);
        var token = localStorage.getItem('DateApplication');
        console.log(token);

        /*
        var currentData;
        if(this.state === undefined || this.state === null){
            currentData = null;
        }
        else{
            currentData = this.state.profiles;
        }
*/
        if (token != null) {
            fetch(endpoint, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                    if (!res.ok) {
                        console.error("error during fetching matches.");
                    }
                    else {
                        console.log("matches fetching was successful!");
                        return res.json();
                    }
            })
            .then(data => {
                    this.setState({
                        fetched: true,
                        matches: data.Matches,
                        date: data.Date
                    });
                    /*
                    if(currentData === null){ 
                        this.setState({
                            fetched: true,
                            profiles: data
                        });
                    }
                    else{
                        if(this.containsNewElement(currentData, data)){
                            console.log("there are new matches found!");
                            this.setState({
                                fetched:true,
                                profiles: data
                            })
                        }/*
                        if(currentData.length !== data.length){
                            this.setState({
                                fetched:true,
                                profiles: data
                            })
                        }*/
                    }
            )
        }
    
    }
    fetchMatches(){
        var endpoint = getFullEndpoint(11, false);
        var token = localStorage.getItem('DateApplication');
        console.log(token);

        /*
        var currentData;
        if(this.state === undefined || this.state === null){
            currentData = null;
        }
        else{
            currentData = this.state.profiles;
        }
*/
        if (token != null) {
            fetch(endpoint, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (!res.ok) {
                        console.error("error during fetching matches.");
                        this.setState({
                            fetched:false
                        })
                    }
                    else {
                        console.log("matches fetching was successful!");
                        return res.json();
                    }
                })
                .then(data => {
                    this.setState({
                        fetched:true,
                        matches:data.Matches,
                        date: data.Date
                    })
                    /*
                    if(currentData === null){ 
                        this.setState({
                            fetched: true,
                            profiles: data
                        });
                    }
                    else{
                        if(this.containsNewElement(currentData, data)){
                            console.log("there are new matches found!");
                            this.setState({
                                fetched:true,
                                profiles: data
                            })*/
                        /*}
                        if(currentData.length !== data.length){
                            this.setState({
                                fetched:true,
                                profiles: data
                            })
                        }*/
                })
                
        }
    }
    containsNewElement(array1, array2){
        var IdArray = array1.map(element => element.UserID);
        var IdArray2 = array2.map(element => element.UserID);
        var isThereNew = false;

        IdArray.forEach(element => {
            if(!IdArray2.includes(element)){
                return true;
            }
        });
        return isThereNew;
    }
    componentWillUnmount() {
        //clear interval for fetching matches
        clearInterval(this.timer);
    }

    render() {
        if (this.state.fetched == false) {
            return (
                <div id="matches-container" className="matches-container">
                    <p>LOADING...</p>
                </div>
            );
        }
        if (this.state.fetched == true) {
            
            var dating = <div id="date-icon" className="icon-holder">
                <img src={datingLogo} className="icon"></img>
            </div>;

            if(this.state.date !== null){
                dating = <MatchButton Profile={this.state.date.Profile} Message={this.state.date.Messages[0]} Photo={datingLogo}/>
            }
            /*var old=<div id="date-icon" className="icon-holder">
            <img src={datingLogo} className="icon"></img>
            <MatchButton Profile={this.state.date.Profile} Message={this.state.date.Messages[0]} />
        </div>*/
            return (
                <div id="matches-container" className="matches-container">
                    <NavLink to="/chat">
                        {dating}
                    </NavLink>
                    <hr></hr>

                    {this.state.matches.map((match) => {
                        //var link="/chat/" + profile.UserID;
                        return (
                        <div>

                            <NavLink to={"/chat/" + match.Profile.UserID}>
                                <MatchButton Profile={match.Profile} Message={match.Messages[0]}/> 
                            </NavLink>
                            <hr></hr>
                        </div>
                            );
                        //return <NavLink to={"/chat"}> <MatchButton Profile={profile}/> </NavLink>

                    })}
                </div>
            );
        }
    }
}
export default MatchesContainer;