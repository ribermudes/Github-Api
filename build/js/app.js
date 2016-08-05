(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "69251fbd390b37c81bb43ff389647768233776e2";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var Github = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var inputUserObject = new Github();
  $('#inputUser').click(function() {
    var userInfo = $('#user-info').val();
    $('#user-info').val("");
    inputUserObject.getUserInfo(userInfo);
  });
});

},{"./../js/github.js":2}]},{},[3]);
