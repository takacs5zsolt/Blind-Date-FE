import React from 'react';
import './Input.css';

class Section extends React.Component {
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