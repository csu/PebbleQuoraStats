var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
    title: 'Quora Stats' 
});

ajax({ url: 'http://quora-api.herokuapp.com/users/Christopher-J-Su', type: 'json' }, function(data) {
    main.body = 'Followers: ' + data.contents.followers + '\nQuestions: ' + data.contents.questions + '\nAnswers: ' + data.contents.answers + '\nEdits: ' + data.contents.edits;
    // console.log('userStats: ' + userStats);
    // console.log('main.body: ' + main.body);
    main.show();
});