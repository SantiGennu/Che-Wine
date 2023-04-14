import { Link } from "react-router-dom";
import { CartContext, useCartContext } from "../../Context/CartProvider";
import "./CartContainer.css";

const CartContainer = () => {
  const { removeProduct, clearCart, cart, totalPrice } =
    useCartContext(CartContext);
  console.log(cart);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((product) => (
              <>
                <div key={product.id} className="products-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="image"
                  />
                  <button className="clear" onClick={() => clearCart()}>
                    Clear cart
                  </button>
                  <p>{product.name}</p>
                  <p>{product.variaty}</p>
                  <p>{product.type}</p>
                  <p>${product.price}</p>
                  <>{product.quantity}</>
                  <button onClick={() => removeProduct(product.id)}> X </button>
                </div>
              </>
            ))}
          </div>
          <div className="price-container">
            <p c>Total price: ${totalPrice()}</p>
          </div>
        </>
      ) : (
        <div className="container-empty-cart">
          <p className="empty">Your cart is empty </p>
          <Link to="/">
            <button className="btn btn-shopping">Go shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
