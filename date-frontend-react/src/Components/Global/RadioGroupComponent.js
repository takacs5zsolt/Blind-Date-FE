import React from 'react';
import Radio from '../Global/RadioComponent';
import './Global.css';
import './Radio.css';

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //state;
    }
    render() {
        return (
            <div className="radio-group">
                <p>{this.props.GroupName}</p>
                <div className="input-and-label">
                {
                    this.props.options.map((element) =>(
                        <Radio ID={element.ID} groupName={this.props.GroupName} value={element.value} label={element.label} checked={element.value === this.props.defaultValue}/>

                    )
                    )
                }

                </div>
            </div>

        );
    }
}
export default RadioGroup;