import React from 'react';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import '../Global/Global.css';
import './home.css';
import Logo from './Logo';

class Home extends React.Component {
    constructor(props) {
        super(props);
        //state
        //this.state = {date : new Date()};
    }

    render() {
        return (
            <div className="female-body2">
                <div className="female-wrapper2">
                    <Logo />
                    <Login />
                    <Register />
                </div>
            </div>
        );
    }
}

export default Home;