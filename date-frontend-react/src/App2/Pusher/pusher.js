//SOURCE
//https://github.com/pusher/pusher-js#nodejs


let authorizer = (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        fetch('http://localhost:50144/api/user/auth?channel_name='+channel.name+'&socket_id='+socketId, {
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
            callback(null, data);
          })
          .catch(err => {
            callback(new Error(`Error calling auth endpoint: ${err}`), {
              auth: ""
            });
          });
      }
    };
  };

export default authorizer;