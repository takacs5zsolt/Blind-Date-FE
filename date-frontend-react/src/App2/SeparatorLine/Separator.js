import React from 'react';
import './Separator.css';

class SeparatorLine extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <hr className="line1" style={this.props.Height == null? {height: 1} : {height: this.props.Height}}/>
        );
    }
}

export default SeparatorLine;