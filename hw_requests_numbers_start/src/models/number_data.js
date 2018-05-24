const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberData = function () {
  this.randomNumberFact = null;
}

NumberData.prototype.getData = function (inputNumber) {
  const apiUrl = 'http://numbersapi.com/'+inputNumber+'?json'
  const request = new Request(apiUrl);
  request.get((data) => {
    this.randomNumberFact = data[0];
    PubSub.publish("NumberData:fact-loaded", this.randomNumberFact);
  })
}

NumberData.prototype.getFact = function(){
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    const inputNumber = evt.detail;
    console.log(evt.detail);
     // getData(inputNumber);
  });
}

module.exports = NumberData;
