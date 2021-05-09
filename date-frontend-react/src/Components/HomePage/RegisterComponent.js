import React from 'react';
import '../Global/Global.css';
import Input from '../Global/InputComponent';
import Range from '../Global/RangeInput';
import Button from '../Global/ButtonComponent';
import RadioGroup from '../Global/RadioGroupComponent';
import {getFullEndpoint, endpoints} from '../Global/Endpoints';
import './register.css';

const genderSelectorOptions =[
    {
        ID: "gender-male",
        value: "Male",
        label: "Male"
    },
    {
        ID:"gender-female",
        value: "Female",
        label: "Female"
    }
]
const genderFilterOptions = [
    {
        ID:"genderFilter-male",
        value:"Male",
        label:"Male"
    },
    {
        ID:"genderFilter-female",
        value:"Female",
        label:"Female"
    }
]
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {clicked: false ,
                        error:false,
                        success: false};
        //state;
    }
    handleClick() {
        console.log('clicked');
        var toggle = !this.state.clicked;
        if(toggle === true){
            this.setState({clicked: toggle});
        }
    }
    getRegisterDetails(email, password, gender, interestedGender, ageMin, ageMax, age, userName){
        var body ={
            "EMail" : email,
            "PassW" : password,
            "Gender" : this.genderValueToBool(gender),
            "Interested" : this.genderValueToBool(interestedGender),
            "MinAge" : ageMin,
            "MaxAge" : ageMax,
            "Age" : age,
            "Name" : userName
        }
        return body;
    }
    componentDidMount(){

    }
    genderValueToBool(gender){
        console.error(gender);
        if(gender === "Male" || gender === "male"){
            console.error("TRUE");
            return true;
        }
        else{
            console.error("FALSE");
            return false;
        }
    }
    getPhoto(){
        var photo = document.querySelector('input[type="file"]');
        return photo.files[0];
    }
    generateRegisterFromData(body){
        var formData = new FormData();
        formData.append("user",JSON.stringify(body));
        formData.append("photo",this.getPhoto());
        return formData;
    }
    validateAgeFilter(minAge, maxAge){
        if(minAge <= maxAge){
            return true;
        }
        return false;
    }
    validateFileUpload(file){
        if(file === null){
            return false;
        }
        return true;
    }
    validateRadioSelector(groupName){
        var selected = document.querySelector('input[name="' + groupName + '"]:checked');
        if(selected == null){
            return false;
        }
        return true;
    }
    register(){
        var email = document.getElementById("reg-email").value;
        var password = document.getElementById("reg-pass").value;
        var passwordConfirm = document.getElementById("reg-pass-confirm").value;
        
        var name = document.getElementById("reg-name").value;
        if(this.validateRadioSelector("Gender")){
            var gender = document.querySelector('input[name="Gender"]:checked').value;
        }
        var age = document.getElementById("age").value;

        if(this.validateRadioSelector("Interested")){
            var interested = document.querySelector('input[name="Interested"]:checked').value;
        }
        var ageMin = document.getElementById("age-filter-min").value;
        var ageMax = document.getElementById("age-filter-max").value;

        var file = document.querySelector('input[type="file"]').files[0];

        if(this.checkPasswords(password, passwordConfirm) && 
            this.validateAgeFilter(ageMin, ageMax) && 
            file != null && 
            this.validateRadioSelector("Gender") && 
            this.validateRadioSelector("Interested"))
        {
            var body=this.getRegisterDetails(email, password, gender, interested, ageMin, ageMax, age, name);
            console.log(JSON.stringify(body));

            var data = new FormData();
            data.append('photo', file);
            data.append('user', JSON.stringify(body));

            var endpoint = getFullEndpoint(0, false);

            fetch(endpoint,{
                method: endpoints[0].method,
                headers:{
                },
                body: data
            })
            .then(res =>{
                console.log("registration endpoint reached...");
                if(!res.ok){
                    console.log("status not ok");
                    this.setState({success:false});
                    //throw res;
                }
                else{
                    console.log("status 200");
                    this.setState({success:true});
                    return "Registration was successful!";
                }
            })
            .then((data) =>{
                console.log("reg succ");
                //registerSuccess(data);
            })
            /*
            .catch(error => {
                console.log("reg error");
                console.log(error);
                error.json().then((body) =>{
                    //console.log(body.Message);
                    console.log(body);
                    this.setState({error:true});
                    document.getElementById("error").innerHTML = body;
                })
            })*/

        }
        else{
            var error=document.getElementById("error");
            this.setState({error:true});
            if(!this.checkPasswords(password, passwordConfirm)){
                error.innerHTML = "PASSWORD MISMATCH!";
            }
            if(!this.validateAgeFilter(ageMin, ageMax)){
                error.innerHTML = "Minimum age must be less than, or equal to maximum age";
            }
            if(file == null){
                error.innerHTML = "A photo must be uploaded!";
            }
            if(!this.validateRadioSelector("Gender")){
                error.innerHTML = "Please select a gender for you!";
            }
            if(!this.validateRadioSelector("Interested")){
                error.innerHTML = "Please select a gender you are interested in!";
            }
            //show error message
        }
        //getting the values from the elements
        //generate a from data from them
        //send the formData to the endpoint
        //if success: write out successfull
        //if failed: write out failed
    }
    checkPasswords(password, passwordConfirm){
        return password === passwordConfirm;
    }
    
    render() {
        return (
            <div onClick={() => this.handleClick()} className="section-card">
                <div className="section-title">
                    You can register easily in here
                <hr></hr>
                </div>
                <div className="section-content">
                    <div className={this.state.clicked ? "" : "hidden"}>
                        <div id="credentials">
                            <Input ID="reg-email" placeholder="E-mail address" type="text" label="E-mail: " />
                            <Input ID="reg-pass" placeholder="Password" type="password" label="Password: " />
                            <Input ID="reg-pass-confirm" placeholder="Password confirm" type="password" label="Confirm password: " />
                        </div>
                        <hr></hr>
                        <div id="profile">
                            <Input ID="reg-name" placeholder="Nickname" type="text" label="Nickname: "/>
                            <Range ID="age" StartValue="20" minValue="18" maxValue="60" label="Age: "/>
                            <RadioGroup GroupName="Gender" options={genderSelectorOptions} />
                        </div>
                        <hr>
                        </hr>
                        <div id="filter">
                            <RadioGroup GroupName="Interested" options={genderFilterOptions} />
                            <div id="filter-age">
                                <p>Between</p>
                                <input type="number" id="age-filter-min" min="18" max="60" defaultValue="19" className="input" step="1"></input>-
                                <input type="number" id="age-filter-max" min="18" max="60" defaultValue="30" className="input" step="1"></input><br></br>
                            </div>
                            <input type="file" id="photoUpload" className="input" accept="image/png,image/jpg, image/jpeg"></input>
                        </div>
                        <div>
                            <button onClick={() => this.register()} className="button-female" id="register-btn">REGISTER</button>
                            <p id="error" className={this.state.error ? "error-show" : "error-hidden"}></p>
                            <p id="succes" className={this.state.success ? "success-show" : "success-hidden"}>Registration was successful!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;