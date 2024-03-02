/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

// Three parameters: products, name, size // search through all products and find match both name and size // If no for either reason, return null
function chooseItemByNameAndSize(products, name, size) {
  const product = products.find(item => item.name === name);
  // if statement, neither product found return null. 'if product false OR ' || ' p.size false'
  if (!product || !product.availableSizes.includes(size)) {
    return null;
  }
  return product
}

// parameters are product and cart. Default cart is an empty object '= {}'
// if only called with product make new cart
function addProductToCart(product, cart = {}) {
  const productName = product.name;
// check if item does *not* exist in cart. if true, make item an object '= {}' with quantity and price 
  if (!cart[productName]) {
    cart[productName] = {
      quantity: 1,
      priceInCents: product.priceInCents
    }; // else if the item does exist in the cart, add one to quantity
  } else { 
    cart[productName].quantity += 1;
  }
  return(cart);
}

function calculateTotal() {}

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
