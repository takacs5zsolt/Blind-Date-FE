import React from 'react';
import './Global.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        return (
            <div className="input-and-label">
                <label htmlFor={this.props.ID}>{this.props.label}</label>
                <input id={this.props.ID} className="input" placeholder={this.props.placeholder} type={this.props.type}></input>
            </div>
        );
    }
}
export default Input;