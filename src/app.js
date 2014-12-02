var UI = require('ui');
var ajax = require('ajax');
var Settings = require('settings');

var main = new UI.Card({
    title: 'Quora Stats' 
});

var username;

function updateMainCard(card, username) {
    ajax({ url: 'http://quora-api.herokuapp.com/users/' + username, type: 'json' }, function(data) {
        card.body('Followers: ' + data.followers + '\nQuestions: ' + data.questions + '\nAnswers: ' + data.answers + '\nEdits: ' + data.edits);
    });
}

// Set a configurable with just the close callback
Settings.config(
  { url: 'http://christopher.su/PebbleQuoraStats/' },
  function(e) {
    // console.log('closed configurable');

    // Show the parsed response
    // console.log(JSON.stringify(e.options));

    // Show the raw response if parsing failed
    if (e.failed) {
        console.log(e.response);
        main.body('HTTP request failed.');
    }
    else {
        username = Settings.option('username');
        updateMainCard(main, username);
    }
  }
);

username = Settings.option('username');
console.log('username: ' + username);
if ((typeof username === undefined) || (!username)){
    main.body('Enter your Quora username through the Pebble app.');
}
else {
    updateMainCard(main, username);
}

main.show();