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
