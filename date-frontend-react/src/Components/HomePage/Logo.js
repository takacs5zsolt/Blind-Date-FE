import React from 'react';
import logo from "../../Images/dating_logo.svg";
import './logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        //state
        //this.state = {date : new Date()};
    }

    render() {
        return (
            <div className="centered">
                <img src={logo}></img>
                <br></br>
                <span>Show your true <span className="colorized">colors</span>.</span>
            </div>
        );
    }
}

export default Logo;