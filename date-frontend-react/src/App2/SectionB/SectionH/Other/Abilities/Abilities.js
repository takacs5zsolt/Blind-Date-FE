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
*/
import Like from './Ability/Like';
import Dislike from './Ability/Dislike';
import Share from './Ability/Share'

import './Abilities.css';


class Abilities extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {profile : props.Profile};
    }
    componentDidMount(){

    }
    onVote(activity){
        this.props.onVote(activity);
    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.setState({profile : newProps.Profile});
    }
    */
    render() {
        //var path = "/profile/" + this.state.profile.UserID;
        console.log("ability for: " + this.props.Profile.UserID);
        return(
            <div className="ability-container">
                <Like Ability={this.props.Profile.Abilities.LikeAble} onVote={this.onVote.bind(this)}/>
                <Share Ability={this.props.Profile.Abilities.ShareAlbum} onVote={this.onVote.bind(this)}/>
                <Dislike Ability={this.props.Profile.Abilities.DislikeAble} onVote={this.onVote.bind(this)}/>
            </div>
            
        );
    }
}
export default Abilities;