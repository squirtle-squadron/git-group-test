'use strict';
const showBooksTemplate = require('../templates/account-listing.handlebars');

// const logic = require("../programlogic.js");
const onSuccess = (data) => {
  if (data.accounts.length === 0) {
    $("#warning-get").html('<p class="blink_me"> NO DATA! </p>');
  }else{
    let showBooksHtml = showBooksTemplate({ accounts: data.accounts });
    $('#content').html(showBooksHtml);
  }

};

const onError = function (response) {
  console.error(response);
};


module.exports = {
  onSuccess,
  onError,
};
