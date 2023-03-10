import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  // set to empty arrow function with no logic. we don't define the functions inside the context. all context is saying is that it CAN define getProductQuantity, but that is done through the Provider
  // we have room for a function to exist here
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  // anything inside CartProvider are the children
  const [cartProducts, setCartProducts] = useState([]); // why empty array of cart products? we are using cartProducts state to manipulate what our Provider is giving to the rest of our app. e.g. if adding one item to the cart, it will be added to the useState, then the CartContext.Provider value={contextValue} will have that new added item because it is referencing it in the contextValue object (items: cartProducts)

  // { id: 1, quantity: 2 }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      // to safeguard from an undefined.quantity error (e.g. no product), add ? so that it only asks for quantity if there is an object
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1, quantity: 3 }, { id: 2, quantity: 1 + 1 } ]
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // filter() - [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    // these functions will be defined
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// Context (cart, addToCart, removeCart)
// Provider => gives your React app aaccess to all the things in your context
