import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    clicking(){
        console.log('click');
        this.props.onClick();
    }
    render() {
        return(
            <button onClick={()=> this.clicking()}>{this.props.Number}</button>
        );
    }
}
export default Counter;