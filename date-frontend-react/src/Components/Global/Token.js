function getToken(){
    var token = localStorage.getItem('DateApplication');
    if(token != null){
      return token;
    }
    else{
      return null;
    }
}
function saveToken(token){
    console.log("saving the token");
    localStorage.setItem('DateApplication', token);
}