import React from 'react';
import './Global.css';

class Range extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.StartValue};
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="input-and-label">
                <label htmlFor={this.props.ID}>{this.props.label}</label>
                <input id={this.props.ID} className="input" defaultValue={this.props.StartValue} type="range" min={this.props.minValue} max={this.props.maxValue} onChange={(event) => this.handleChange(event)}></input>
                <span>{this.state.value}</span>
            </div>
        );
    }
}
export default Range;