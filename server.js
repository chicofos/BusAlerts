
const url = 'http://bussonora.in/api/v1/ubicaciones/101/?format=json';
const alerts = require('./alerts')
const api = require('./request.js')
const proc = require('./processor.js')



init();

function init(){
  setTimeout(() => {
    api.requestUNE(url)
      .then((data) => processIt(data))
      .catch(error => console.log(`Something went wrong: ${error}`))
  }, 10000);
}

let processIt = (data) => {
  proc.processData(data)
    .then((result) => {
      
      if(result.status){
        alerts.sendAlert("Bus Alert","The bus is arriving!");
        return;
      }
      
      console.log(result.message);
      // alerts.sendAlert("Bus Alert",result.message);
      init();
    })
    .catch(error => console.log(`Something went wrong: ${error}`))
}


