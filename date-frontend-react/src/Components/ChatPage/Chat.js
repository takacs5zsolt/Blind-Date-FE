import React from 'react';
import '../Global/Global.css';
import DateChatPage from './DateChatPage';
import ConcreteChatPage from './ConcreteChatPage';
import { getFullEndpoint, endpoints } from '../Global/Endpoints';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            fetched: null,
            data : null }
        //this.fetch();
    }
    componentDidMount(){
        if(this.props.id != null){
            console.log("mounted wit id!");
            //fetch
            var endpoint = getFullEndpoint(12,false);
            endpoint = endpoint + this.props.id + "/0";
            this.fetch(endpoint, 12);
        }
        else{
            console.log("mounted without id!");
            var endpoint = getFullEndpoint(6,false);
            this.fetch(endpoint, 6);
        }
    }
    fetch(endpoint, index) {
        console.log("FETCHING for " + endpoint);
        var returnData = {
            fetched: null,
            data: null
        };
        var returnDataFetch = null;
        var returnDataData = null;
        fetch(endpoint, {
            method: endpoints[index].method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('DateApplication')
            }
        }).then(resp => {
            if (resp.status === 200) {
                console.log("FETCH OK FOR " + endpoint + " !");
                returnDataFetch = true;
                return resp.json();
            }
            else if(resp.status === 417){
                console.log("417!!!!");
                returnDataFetch = false;
                return resp.json();
                /*
                console.log("Date partner not found...");
                returnData.data = "Date partner not found...";
                this.setState({data : null});
                */
            }
            else {
                returnDataFetch = false;
                this.setState({fetched:false, data:null});
                console.log("FETCH NOT OK!");
            }
        }).then(res => {
            //if fetched == true - data is messages
            console.log(res);
            if(returnDataFetch === true){
                console.log("fetch was successfull with ID: " + res.Profile.UserID);
                returnDataData = res;
                    this.setState({fetched : true,
                        data : res});
            }
            //else - data is errorMessage
            else if(returnDataFetch === false){
                console.log(res);
                returnDataData = res;
                this.setState({fetched : false,
                    data : res})
            }
            /*
            returnData.fetched = true;
            returnData.data = res;
            
            this.setState({ data: res });
            */
        }).catch(error => {
            console.log("ERROR! :" + error);
        });
    }
    componentWillReceiveProps(nextProps){
        console.log("RECEIVERD NEW PROPS FOR CHAT! " + nextProps.id);
        if(nextProps.id !== undefined && nextProps.id !== null){

            console.log("about to start fetching for id: " + nextProps.id);
            this.setState({
                fetched:null,
                data:null});
            //fetch for newProps
            var endpoint = getFullEndpoint(12,false);
            endpoint = endpoint + nextProps.id + "/0";
            console.log("endpoint modified to: " + endpoint);
            this.fetch(endpoint, 12);
        }
        else{
            //fetch for date
            this.setState({
                fetched:null,
                data:null});
            var endpoint = getFullEndpoint(6, false);
            console.log("endpoint modified to: " + endpoint);
            this.fetch(endpoint, 6);
        }
        
    }
    render() {
        if(this.state.fetched === null){
            return (
                <h1>LOADING PLEASE WAIT...</h1>
            );
        }
        else{
            if(this.state.fetched === false){
                //error while fetching
                if(this.state.data === null){
                    return (<h1>Error occured during communicating with server...</h1>)
                }
                //fetched with error data
                else{
                    return (<h1>{this.state.data}</h1>)
                }
            }
            //fetched successfully
            else if(this.state.fetched === true){
                console.log(this.state.data);
                return (
                    <ConcreteChatPage profile={this.state.data.Profile} messages={this.state.data.Messages} />
                );
            }
        }
        /*
        else{
            return (
                <ConcreteChatPage profile={this.state.data.Profile} messages={this.state.data.Messages} />
            );
        }
        */
    }
}
export default Chat;