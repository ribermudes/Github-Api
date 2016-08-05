var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getUserInfo = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=OAUTH-TOKEN' + apiKey).then(function(response) {
    $('#showresults').text("Here is a list of" + name + "'s Repositories. Included is a title and a brief description:");
          $('#public-repos').append('<li>'+ response[1].name + '</li>' + '<li>' response[1].description + '<li>');
        });
      });.fail(function(error){
      $('#showResults').text(error.responseJSON.message);
      });






// .getRepos = function(){
//   $.get( + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.githubModule = Github;
