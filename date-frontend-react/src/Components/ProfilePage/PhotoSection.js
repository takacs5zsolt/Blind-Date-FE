import React from 'react';
import stranger from '../../Images/stranger_photo.svg';
import '../Global/Global.css';
import {createPhotoURL} from '../Global/ImageHandler';
import {endpoints, getFullEndpoint} from '../Global/Endpoints';

class PhotoSection extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {modified : null,
            photo : this.props.Photo}
        this.uploadID = "upload-" + this.props.place;
        this.deleteID = "delete-" + this.props.place;
    }
    handleChange(){
        var place = this.props.place;

        var endpoint = getFullEndpoint(13, false);
        endpoint = endpoint + place;
        
        var photo = document.getElementById(this.uploadID).files[0];
        var data = new FormData();
        data.append("photo",photo);

        fetch(endpoint, {
            method: endpoints[13].method,
            headers:{
                //"Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem('DateApplication')
            },
            body: data
        })
        .then(resp =>{
            if(resp.ok){
                console.log("PHOTO CHANGE OK! :)");
                this.setState({modified:true});
                return resp.json();
            }
            else{
                console.log("PHOTO CHANGE NOT OK! :(");
                this.setState({modified:false});
            }
        })
        .then(data =>{
            this.setState({photo : data});
        })
    }
    handleDelete(){
        var place = this.props.place;

        var endpoint = getFullEndpoint(2, false);
        endpoint = endpoint + place;

        fetch(endpoint, {
            method: endpoints[2].method,
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem('DateApplication')
            }
        })
        .then(resp =>{
            if(resp.ok){
                console.log("DELETE OK! :)");
                this.setState({modified:true,
                photo : null});
            }
            else{
                console.log("DELETE NOT OK! :(");
                this.setState({modified:false});
            }
        })
    }
    handleCustomBtnClick(){
        var input = document.getElementById(this.uploadID);

        input.click();
    }
    render() {
        if (this.props.profile.ProfileType == "FullUserProfile") {
            if (this.state.photo === "" || this.state.photo === null) {
                return (
                    <div className="photo-element">
                        <p>No photo uploaded yet...</p>
                        <input type="button" value="UPLOAD PHOTO" className="button-female" onClick={() => this.handleCustomBtnClick()}></input>
                        <input id={this.uploadID} className="hidden-btn" type="file" accept="image/png,image/jpg, image/jpeg" onChange={() => this.handleChange()} hidden={true}></input>
                    </div>
                );
            }
            else {
                return (
                    <div className="photo-element">
                        <img className="profile-photo" src={createPhotoURL(this.state.photo)}></img>
                        <input type="button" value="UPLOAD PHOTO" className="button-female" onClick={() => this.handleCustomBtnClick()}></input>
                        <input id={this.uploadID} type="file" accept="image/png,image/jpg, image/jpeg" onChange={() => this.handleChange()} hidden={true}></input>
                        <input id={this.deleteID} className="button-male" type="button" value="Delete photo" onClick={() => this.handleDelete()}></input>
                    </div>
                );
            }
        }
        else {
            if (this.state.photo === "" || this.state.photo === null) {
                return(
                    <div className="photo-element">
                        <img className="profile-photo" src={stranger}></img>
                    </div>
                );
            }
            else{
                
                return (
                    <div className="photo-element">
                        <img className="profile-photo" src={createPhotoURL(this.state.photo)}></img>
                    </div>
                );
            }
        }

    }
}
export default PhotoSection;