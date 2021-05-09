import React from 'react';
import './Global.css';

const maleSign = "♂️";
const femaleSign = "♀️";

class GenderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    boolToValue(boolValue){
        if(boolValue){
            return maleSign;
        }
        return femaleSign;
    }
    render() {
        return (
            <p>{this.boolToValue(this.props.Gender)}</p>
        );
    }
}
export default GenderComponent;