function retirement(retirementAge) {
  var a = ' years left until retirement.'
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67)

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  return function (name) {
    var question;
    if (job === 'designer') {
      question = name + ', can you please explain what UX design is?';
    } else if (job === 'teacher') {
      question = 'What subject do you teach, ' + name + '?';
    } else {
      question = 'Hello ' + name + ', what do you do?';
    }
    console.log(question);
  }
}

interviewQuestion('designer')('John');