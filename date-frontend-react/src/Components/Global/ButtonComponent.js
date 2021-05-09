import React from 'react';
import './Global.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        return (
                <button className={this.props.Male ? 'male-button' : 'female-button'}>{this.props.label}</button>
        );
    }
}
export default Button;