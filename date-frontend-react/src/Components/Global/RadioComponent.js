import React from 'react';
import './Global.css';

class Radio extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        //console.log("The checking value for radio is" + this.props.checked);
        if(this.props.checked === true){
            console.log("RADIO BUTTON WITH VALUE MUST BE CHECKED: " + this.props.value);
            return (
                <div className="radio-btn">
                    <label htmlFor={this.props.ID}>{this.props.label}</label>
                    <input id={this.props.ID} name={this.props.groupName} className="input" value={this.props.value} type="radio" defaultChecked></input>
                </div>
            );
        }
        else{
            //console.log("RADIO BUTTON WITH VALUE MUST NOT BE CHECKED: " + this.props.value);
            return (
                <div className="radio-btn">
                    <label htmlFor={this.props.ID}>{this.props.label}</label>
                    <input id={this.props.ID} name={this.props.groupName} className="input" value={this.props.value} type="radio"></input>
                </div>
        );
        }
    }
}
export default Radio;