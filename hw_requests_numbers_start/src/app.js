const NumberFormView = require('./views/number_form_view');
const NumberData = require('./models/number_data');

document.addEventListener('DOMContentLoaded', () => {
  console.log('helloo');
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const numberData = new NumberData();
  numberData.getFact();
  numberData.displayFact();
});
