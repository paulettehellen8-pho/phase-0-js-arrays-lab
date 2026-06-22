// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];
console.log(products)

function logFirstProduct() {
  console.log(products[0]);
}
logFirstProduct();

function addProduct(productName) {
  products.push(productName);
}
addProduct("Mouse");
console.log(products);

function updateProductName(index, newName) {
  let oldName = products[index];
  products[index] = newName;
}
updateProductName(1, "Smartphone");
console.log(products);

function removeLastProduct() {
  products.pop();

}
removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
