var names =['Rob', 'Noortje', 'Julia', 'Jasper', 'Jente'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Rob'));

var person = {
  name: 'Rob',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' zegt hallo tegen ' + name)
    });
  }
};

person.greet();

//Challenge Area
var addExpression = (a, b) => a + b;
console.log(addExpression(3, 8));
