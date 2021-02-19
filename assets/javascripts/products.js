// Hat

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

// 4. Define a function displayHat(hat)
// that will accept a Hat object and create an HTML

function displayAccessory(hat) {

  let firstDiv = document.createElement('div');
  firstDiv.className = `accessory col-sm-4 ${hat.color}`;


  let secondDiv = document.createElement('div');
  secondDiv.className = "card my-3";

  firstDiv.appendChild(secondDiv);

  let divPrice = document.createElement('div');
  divPrice.className = "currency btn btn-light disabled";
  divPrice.innerHTML = hat.price;

  secondDiv.appendChild(divPrice);

  let divImg = document.createElement('img');
  divImg.className = "card-img-top";
  divImg.src = hat.imageHref;
  divImg.alt = "Image of " + hat.name;

  secondDiv.appendChild(divImg);

  let divBodyCard = document.createElement('div');
  divBodyCard.className = "card-body text-center";

  secondDiv.appendChild(divBodyCard);

  let divTitle = document.createElement('h5');
  divTitle.className = "card-title";
  divTitle.innerHTML = hat.name;
  divBodyCard.appendChild(divTitle);

  let divPara = document.createElement('p');
  divPara.className = "card-text";
  divPara.innerHTML = "Color : " + hat.color;

  divBodyCard.appendChild(divPara);

  let divButton = document.createElement('button');
  divButton.className = 'btn btn-outline-primary';
  divButton.innerHTML = "Add to wishlist!";
  divButton.addEventListener('click', () => {
    addToWishlist(hat);
    totalCost(hat)
  })
  divBodyCard.appendChild(divButton);

  let productsDiv = document.getElementById('products');
  productsDiv.appendChild(firstDiv);
}
accesories.forEach((hat, i) => {
  displayAccessory(hat);
});

// Filter by color

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

// Socks and sunglasses

// 3. Write a function loadRemoteAccessories().
// The function will use the textContent of the button that it is bound

function loadRemoteAccessories(button) {
  console.log(button.textContent);
  const buttonsAccesories = document.querySelectorAll("#navbarSupportedContent button");
  buttonsAccesories.forEach((button) => {
    button.classList.remove("active");
  });
  button.classList.add('active');
  var url;
  switch (button.textContent) {
    case 'Hats':
      url = "https://api.jsonbin.io/b/6025332887173a3d2f5ba7e9/2";
      break;
    case 'Socks':
      url = "https://api.jsonbin.io/b/601c1e6ed5aafc6431a3f80d";
      break;
    case 'Sunglasses':
      url = "https://api.jsonbin.io/b/601e5fbed5aafc6431a4aa14";
      break;
    case 'Gloves':
      url = "https://api.jsonbin.io/b/601e5ff6c033606410a81d95";
      break;
  }
  document.getElementById('products').innerHTML = '';

  fetch(url)
    .then(function(response) {
      // button.textContent = 'Hats';
      return response.json();
    })
    .then(function(accessories) {

      accessories.forEach(accessory => {
        displayAccessory(new Accessory(accessory.name, accessory.price, accessory.color, accessory.imageHref));
      });
    });
}

// The wishList

// 1. Write an empty function addToWishlist(accessory)

function addToWishlist(accessory) {

  let accesoriesNumbers = localStorage.getItem('count');

  accesoriesNumbers = parseInt(accesoriesNumbers);

  if (accesoriesNumbers) {
    localStorage.setItem('count', accesoriesNumbers + 1);
    document.querySelector('.wishlist span').textContent = accesoriesNumbers + 1;
  } else {
    localStorage.setItem('count', 1);
    document.querySelector('.wishlist span').textContent = 1;
  }
setItems(accessory);
}

function setItems(accessory) {
  let accessories = JSON.parse(localStorage.getItem('accessories'));

  if (!accessories) {
    accessories = {};
  }

  if(accessories[accessory.name + '' + accessory.color]){
    accessories[accessory.name + accessory.color].count++;
  }
  else {
    accessories[accessory.name + accessory.color] = {};
    accessories[accessory.name + accessory.color].item = accessory;
    accessories[accessory.name + accessory.color].count = 1;
  }
  localStorage.setItem("accessories", JSON.stringify(accessories));
}

function totalCost(accessory) {
  // console.log("The accessory price is", accesories.price);
  // console.log(localStorage.getItem('totalCost'));
  let cardCost = parseFloat(localStorage.getItem('totalCost'))

  if (!isNaN(cardCost)) {

    localStorage.setItem("totalCost", cardCost + parseFloat(accessory.price));
  } else {
    localStorage.setItem("totalCost", parseFloat(accessory.price));
  }
  // console.log(localStorage.getItem('totalCost'));
}
