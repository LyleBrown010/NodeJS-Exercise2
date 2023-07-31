
var person = require('./person.js');

var person1 = new person('Gabrille', 'James', 'gj@gmail.com');
var person2 = new person('Fred', 'Banks', 'fb@gmail.com');
var person3 = new person('Car', 'Jobs', 'cj@gmail.com');


console.log(person1.personDetails());
console.log(person2.personDetails());
console.log(person3.personDetails());
