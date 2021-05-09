import React from 'react';
import '../Global/Global.css';
import ChatInput from './ChatInput';
import ChatProfile from './ChatProfile';


class DateChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {fetched : null}
    }
    componentDidMount(){
        //fetch api for date
    }
    render() {
        if(this.state.fetched == null){
            return(
                <div>
                    <h1>LOADING...</h1>
                </div>
            )
        }
        return(
            <div>
                <ChatProfile />
                <h1>Date CHAT PAGE</h1>
                <ChatInput />
            </div>
        )
    }
}
export default DateChatPage;