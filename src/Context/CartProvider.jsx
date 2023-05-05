import { createContext, useContext, useState } from "react";
// import { getProduct } from "../Api";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getProduct()
  //     .then((res) => setProducts(res))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

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
      (acc, product) => acc + product.quantity * product.price,
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
        cart,
        setCart,
        addProduct,
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
