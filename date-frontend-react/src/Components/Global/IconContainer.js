import React from 'react';

import './Global.css';

class Icon extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        return (
                <img src={this.props.src} className={this.props.className} onClick={this.props.onclick}></img>
        );
    }
}
export default Icon;