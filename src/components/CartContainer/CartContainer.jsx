import { useCartContext } from "../../Context/CartProvider";

const CartContainer = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <img src={product.image} alt="" />
          <p>{product.price}</p>
          <p>{product.type}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
