import React from 'react';
import './Global.css';

class DefaultPage extends React.Component {
    constructor(props) {
        super(props);
        //state;
    }
    render() {
        return (
                <div className="section-card-app center-self">
                    <div className="section-title">
                        How to use the application
                    </div>
                    <div className="center-self">
                        <h1>Dating</h1>
                        <p>Start dating by clicking on the heart icon on the left...</p>
                        <h1>Matches</h1>
                        <p>You can browse your matches under the heart icon on the left...</p>
                        <h1>Profiles</h1>
                        <p>You can see your profile by clicking on your name on the top.</p>
                        <p>You can see others profile by clicking on their name on the chat page.</p>
                    </div>

                </div>
        );
    }
}
export default DefaultPage;