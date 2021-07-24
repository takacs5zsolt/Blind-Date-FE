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

import './Photo.css';
import Modal from './Modal';


class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {isModalActive : false}
        /*
        this.state = {
            Photo : props.photo,
            ProfileType : props.profileType,
            Place : props.place};
            */
    }
    componentDidMount(){

    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.setState({profile : newProps.Profile});
    }
    */
    handleDelete(){
        console.log('deleting pic.');
        this.props.onSave();
    }
    handleUpload(){
        console.log('uploading pic.');
        this.props.onSave();
    }
    onModalOpen(){
        this.setState({
            isModalActive : true
        });
    }
    onModalClose(){
        this.setState({
            isModalActive : false
        })
    }
    render() {
        var uploadIcon = "https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png";
        var deleteIcon = "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png";

        console.log('Photo @ place ' + this.props.Place + ' for user type: ' + this.props.ProfileType + ' is: ' + this.props.Photo);
        if(this.props.ProfileType === "FullUserProfile"){
            return(
                <div className="centered-pic">
                    <img 
                        className="album-photo" 
                        src={this.props.Photo === "" ? uploadIcon : this.props.Photo}
                        onClick={this.props.Photo === "" ? ()=>this.handleUpload() : ()=>this.handleDelete()}
                    ></img>
                    <Modal Photo={this.props.Photo} onClose={this.onModalClose.bind(this)} isActive={this.state.isModalActive} />
                </div>
            );
            
        }
        else if(this.props.ProfileType === "FullProfile"){
            if(this.props.Photo === "")
                return (
                    <p>nincs kep.</p>
                );
            
            else{
                return(
                    <div className="centered-pic">
                        <img onClick={this.onModalOpen.bind(this)} className="album-photo" src={this.props.Photo}></img>
                        <Modal Photo={this.props.Photo} onClose={this.onModalClose.bind(this)} isActive={this.state.isModalActive} />
                    </div>
                );
            }
        }
        else{
            return null;
        }
    }
}
export default Photo;