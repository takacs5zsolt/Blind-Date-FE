import React from 'react';
import { loading } from '../../../src/Images/loading.svg';
import './LoadingSpinner.css';

class LoadingSpinner extends React.Component{
    constructor(props){
        super(props);
    }
    //state

    return(){
        <div>
            <img src={ loading }  className="spinner"/>
        </div>
    }
}