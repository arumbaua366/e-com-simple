const productsArray = [
  {
    id: "1",
    title: "coffee",
    price: 4.99,
  },
  {
    id: "1",
    title: "sunglasses",
    price: 9.99,
  },
  {
    id: "2",
    title: "camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
