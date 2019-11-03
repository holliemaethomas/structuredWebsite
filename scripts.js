'use strict';

var greeting = alert('Hello there and welcome');

var userName = prompt('What is your name?');

console.log('the user entered ' + userName.toUpperCase());

var addContent = function () {
let additionalContent = prompt('What other content should I add?');
let answers = 0;
  while (answers = < 10) {
    document.write('<li>' + additionalContent + '</li>');
  }
}
