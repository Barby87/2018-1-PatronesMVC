window.showProductList = function(product){
  let render = '';

  product.forEach(element => {

    //+= va sumando texto
    render += '<div>';
    render += '<p>Nombre : ${element.name}</p>';
    render += '<p>Precio : ${element.price}</p>';
    render += '<button onclick=buyProduct(${element.id})>Comprar</button>';
    render += '</div>';
  });

  appContainer.innerHTML = render;  
};

window.showSale = function(product){
  let render ='';

  render += '<h1>Doge center</h1>' +
  '<h2>Gracias por su compra</h2>' +
  '<h3>Detalles</h3>' +
  '<p>Producto: ${product.name}</p>'

  appContainer.innerHTML = render;
};