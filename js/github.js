var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUserInfo = function(userInfo) {
  $.get('https://api.github.com/users/' + userInfo +  '/repos?access_token=' + apiKey).then(function(response) {
    $('#showresults').empty();
        for(var i = 0; i < response.length; i++) {
          ('#showresults').append("<li>" + response[i].name + " " + response[i].description + "</li>");
        }
      }).fail(function(error){
 console.log(error.responseJSON.message);
 $('#error-show').show();
});
};


exports.githubModule = Github;
