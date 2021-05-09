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

import './AbilityIcon.css';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {ability : props.Ability};
        //state;
    }
    componentDidMount(){

    }
    onClick(){
        console.log("clicked on Share");
        this.props.onVote("share");
    }
    render() {
        //var path = "/profile/" + this.state.profile.UserID;
        if(this.state.ability === true){

            return(
                <div>
                <img 
                    className="ability-icon" 
                    src="https://static.vecteezy.com/system/resources/previews/001/505/003/original/share-icon-free-vector.jpg" 
                    onClick={()=>this.onClick()} 
                />
            </div>
            
            );
        }
        else{
            return null;
        }
    }
}
export default Share;