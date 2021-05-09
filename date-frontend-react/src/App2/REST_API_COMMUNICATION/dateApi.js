//USE THIS FILE TO REACH THE API FROM A GLOBAL SCOPE - EASILY OVERWRITEABLE FROM HERE 

const domain = "localhost:50144";
const apiRoute = "/api/user/";

function getFullEndpoint(endpoint, isHTTPS){
    var protocol = "http://";
    if(isHTTPS === true){
        protocol = "https://";
    }
    var ep = protocol + domain + apiRoute + endpoint.endpoint;
    console.log("Returning the endpoint: " + ep);
    return ep;
}


const endpoints = {
    Register:
    {
        endpoint: "register",
        method: "POST",
        needAuth: false
    },
    Login:
    {
        endpoint:"login",
        method: "POST",
        needAuth: false,
    },
    DeletePhoto:
    {
        endpoint:"deletephoto/",
        method:"POST",
        needAuth: true
    },
    ShareAlbum:
    {
        endpoint:"sharealbum/",
        method: "POST",
        needAuth: true
    },
    ViewProfile:
    {
        endpoint: "viewprofile",
        method: "GET",
        needAuth : true
    },
    UpdateProfile:
    {
        endpoint: "updateprofile",
        method:"POST",
        needAuth : true
    },
    GetDate:
    {
        endpoint: "date",
        method: "GET",
        needAuth : true
    },
    Vote:
    {
        endpoint: "like",
        method: "PUT",
        needAuth: true
    },
    SendMessage:
    {
        endpoint: "sendmessagenew/",
        method: "PUT",
        needAuth: true
    },
    ChangePassword:
    {
        endpoint: "changepassword",
        method: "POST",
        needAuth: true
    },
    ChangeEmail:
    {
        endpoint: "changeemail",
        method: "POST",
        needAuth: true
    },
    ViewMatches:
    {
        endpoint: "viewmatches",
        method: "GET",
        needAuth:true
    },
    ViewMessages:
    {
        endpoint:"viewmessages/",
        method:"GET",
        needAuth:true
    },
    PhotoUpload:
    {
        endpoint:"profilephotoupload/",
        method:"POST",
        needAuth:true
    }

}




export {getFullEndpoint, endpoints, domain};