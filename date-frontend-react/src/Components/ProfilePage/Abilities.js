import React from 'react';
import like_image from '../../Images/like.svg';
import dislike_image from '../../Images/dislike.svg';
import albumShare_image from '../../Images/album_share.svg';
import '../Global/Global.css';
import {endpoints, getFullEndpoint} from '../Global/Endpoints.js';

class Abilites extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { canLike: this.props.Abilities.LikeAble,
            canShare: this.props.Abilities.ShareAlbum,
            canDislike : this.props.Abilities.DislikeAble ,
            activityMessage: null}
    }
    handleLikeClick(){
        console.log("Clicked on LIKE!");
        var liked = true;
        var id = this.props.profile.UserID;
        var ep = getFullEndpoint(7, false) + '/' + id + '/' + liked;

        fetch(ep, {
            method: endpoints[7].method,
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                this.setState({canLike : false, activityMessage:"Liked successfully!"});
            }
            else{
                this.setState({activityMessage : "Can not give like because of network errors... Try again later"});
            }
        })

    }
    handleDislikeClick(){
        console.log("Clicked on DISLIKE!");
        var liked = false;
        var id = this.props.profile.UserID;
        var ep = getFullEndpoint(7, false) + '/' + id + '/' + liked;

        fetch(ep,{
            method: endpoints[7].method,
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                this.setState({
                    canDislike : false,
                    activityMessage: "Disliked successfully!"
                });
            }
            else{
                this.setState({
                    activityMessage: "Can not give dislike because of network errors... Try again later"
                });
            }
        })

    }
    handleAlbumShareClick(){
        console.log("Clicked on ALBUM-SHARE!");
        var id = this.props.profile.UserID;
        var ep = getFullEndpoint(3, false) + '/' + id;

        fetch(ep,{
            method:endpoints[3].method,
            headers:{
                "Content-Type" :"application/json",
                "Authorization" : "Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                this.setState({
                    canShare : false,
                    activityMessage : "Album shared successfully!"
                })
            }
            else{
                this.setState({
                    activityMessage : "Can not share album due to network errors... Try again later"
                })
            }
        })

    }
    handleAbilities(like, dislike, share){

        var like_icon = null;
        var dislike_icon = null;
        var share_icon = null;
       if(like === true){
           like_icon = <img src={like_image} className="button-female" onClick={() => this.handleLikeClick()}></img>
           //like = <h1>ASD</h1>

        }
       if(share === true){
           share_icon = <img src={albumShare_image} className="button-male" onClick={() => this.handleAlbumShareClick()}></img>
           //share = <h1>ASD</h1>

        }
       if(dislike === true){
           dislike_icon = <img src={dislike_image} className="button-female" onClick={() => this.handleDislikeClick()}></img>
           //dislike = <h1>ASD</h1>
        
        }

       var sum = <div className="abilities">
           {like_icon}
           {share_icon}
           {dislike_icon}
       </div>
       return sum;
    }
    render() {
        console.log("Ability profile: " + this.props.Abilities.length);
        if(this.state.activityMessage === null ){
            return(
                <div>
                    {this.handleAbilities(this.state.canLike, this.state.canDislike, this.state.canShare)}
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>{this.state.activityMessage}</p>
                    {this.handleAbilities(this.state.canLike, this.state.canDislike, this.state.canShare)}
                </div>
            )
        }
        
        
    }
}
export default Abilites;