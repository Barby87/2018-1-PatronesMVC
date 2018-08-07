const productsInStore = [
  {
    name: "Royal canin indoor",
    price: 11500,
    id: "27853943085",
    stock: 10
  },
  {
    name: "Pro plan perro 15kg",
    price: 18000,
    id: "973873834353",
    stock: 10
  },
];

window.getProduct = function (id) {
    return productsInStore.find(
        element => {
            return element.id == id;
        }
    );
};

window.addProduct = function () {

};

window.deleteProduct = function () {

};

window.updateProduct = function (id, updateObj) {
    const product = window.getProduct(id);
    Object.entries(updateObj).forEach(element => {
        product[element[0]] = element[1];
    });
};

window.getProductList = function () {
    return productsInStore;
};