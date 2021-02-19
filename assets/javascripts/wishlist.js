function loadWishlist() {
  document.getElementById('products').innerHTML = '';

  const accessories = JSON.parse(localStorage.getItem("accessories"));
  if (accessories) {
    for(const[name, accessory] of Object.entries(accessories)){
      displayCard(accessory.item,  accessory.count)
    }
  }
}
