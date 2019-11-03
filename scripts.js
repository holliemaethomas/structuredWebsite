

var userName = prompt('What is your name?');

var greeting = alert('Hello there and welcome ' + userName);


console.log('the user entered ' + userName.toUpperCase());

// let additionalContent = prompt('What other content should I add?');
// let answers = 0;
// let anythingElse = prompt('anything else?');

// while (answers > 2) {
//   anythingElse;
//   document.write('<ol>' + additionalContent + '</ol>');
//   document.write('<ol>' + anythingElse + '</ol>');
//   answers++;
//   console.log(additionalContent);
//   console.log(anythingElse);
// }


function guessMy () {
  let favorite = [
    'RED',
    'GREEN',
    'ORANGE',
    'YELLOW',
    'BLUE',
    'INDIGO',
    'VIOLET'
  ];
  let guessAttempts = 0;
  var correct = false;
  let guess = prompt('Before you take a look ' + userName + ' can you guess my favorite color?').toUpperCase;
  while (guessAttempts > 8 || correct === true) {
    // for (var i = 0; i < favorite.length; i++)
    if (guess === favorite[0]) {
      alert('that was fast!');
      correct = true;
    }
  }
  if (guess !== favorite[0]) {
    guessAttempts--;
    prompt('no ' + userName + ' try again, you have ' + guessAttempts + ' left');
  }
  if (guessAttempts > 8) {
    alert('not sure how you did that... but oh well!');
  }
}

guessMy();
