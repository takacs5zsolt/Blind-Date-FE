import React from 'react';
import '../Global/Global.css';
import sendIcon from '../../Images/send_message.svg';
import uploadIcon from '../../Images/upload_photo.svg';
import Icon from '../Global/IconContainer';
import './Chat.css';
import {endpoints, getFullEndpoint} from '../Global/Endpoints';

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {uploadedFile : null};
        //state;
    }
    handleClickUpload(){
        console.log("clicked on upload, to UserID: " + this.props.SendingToID + "!");

    }
    componentDidMount(){
        this.handleClickInput();
    }
    fetch(endpoint, body){
        fetch(endpoint,{
            method: 'PUT',
            headers:{
                'Authorization' : "Bearer " + localStorage.getItem('DateApplication')
            },
            body: body
        })
        .then(resp =>{
            if(!resp.ok){
                console.error("SENDING MESSAGE WAS NOT SUCCESSFULL!");
            }
            else{
                return resp.json();
            }
        })
        .then(data =>{
            console.log("SENT MESSAGE DATA: " + JSON.stringify(data));
            this.props.onMessageSent(data);
            this.handleClickInput();
            this.resetFileUpload();
        })
    }
    resetFileUpload(){
        var upload = document.getElementById("file-upload");
        upload.value = '';
    }
    handleClickSendMessage(){
        console.log("clicked on sending, to UserID: " + this.props.SendingToID + "!");
        var text = document.getElementById("input-text").value;

        if(text != null){
            console.log("no text message here....");
        }
        else{
            console.log("text message happens here...");
        }

        var input = document.querySelector('input[type="file"]');
        var data = new FormData()
        data.append('photo', input.files[0])
        data.append('message', document.getElementById('input-text').value);
        
        var endpoint = 'http://localhost:50144/api/user/sendmessagenew/' + this.props.SendingToID;

        document.getElementById('input-text').value = "";

        this.fetch(endpoint, data);
        

    }
    handleClickInput(){
            var content = document.getElementById("content");
            console.log("ScrollHeight: " + content.scrollHeight);
            content.scrollTo(0,content.scrollHeight);
    }
    handleCustomBtnClick(){
        var input = document.getElementById('file-upload');

        input.click();
    }
    render() {
        return(
            <div className="chat-input">
                <input id="input-text" type="text" className="input-field input" onClick={()=> this.handleClickInput()}></input>
                <div className="input-icon-container">
                    <Icon src={uploadIcon} className="input-icon" onclick={() => this.handleCustomBtnClick()} />
                    <input id="file-upload" type="file" accept="image/png,image/jpg, image/jpeg" onChange={() => this.handleClickUpload()} hidden={true}></input>
                    <Icon src={sendIcon} className="input-icon" onclick={() => this.handleClickSendMessage()} />
                </div>
            </div>
        );
    }
}
export default ChatInput;