var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
    title: 'Quora Stats' 
});

ajax({ url: 'http://quora-api.herokuapp.com/users/Christopher-J-Su', type: 'json' }, function(data) {
    main.body('Followers: ' + data.followers + '\nQuestions: ' + data.questions + '\nAnswers: ' + data.answers + '\nEdits: ' + data.edits);
    main.show();
});