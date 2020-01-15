// Lecture: Spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum = addFourAges(18, 30, 12, 21);
console.log(sum);

// ES5
var ages = [18, 30, 12, 21];
var sum5 = addFourAges.apply(null, ages);
console.log(sum5);

// ES6
const sum6 = addFourAges(...ages);
console.log(sum6);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Ali', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');