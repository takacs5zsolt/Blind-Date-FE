import React from 'react';
import '../Global/Global.css';
import RadioGroup from '../Global/RadioGroupComponent';
import {NavLink} from 'react-router-dom';

const genderFilterOptions = [
    {
        ID:"genderFilter-male",
        value:true,
        label:"Male"
    },
    {
        ID:"genderFilter-female",
        value:false,
        label:"Female"
    }
]

class AdvancedProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    handleLogout(){
        localStorage.removeItem('DateApplication');
        window.location.assign("/");
    }
    render() {
        return (
            <div>
                <NavLink to="/settings/email"><input type="button" value="Change E-mail" className={this.props.profile.Male ? "button-male" : "button-female"}></input></NavLink><br></br>
                <NavLink to="/settings/password"><input type="button" value="Change password" className={this.props.profile.Male ? "button-male" : "button-female"}></input></NavLink><br></br>
                <input type="button" value="Logout" className={this.props.profile.Male ? "button-male":"button-female"} onClick={() => this.handleLogout()}></input>
                <div id="filter">
                    <RadioGroup GroupName="Interested" options={genderFilterOptions} defaultValue={this.props.profile.Interested}/>
                    <div id="filter-age">
                        <p>Between</p>
                        <input type="number" id="age-filter-min" min="18" max="60" defaultValue={this.props.profile.MinAge} className="input" step="1"></input>-
                        <input type="number" id="age-filter-max" min="18" max="60" defaultValue={this.props.profile.MaxAge} className="input" step="1"></input><br></br>
                    </div>
                </div>
            </div>
        );
    }
}
export default AdvancedProfileData;