'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
// attach getFormFields globally


const onGetAccount = function (event) {
  event.preventDefault();
  api.index()
  .then(ui.onSuccess)
  .catch(ui.onError);


};


const accountHandlers = () => {
  $('#getBooksButton').on('click', onGetAccount);

};
module.exports = {
  accountHandlers
};
