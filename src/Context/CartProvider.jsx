import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addProduct = (newProduct) => {
    const isInCart = cart.find((prod) => prod.id === newProduct.id);
    if (isInCart) {
      setCart(
        cart.map((prod) =>
          prod.id === newProduct.id
            ? { ...prod, quantity: isInCart.quantity + newProduct.quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, newProduct]);
    }
  };
  const totalPrice = () => {
    return cart.reduce(
      (prev, current) => prev + current.quantity * current.price,
      0
    );
  };
  const totalProducts = () => {
    return cart.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.quantity,
      0
    );
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeProduct = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cart,
        setCart,
        totalPrice,
        totalProducts,
        clearCart,
        isInCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
