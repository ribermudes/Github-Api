var getRepos = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var inputUserObject = new getRepos();
  $('#inputUser').click(function() {
    var userName = $('#inputUser').val();
    inputUserObject.getUserInfo(userName);
    });
  });
