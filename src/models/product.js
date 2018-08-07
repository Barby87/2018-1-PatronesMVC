const productsInStore = [
  {
    name : "Royal Cannin Indoor",
    price : 11500,
    id : "12938834029",
    stock : 10
  },
  {
    name : "Pro Plan perro 15kg",
    price : 18000,
    id : "635623788347",
    stock : 10
  },
];

window.getProduct = function(){
  return productsInStore.find(
    element => {
      return element.id == id;
    }
  );

};

window.addProduct = function(){

};

window.deleteProduct = function(){

};

window.updateProduct = function(){
  const product = window.getProduct(id);
  Object.entries(updateObj).forEach(element => {
    product[element[0]] = element[1];
  });

};

window.getProductList = function(){
   return productsInStore;

};