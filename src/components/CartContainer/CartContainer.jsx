import { Link } from "react-router-dom";
import { CartContext, useCartContext } from "../../Context/CartProvider";
import "./CartContainer.css";
import { UseCount } from "../../Hooks/UseCount";

const CartContainer = () => {
  const { count, increment, decrement } = UseCount();
  const { removeProduct, clearCart, cart, totalPrice } =
    useCartContext(CartContext);

  return (
    <>
      <div className="cart-container-title">
        <h1> Shopping Cart</h1>
      </div>

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
                    <p className="clear" onClick={() => clearCart()}>
                      Clear cart
                    </p>
                    <p>{product.name}</p>
                    <p>{product.variaty}</p>
                    <p>{product.type}</p>
                    <p>${product.price}</p>
                    <span className="decrease" onClick={decrement}>
                      -
                    </span>
                    <span className="quantity-cart">{count}</span>
                    <span className="increase" onClick={increment}>
                      +
                    </span>
                    <p
                      className="remove-product"
                      onClick={() => removeProduct(product.id)}
                    >
                      X
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="price-container">
              <p className="total-price">Total price: ${totalPrice()}</p>
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
    </>
  );
};

export default CartContainer;
