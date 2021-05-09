const endpoints = [
    {
        endpoint: "register",
        method: "POST",
        needAuth: false
    },
    {
        endpoint:"login",
        method: "POST",
        needAuth: false,
    },
    {
        endpoint:"deletephoto/",
        method:"POST",
        needAuth: true
    },
    {
        endpoint:"sharealbum/",
        method: "POST",
        needAuth: true
    },
    {
        endpoint: "viewprofile",
        method: "GET",
        needAuth : true
    },
    {
        endpoint: "updateprofile",
        method:"POST",
        needAuth : true
    },
    {
        endpoint: "date",
        method: "GET",
        needAuth : true
    },
    {
        endpoint: "like",
        method: "PUT",
        needAuth: true
    },
    {
        endpoint: "sendmessage/",
        method: "PUT",
        needAuth: true
    },
    {
        endpoint: "changepassword",
        method: "POST",
        needAuth: true
    },
    {
        endpoint: "changeemail",
        method: "POST",
        needAuth: true
    },
    {
        endpoint: "viewmatches",
        method: "GET",
        needAuth:true
    },
    {
        endpoint:"viewmessages/",
        method:"GET",
        needAuth:true
    },
    {
        endpoint:"profilephotoupload/",
        method:"POST",
        needAuth:true
    }

]
const domain = "localhost:50144";
const apiRoute = "/api/user/";

function getFullEndpoint(index, isHTTPS){
    var protocol = "http://";
    if(isHTTPS === true){
        protocol = "https://";
    }
    var ep = protocol + domain + apiRoute + endpoints[index].endpoint;
    console.log("Returning the endpoint: " + ep);
    return ep;
}

export {getFullEndpoint, endpoints, domain};