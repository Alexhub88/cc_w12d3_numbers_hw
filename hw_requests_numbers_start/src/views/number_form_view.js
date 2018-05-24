const PubSub = require('../helpers/pub_sub.js')

const NumberFormView = function (form) {
  this.form = form;
};

NumberFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    console.log('hellooo');
    this.handleSubmit(evt);
  })
};

NumberFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('NumberFormView:submit', evt.target.number.value);
};

NumberFormView.prototype.displayFact = function () {
  const infoContainer = document.querySelector('#number-fact');
  const paragraph = document.createElement('p');
  PubSub.subscribe("NumberData:fact-loaded", (evt) => {
    const factText = evt.detail;
  })
  paragraph.textContent = factText;
  infoContainer.appendChild(paragraph);
};

module.exports = NumberFormView;
