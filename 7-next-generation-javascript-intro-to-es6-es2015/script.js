// Lecture: Strings

let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;
function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(n.includes(' smi'));
console.log(`${firstName} `.repeat(5));