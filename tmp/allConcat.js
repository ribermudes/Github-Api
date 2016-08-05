var Github = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var inputUserObject = new Github();
  $('#inputUser').click(function() {
    var userInfo = $('#user-info').val();
    inputUserObject.getUserInfo(userInfo);
  });
});
