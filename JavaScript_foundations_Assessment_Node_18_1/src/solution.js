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

// Three parameters: products, name, size
// search through all products and find match both name and size
// If no for either reason, return null
function chooseItemByNameAndSize(products, name, size) {
  const product = products.find(item => item.name === name);
  // if statement, neither product found return null. 'if product false or p.size false'
  if (!product || !product.availableSizes.includes(size)) {
    return null;
  }
  return product
}

function addProductToCart() {}

function calculateTotal() {}

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
