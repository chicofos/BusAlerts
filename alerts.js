const notifier = require('node-notifier');
const path = require('path');

let saw = false;
let count = 10;

module.exports = {

 sendAlert : (title, message) => {

    //Validate if user saw the message
    if(saw && count != 0) {
        count--;
        return;
    }

    //Reset values
    count = 10;
    saw = false;

    //Send notification
    notifier.notify({
        title: title,
        message: message,
        icon: path.join(__dirname, 'school3.png'),
        sound: true,
        wait: true 
    }, (err, response) => { 
        //response
    });
  } 
}

notifier.on('click', function (notifierObject, options) {
    saw = true;
  });
  
