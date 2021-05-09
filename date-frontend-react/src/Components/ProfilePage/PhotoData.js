import React from 'react';
import PhotoSection from './PhotoSection';
import './Profile.css';

class PhotoData extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        if(this.props.profile.ProfileType == "FullUserProfile" || this.props.profile.ProfileType == "FullProfile"){
            return(
                <div className="photo-container">
                    <PhotoSection profile={this.props.profile} Photo={this.props.profile.Photo1} place={1}/>
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={this.props.profile.Photo2} place={2}/>
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={this.props.profile.Photo3} place={3}/>
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={this.props.profile.Photo4} place={4}/>
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={this.props.profile.Photo5} place={5}/>
                </div>
                );
        }
        else{
            return(
                <div className="photo-container">
                    <PhotoSection profile={this.props.profile} Photo={null} />
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={null} />
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={null} />
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={null} />
                    <hr className="photo-hr"></hr>
                    <PhotoSection profile={this.props.profile} Photo={null} />
                </div>
            );
        }
        
    }
}
export default PhotoData;