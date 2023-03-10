import { createContext, useState } from "react";
import { productsArray } from "./productsStore";

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
    cartProducts.find((product) => product.id === id).quantity;
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
//

// Context (cart, addToCart, removeCart)
// Provider => gives your React app aaccess to all the things in your context
