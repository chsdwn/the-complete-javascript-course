(function () {
  var questions, randomQuestion, answer;

  var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  var question1 = new Question(
    'Which company created Windows operating system?',
    ['Apple', 'Microsoft', 'Sony'],
    1
  );

  var question2 = new Question(
    'Is JavaScript related to Java?',
    ['Yes', 'No'],
    1
  );

  var question3 = new Question(
    'Which one is not a JavaScript framework?',
    ['TypeScript', 'React', 'Angular'],
    0
  );

  questions = [question1, question2, question3];
  
  function showQuestion() {
    randomQuestion = questions[Math.floor(Math.random() * 3)];
    console.log(randomQuestion.question);
    for (var i = 0; i < randomQuestion.answers.length; i++) {
      console.log(i + ': ' + randomQuestion.answers[i]);
    }
    answerQuestion();
    console.log('***************************');
  }

  function answerQuestion() {
    answer = prompt('What is your answer')
    if (answer == randomQuestion.correctAnswer) {
      console.log('Correct answer');
      increaseScore()(true);
    } else {
      console.log('Wrong answer');
      increaseScore()(false);
    }
  }

  function increaseScore() {
    var score = 0;
    return function(correct) {
      if (correct) {
        score++;
        console.log('Score: ' + score);
      } else {
        console.log('Score: ' + score);
      }
    }
  }

  for (;;) {
    if (answer === 'exit') {
      break;
    } else {
      showQuestion();
    }
  }
})();