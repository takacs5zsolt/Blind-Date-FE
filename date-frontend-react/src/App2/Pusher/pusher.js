//SOURCE
//https://github.com/pusher/pusher-js#nodejs

let authorizer = (channel, options) => {
  return {
    authorize: (socketId, callback) => {
      fetch('http://localhost:50144/api/user/auth?channel_name=' + channel.name + '&socket_id=' + socketId, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Received ${res.statusCode} from ${'http://localhost:50144/api/user/auth'}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("data has been retrieved ", data);
        callback(false, data);
      })
      .catch(err => {
        callback(new Error(`Error calling auth endpoint: ${err}`), {
          auth: ""
        });
      });
    }
  };
};

/*
function originalAuthorizer(context, socketId, callback) {
  var self = this,
      xhr;
  xhr = runtime.createXHR();
  xhr.open('POST', self.options.authEndpoint, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  for (var headerName in this.authOptions.headers) {
    xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = void 0;
        var parsed = false;

        try {
          data = JSON.parse(xhr.responseText);
          parsed = true;
        } catch (e) {
          callback(new HTTPAuthError(200, 'JSON returned from auth endpoint was invalid, yet status code was 200. Data was: ' + xhr.responseText), {
            auth: ''
          });
        }

        if (parsed) {
          callback(null, data);
        }
      } else {
        var suffix = url_store.buildLogSuffix('authenticationEndpoint');
        callback(new HTTPAuthError(xhr.status, 'Unable to retrieve auth string from auth endpoint - ' + ("received status: " + xhr.status + " from " + self.options.authEndpoint + ". ") + ("Clients must be authenticated to join private or presence channels. " + suffix)), {
          auth: ''
        });
      }
    }
  };

  xhr.send(this.composeQuery(socketId));
  return xhr;
}
let almostOriginalAuthorizer = (context, socketId, callback) => {
  fetch(self.options.authEndpoint,{
    method:"POST",
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res=>{
    if(res.ok){
      return JSON.parse(res);
    }
    else{
      callback(new HTTPAuthError(res.status, 'Unable to retrieve auth string from auth endpoint - ' + ("received status: " + res.status + " from " + self.options.authEndpoint + ". ") + ("Clients must be authenticated to join private or presence channels. ")), {
        auth: ''
      });
    }
  })
  .then(data=>{
    callback(null,data);
  })
  .catch(e =>{
    callback(new HTTPAuthError(200, 'JSON returned from auth endpoint was invalid, yet status code was 200.'), {
      auth: ''
    });
  });
}
*/
/*
let customAuthorizer = (context, socketId, callback) => {
  
  fetch('http://localhost:50144/api/user/auth?channel_name=' + context.channel.name + '&socket_id=' + socketId, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" })
  })
  .then(res => {
      if (!res.ok) {
        throw new Error(`Received ${res.statusCode} from ${'http://localhost:50144/api/user/auth'}`);
      }
      return res.json();
    })
    .then(data => {
      console.log("data has been retrieved from custom Authorizer", data);
      callback(false, data);
    })
    .catch(err => {
      callback(true, 'Error calling auth endpoint');
    });
  }
  */

let almostOriginalAuthorizer = 5;
export {almostOriginalAuthorizer};