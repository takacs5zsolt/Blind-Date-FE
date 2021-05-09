import React from 'react';
import logo from "../../Images/dating_logo.svg";
import logoCSS from '../LogoComponent/logo.css';

class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="logo-container">
                <img src={logo} className="logo"></img>
                <div className="logo-text">
                    <span className="logo-text">Show your true <span className="colorized">colors</span>.</span>
                </div>
            </div>
        );
    }
}

export default LogoComponent;