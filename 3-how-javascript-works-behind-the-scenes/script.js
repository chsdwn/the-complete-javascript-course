///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1997);

function calculateAge(year) {
  console.log(2019 - year);
}

var retirement = function (year) {
  console.log(65 - (2019 - year));
}

retirement(1997);

console.log(age);
var age = 21;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

/* Output
22
43
undefined
21
65
21
/*

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword