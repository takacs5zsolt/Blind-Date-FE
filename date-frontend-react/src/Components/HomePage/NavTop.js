import React from 'react';
import '../Global/Global.css';
import {getFullEndpoint, endpoints} from '../Global/Endpoints';
import Icon from '../Global/IconContainer';
import settings from '../../Images/settings.svg';
import {createPhotoURL} from '../Global/ImageHandler';

class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {fetched : false,
            profile : null};
    }
    componentDidMount(){
        //fetch api data
        var endpoint = getFullEndpoint(4, false);
        var token = localStorage.getItem('DateApplication');
        fetch(endpoint,{
            method: endpoints[4].method,
            headers:{
                "Authorization":"Bearer " + token,
                "Content-Type":"application/json"
            }
        }).then(res =>{
            if(!res.ok){
                this.setState({fetched : false});
            }
            else{
                return res.json();
            }
        })
        .then(data =>{
            this.setState({fetched:true,profile:data});
        })
        //put them in a state
    }
    getVerified(verified){
        if(verified == true){
            return "VERIFIED! :)";
        }
        else{
            return "NOT VERIFIED! :(";
        }
    }
    render() {
        if(this.state.fetched == false){
            return(
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
        else{
            return (
                <div className="nav-top">
                    <div className="nav-top-data">
                        <img src={createPhotoURL(this.state.profile.Photo1)} className="nav-photo"></img>
                        <div>
                            <p>{this.state.profile.UserName}, {this.state.profile.Age}</p>
                            <p>{this.getVerified(this.state.profile.Verified)}</p>
                        </div>
                    </div>
                    <div>
                        <Icon src={settings} className="icon-nav"/>
                    </div>
                    
                </div>
            );
        }
        
    }
}
export default NavTop;