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

import './SectionH.css';
*/

import noUiSlider from "nouislider";
import 'nouislider/distribute/nouislider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        //this.state = { profile: props.Profile };
        //state;
    }
    componentDidMount() {

    }
    /*
    componentWillReceiveProps(newProps) {
        if (newProps !== this.props)
            this.setState({ profile: newProps.Profile });
    }
    */
    componentDidMount(){
        this.createSlider(this.props.DivID, this.props.IsFilterSlider);
    }
    createSlider(divID, isFilterSlider) {
        console.log("creating slider");
        var slider = document.getElementById(divID);
        console.log("slider div got");
        
        if(isFilterSlider){
            noUiSlider.create(slider, {
                start: [this.props.Profile.MinAge, this.props.Profile.MaxAge],
                connect: true,
                range: {
                    'min': 18,
                    'max': 65
                },
                step: 1,
                format:{
                    to: function (value) {
                        return value;
                    },
                    from: function (value) {
                        return Number(value.replace('.00', ''));
                    }
                }
            });
        }
        else{
            noUiSlider.create(slider, {
                start: this.props.Profile.Age,
                connect: 'lower',
                range: {
                    'min': 18,
                    'max': 65
                },
                step: 1,
                format:{
                    to: function (value) {
                        return value;
                    },
                    from: function (value) {
                        return Number(value.replace('.00', ''));
                    }
                }
            });
        }
        console.log("slider created");
    }
    render() {
        return null;
    }
}
export default Slider;