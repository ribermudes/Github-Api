var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getUserInfo = function(userInfo) {
  $.get('https://api.github.com/users/' + userInfo +  '/repos?&per_page=100&access_token=' + apiKey).then(function(response){
    $('#public-repos').empty();
    for(var i = 0; i < response.length; i++) {
      $('#public-repos').append("<li>" + response[i].name + " " + response[i].description + "</li>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
 // $('.showResults').show();
  });
};


exports.githubModule = Github;
