function loadWishlist() {
  document.getElementById('products').innerHTML = '';

  const accessories = JSON.parse(localStorage.getItem("accessories"));
  if (accessories) {
    for(const[name, accessory] of Object.entries(accessories)){
      displayCard(accessory.item,  accessory.count)
    }
  }
}

function displayCard(accessory, count) {

  const colSm4 = document.createElement('div')
  colSm4.className = "col-sm-4";

  const card = document.createElement('div')
  card.className = "card my-3";
  colSm4.appendChild(card);

  const currency = document.createElement('div')
  currency.className = "currency btn btn-light disabled";
  currency.innerHTML = accessory.price;
  card.appendChild(currency);

  const img = document.createElement('img')
  img.className = "card-img-top";
  img.src = accessory.imageHref;
  img.alt = "Image of " + accessory.name;
  card.appendChild(img);

  const cardBody = document.createElement('div')
  cardBody.className = "card-body text-center";
  card.appendChild(cardBody);

  const title = document.createElement('h5')
  title.className = "card-title";
  title.innerHTML = accessory.name + 'x' + count;
  cardBody.appendChild(title);

  const text = document.createElement('p')
  text.className = "card-text";
  text.innerHTML = "Color : " + accessory.color;
  cardBody.appendChild(text);

  const button = document.createElement('button')
  button.className = 'btn btn-outline-danger';
  button.innerHTML = "Remove";
  button.addEventListener('click', () => {
    removeFromWishlist(accessory);
  });
  cardBody.appendChild(button);

  const products = document.getElementById('products').appendChild(colSm4);
};

function removeFromWishlist(accessory) {
  let accessories = JSON.parse(localStorage.getItem('accessories'));

  if (!accessories) {
    accessories = [];
  }

  if(accessories[accessory.name + accessory.color]){
    if(accessories[accessory.name + accessory.color].count > 1){
      accessories[accessory.name + accessory.color].count --;
    }
    else{
      accessories[accessory.name + accessory.color] = undefined
    }
  }

  localStorage.setItem("accessories", JSON.stringify(accessories));
  loadWishlist();
}
loadWishlist()
