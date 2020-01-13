// Lecture: let and const

// ES5
var name5 = 'Ayşe Veli';
var age5 = 23;
name5 = 'Ayşe Ali';

// ES6
const name6 = 'Ayşe Veli';
let age6 = 23;

/********************************************/

// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ' ' + yearOfBirth);
}
driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }

  console.log(firstName + ' ' + yearOfBirth);
}
driversLicence6(true);

/********************************************/

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
