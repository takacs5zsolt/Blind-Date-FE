import React from 'react';
import './Global.css';

class VerifiedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    boolToValue(boolValue){
        if(boolValue){
            return "Verified profile! :)";
        }
        return "Not verified profile! :(";
    }
    render() {
        return (
            <p>{this.boolToValue(this.props.Verified)}</p>
        );
    }
}
export default VerifiedComponent;