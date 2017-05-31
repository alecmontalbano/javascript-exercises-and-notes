/* jshint esversion: 6*/
// Let's create a car
//Properties
//color, make, model, hasAC
const Car = {
  color: 'green',
  make: 'Dodge',
  model: 'Dart',
  hasAC: false,
  paint: function(newColor){
    //Car.color = newColor;
    this.color = newColor;// inside of the object 'this' refers to the object
  },
  fixAC: function(){
    this.hasAC = true;
  }
};

console.log('Car: ', Car);
//I want to fix the AC
Car.hasAC = true;
console.log('Car: ', Car);
//Alternatively
Car['hasAC'] = false;
console.log('Car: ', Car);

//I want to check the color;
console.log('Color of Car: ', Car.color);

//Paint the Car
Car.paint('orange');
console.log('Car: ', Car);

//Fix the AC
Car.fixAC();
console.log('Car: ', Car);

/// Shirt object
// You need at least three Properties
// You need at least three methods
// One of your methods should modify a property
// You need to demonstrate the usage of each method
const Shirt = {
  color: 'red',
  material: 'cotton',
  price: 10,
  dye: function(newColor) {
    this.color = newColor;
  },
  changeMaterial: function (newMaterial){
    this.material = newMaterial;
  },
  reprice: function(newPrice){
    this.price = newPrice;
  }
};
console.log('Shirt: ', Shirt);
Shirt.dye('green');

Shirt.changeMaterial('tweed');

Shirt.reprice(12);
console.log('Shirt: ', Shirt);
