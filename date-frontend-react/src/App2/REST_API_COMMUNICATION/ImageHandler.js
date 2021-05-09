import {domain} from './dateApi';

function createPhotoURL(photoPath){
    if(photoPath.startsWith("/Photos")){
        console.log(photoPath);
        console.log(domain + photoPath);
        return "http://"+domain+photoPath;
    }
    else{
        return photoPath;
    }
    
}

export {createPhotoURL};