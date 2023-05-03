 function request(cb) {
    // First, check if the browser supports notifications
    if ("Notification" in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
            // If permission is granted, show a notification
                cb(true);

            } else{
                cb(false);
            }
        });
    }
  
}

function state () {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            return(true);
        } else {
            return(false)
        }
    }
}


export default {
    request,
    state,
}