// FIRST PART HAT

// 1. Define a simple JavaScript object that represents a hat,
// with properties name, price, color, and imageHref.

class Hat {
  constructor(name, price, color, imageHref){
    this.name = name,
    this.price = price,
    this.color = color,
    this.imageHref = imageHref
  }
  toString() {
      return `Name: ${this.name}, Price: ${this.price}, Color: ${this.color}, imageHref: ${this.imageHref} `
    }
}
let hat1 = new Hat('Baseball', '11.99€', 'Red', './assets/images/red/hats/1.png');
console.log(hat1.toString());

// 2. Define a JavaScript prototype for a Hat
// that can be used to construct the object from the previous task.
// Add a function toString()

function hat(name, price, color, imageHref) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.imageHref = imageHref;

  this.toString = function(){
    return `Name: ${this.name}, Price: ${this.price}, Color: ${this.color}, imageHref: ${this.imageHref} `
  }
}

// 3. Define an array of hat objects using the Hat prototype
// that represent all of the hats in the static HTML.

// 3.Définissez un tableau d'objets de chapeau à l'aide du prototype de chapeau qui représentent tous les chapeaux du HTML statique.
let accesories = [
  new Accessory('Baseball Cap', '11.99', 'red', './assets/images/red/hats/1.png'),
  new Accessory('Baseball Cap', '11.99', 'blue', './assets/images/blue/hats/1.png'),
  new Accessory('Baseball Cap', '11.99', 'yellow', './assets/images/yellow/hats/1.png'),
  new Accessory('Baseball Cap', '11.99', 'green', './assets/images/green/hats/1.png'),
  new Accessory('Beanie', '17.99', 'red', './assets/images/red/hats/2.png'),
  new Accessory('Beanie', '17.99', 'blue', './assets/images/blue/hats/2.png'),
  new Accessory('Beanie', '17.99', 'green', './assets/images/green/hats/2.png'),
  new Accessory('Straw hat', '10.99', 'yellow', './assets/images/yellow/hats/3.png'),
  new Accessory('Straw hat', '10.99', 'blue', './assets/images/blue/hats/3.png'),
  new Accessory('Tribly', '10.99', 'red', './assets/images/red/hats/4.png'),
  new Accessory('Tribly', '10.99', 'blue', './assets/images/blue/hats/4.png'),
  new Accessory('Tribly', '10.99', 'yellow', './assets/images/yellow/hats/4.png'),
];
console.log(accesories);
