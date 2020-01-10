var a = 23;
var b = a;
a = 46;
// b = 23

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
// obj1.age = 30
// obj2.age = 30

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
// age = 27
// obj.city = 'San Francisco'