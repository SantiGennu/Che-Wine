import { CartContext, useCartContext } from "../../Context/CartProvider";

const CartWidget = () => {
  const { totalProducts } = useCartContext(CartContext);
  return (
    <button className="button-cart ">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="quantity"> {totalProducts()}</span>
    </button>
  );
};

export default CartWidget;
