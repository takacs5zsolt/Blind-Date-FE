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

import Date from './Date';
import Match from './Match';
import SeparatorLine from '../../SeparatorLine/Separator'

import { getFullEndpoint, endpoints} from '../../REST_API_COMMUNICATION/dateApi';
import { getToken, saveToken } from '../../REST_API_COMMUNICATION/token';

class MatchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            matches: null,
            date: null,
            loading: true
        };
        //state;
    }
    componentDidMount() {
        this.fetchMatches();
    }
    fetchMatches(){
        var endpoint = getFullEndpoint(endpoints.ViewMatches, false);

        fetch(endpoint, {
            method: endpoints.ViewMatches.method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('DateApplication'),
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (!res.ok) {
            }
            else {
                return res.json();
            }
        }).then(data => {
            console.log("DATE IS: "+JSON.stringify(data.Date));
            this.setState({
                matches: data.Matches,
                date: data.Date,
                loading:false
            });
        }
        )
    }
    componentWillReceiveProps(newProps) {
        if (newProps !== this.props)
            this.fetchMatches();    
        //this.state = { profile: newProps.Profile, matches: newProps.Matches }
    }
    handleClick(profile){
        this.props.onClick(profile);
    }
    render() {
        if(this.state.loading){
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        return (
            <div className="match-container">
                <Date key={"date"} Date={this.state.date} onClick={this.handleClick.bind(this)}/>
                {
                    this.state.matches.map((match) => {
                        return (
                            <div>
                                <Match key={match.Profile.UserID} Match={match} onClick={this.handleClick.bind(this)}/>
                                <SeparatorLine />
                            </div>
                        );

                    })
                }
            </div>
        );
    }
}
export default MatchContainer;