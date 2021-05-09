import React from 'react';

function Match(props){
    return (
        <div>
            <div>
                <img src={props.userData.Photo1}></img>
            </div>
            <div>
                <p>{props.userData.UserName}</p>
                <p>{props.userData.Age}</p>
            </div>
            <div>
                <p>{props.userData.PlusData}</p>
            </div>
        </div>
    );
}

export default Match;