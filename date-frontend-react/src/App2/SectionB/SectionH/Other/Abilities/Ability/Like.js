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
class Like extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {ability : props.Ability};
        //state;
    }
    componentDidMount(){

    }
    onClick(){
        console.log("clicked on Like");
        this.props.onVote("like");
    }
    render() {
        //var path = "/profile/" + this.state.profile.UserID;
        if(this.state.ability === true){

            return(
                <div >
                <img 
                    className="ability-icon" 
                    src="http://simpleicon.com/wp-content/uploads/smile.png" 
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
export default Like;