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

function Accessory(name, price, color, imageHref) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.imageHref = imageHref;

  this.toString = function() {
    return `Name: ${this.name}, Price: ${this.price}, Color: ${this.color}, imageHref: ${this.imageHref}`
  }
}

// 3. Define an array of hat objects using the Hat prototype
// that represent all of the hats in the static HTML.

let hats = [
  new Hat('Baseball Cap', '11.99€', 'Color : red', './assets/images/red/hats/1.png'),
  new Hat('Baseball Cap', '11.99€', 'Color : blue', './assets/images/blue/hats/1.png'),
  new Hat('Baseball Cap', '11.99€', 'Color : yellow', './assets/images/yellow/hats/1.png'),
  new Hat('Baseball Cap', '11.99€', 'Color : green', './assets/images/green/hats/1.png'),
  new Hat('Beanie', '17.99€', 'Color : red', './assets/images/red/hats/2.png'),
  new Hat('Beanie', '17.99€', 'Color : blue', './assets/images/blue/hats/2.png'),
  new Hat('Beanie', '17.99€', 'Color : green', './assets/images/green/hats/2.png'),
  new Hat('Straw hat', '10.99€', 'Color : yellow', './assets/images/yellow/hats/3.png'),
  new Hat('Straw hat', '10.99€', 'Color : blue', './assets/images/blue/hats/3.png'),
  new Hat('Tribly', '10.99€', 'Color : red', './assets/images/red/hats/4.png'),
  new Hat('Tribly', '10.99€', 'Color : blue', './assets/images/blue/hats/4.png'),
  new Hat('Tribly', '10.99€', 'Color : yellow', './assets/images/yellow/hats/4.png'),
];
console.log(hats);

// 4. Define a function displayHat(hat)
// that will accept a Hat object and create an HTML

function displayHat(hat){

  let firstDiv = document.createElement('div');
  firstDiv.className = `accessory col-sm-4 ${hat.color}`;

  let secondDiv = document.createElement('div');
  secondDiv.className ="card my-3";

  firstDiv.appendChild(secondDiv);

  let divPrice = document.createElement('div');
  divPrice.className ="currency btn btn-light disabled";
  divPrice.innerHTML = hat.price;

  secondDiv.appendChild(divPrice);

  let divImg = document.createElement('img');
  divImg.className = "card-img-top";
  divImg.src = hat.imageHref;
  divImg.alt = "Image of " + hat.name;

  secondDiv.appendChild(divImg);

  let divBodyCard = document.createElement('div');
  divBodyCard.className ="card-body text-center";

  secondDiv.appendChild(divBodyCard);

  let divTitle = document.createElement('h5');
  divTitle.className = "card-title";
  divTitle.innerHTML = hat.name;
  divBodyCard.appendChild(divTitle);

  let divPara = document.createElement('p');
  divPara.className = "card-text";
  divPara.innerHTML = hat.color;

  divBodyCard.appendChild(divPara);

  let divButton = document.createElement('button');
  divButton.className = 'btn btn-outline-primary';
  divButton.innerHTML = "Add to wishlist!";
  divBodyCard.appendChild(divButton);

  let productsDiv = document.getElementById('products');
  productsDiv.appendChild(firstDiv);

}
hats.forEach((hat, i) => {
  displayHat(hat);
});

// SECOND PART FILTER BY COLOR

// 1.First, write a function highlightSelectedFilter()
// that will remove the active CSS class from all filter

function highlightSelectedFilter(elem) {
    const buttons = document.querySelectorAll("#filters button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  elem.classList.add('active');
// 3. Bind this function as a click event to each of the filter buttons.
  filterHatsByColor(elem.textContent);
}

// 2. It will be necessary to select all hat components
// that match the color of the filter button that has been clicked.

function filterHatsByColor(color) {
  var children = Array.from(document.getElementById("products").children);
    children.forEach((element) => {
    element.style.display = "none";
  });

  const colorClass = color.toLowerCase();
  if (colorClass === "all") {
    children.forEach((element) => {
    element.style.display = "inline";
    });
  }
  children.forEach((element) => {
    if (element.classList.value.includes(colorClass)) {
        element.style.display = "inline";
    }
  });
}

// THIRD PART Socks and sunglasses
