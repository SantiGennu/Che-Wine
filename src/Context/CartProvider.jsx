import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const isInCart = cart.find((prod) => prod.id === product.id);
    if (isInCart) {
      setCart(
        cart.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: isInCart.quantity + product.quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <CartContext.Provider value={{ addProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
