import React from 'react';
import '../Global/Global.css';
import {getFullEndpoint, endpoints} from '../Global/Endpoints';
import ConcreteProfile from './ConreteProfile';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            data : null }
    }
    componentDidMount(){
        var endpoint = getFullEndpoint(4, false);
        if(this.props.id != null){
            endpoint = endpoint + "/" + this.props.id;
        }
        this.fetch(endpoint, 4);
    }
    fetch(endpoint, index) {
        console.log("FETCHING for " + endpoint);
        var returnData = {
            fetched: null,
            data: null
        };
        fetch(endpoint, {
            method: endpoints[index].method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('DateApplication')
            }
        }).then(resp => {
            if (resp.ok) {
                console.log("FETCH OK FOR " + endpoint + " !");
                return resp.json();
            }
            if (!resp.ok) {
                returnData.fetched = false;
                console.log("FETCH NOT OK!");
            }
        }).then(res => {
            console.log("fetch was successfull with ID: " + res.UserID);
            returnData.fetched = true;
            returnData.data = res;
            this.setState({ data: res});

        }).catch(error => {
            console.log("ERROR! :" + error);
        });
    }
    componentWillReceiveProps(nextProps) 
    {   
        console.log("NEXT PROPS: " + nextProps.id);
        console.log("CURRENT PROPS: " + this.props.id);
        if(nextProps.id === null){
            console.log("NEXT PROP IS NULL!");
            var endpoint = getFullEndpoint(4, false);
            this.fetch(endpoint, 4);
        }
        else{
            var endpoint = getFullEndpoint(4, false);
            endpoint = endpoint +"/" + nextProps.id;
            console.log("RECEIVER NEW PROPS!");
            this.fetch(endpoint, 4);
        }
        
    }
    render() {
        if(this.state.data == null){
            return(<h1>LOADING</h1>);
        }
        else{
            return(
                <ConcreteProfile data={this.state.data} />
            );
        }
    }
}
export default Profile;