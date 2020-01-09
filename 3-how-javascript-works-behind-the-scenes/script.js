var john = {
  name: 'John',
  birthDate: 1997,
  calculateAge: function() {
    console.log(this);
    console.log(2019 - this.birthDate);
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  birthDate: 1990
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

/* Output
{John}
22
{Mike}
29
*/