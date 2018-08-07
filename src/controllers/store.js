window.onload = function () {
  window.listProducts();
}

window.listProducts = function () {
  const products = window.getProductList();
  window.showProductList(products);
};

window.buyProduct = function (id) {
  const product = window.getProduct(id);
  window.updateProduct(id, {
    stock: product.stock - 1
  });
  window.addSale({
    productId: product.id,
    quantity: 1,
    total: product.price
  });
  window.showSale(product);
}