var UI = require('ui');
var ajax = require('ajax');
var Settings = require('settings');

// Set a configurable with just the close callback
Settings.config(
  { url: 'http://christopher.su/PebbleQuoraStats/' },
  function(e) {
    console.log('closed configurable');

    // Show the parsed response
    console.log(JSON.stringify(e.options));

    // Show the raw response if parsing failed
    if (e.failed) {
      console.log(e.response);
    }
  }
);

var main = new UI.Card({
    title: 'Quora Stats' 
});

ajax({ url: 'http://quora-api.herokuapp.com/users/Christopher-J-Su', type: 'json' }, function(data) {
    main.body('Followers: ' + data.followers + '\nQuestions: ' + data.questions + '\nAnswers: ' + data.answers + '\nEdits: ' + data.edits);
    main.show();
});