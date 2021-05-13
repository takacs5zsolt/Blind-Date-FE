import React from 'react';
/*
import '../Global/Global.css';
import './ChatProfile.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import {createPhotoURL} from '../Global/ImageHandler';
*/

import Slider from './Slider';

import './EditableProfile.css';
import CredentialChangeButtons from './CredentialChangeButtons';
/*
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
*/



class EditableProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            clickedButton = this.props.ClickedButton
        }

    }
    componentDidMount() {

    }
    render() {
        //RANGE SLIDER: https://refreshless.com/nouislider/
        //INFO from: https://stackoverflow.com/questions/4753946/html5-slider-with-two-inputs-possible
        //BG Music: https://www.youtube.com/watch?v=SjiSEvh6fJs&list=WL&index=1&t=2173s
        /*
        */
        if (this.props.ClickedButton != null) {
            <CredentialChangeButtons Clicked={this.props.ClickedButton} />
        }
        else {

            return (
                <div className="main-container">
                    <div id="name" className="input-line input-box">
                        <label htmlFor="username-input">Mi a neved?</label>
                        <input className="inputField"
                            type="text"
                            id="username-input"
                            maxLength="25"
                            defaultValue={this.props.Profile.UserName}></input>
                    </div>
                    <div id="age" className="input-box input-box-padding">
                        <label htmlFor="password-input">Hány éves vagy?</label>
                        <div id="age-slider" className="slider-box">
                            <Slider Profile={this.props.Profile} DivID="age-slider" IsFilterSlider={false} />
                        </div>
                    </div>
                    <div id="gender" className="input-line input-box">
                        <label htmlFor="gender-input">A te nemed:</label>
                        <div id="gender-input" className="input-radio-group" defaultValue={this.props.Profile.Male}>
                            <div>
                                <input className="input-radio" type="radio" name="gender" id="gender-input-female" value={false} defaultChecked={this.props.Profile.Male == false}></input>
                            Nő
                        </div>
                            <div>
                                <input className="input-radio" type="radio" name="gender" id="gender-input-male" value={true} defaultChecked={this.props.Profile.Male == true}></input>
                            Férfi
                        </div>
                        </div>
                    </div>
                    <div id="interested" className="input-line input-box">
                        <label htmlFor="interested-input">Kit keresel?</label>
                        <div id="interested-input" className="input-radio-group" defaultChecked={this.props.Profile.Interested}>
                            <div>
                                <input className="input-radio" name="interested-gender" type="radio" id="interested-input-female" value={false} defaultChecked={this.props.Profile.Interested == false}></input>
                            Nőt
                        </div>
                            <div>
                                <input className="input-radio" name="interested-gender" type="radio" id="interested-input-male" value={true} defaultChecked={this.props.Profile.Interested == true} ></input>
                            Férfit
                        </div>
                        </div>
                    </div>
                    <div id="age-filter" className="input-box input-box-padding">
                        <label htmlFor="filter-input">Hány éves legyen?</label>
                        <div id="filter-slider" className="slider-box">
                            <Slider Profile={this.props.Profile} DivID="filter-slider" IsFilterSlider={true} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default EditableProfile;