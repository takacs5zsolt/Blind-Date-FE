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
import stranger from '../../../../Images/stranger_photo.svg';

import Photo from './Photo';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {isActive = this.props.isActive}
        //state;
    }
    componentDidMount(){

    }
    /*
    componentWillReceiveProps(newProps){
        if(newProps !== this.props)
            this.setState({profile : newProps.Profile});
    }*/
    onClose(){
        //this.setState({isActive : false});
        this.props.onClose();
    }
    render() {
        if(this.props.isActive){
            return(        
                <div className="modal">
                    <img src={this.props.Photo}/>
                    <img className="modal-close-icon" onClick={this.onClose.bind(this)} src="https://icons-for-free.com/iconfiles/png/512/close+icon-1320184117228553763.png"/>
                </div>
            )
        }
        else{
            return null;
        }
    }
}
export default Modal;