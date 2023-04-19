import { CartContext, useCartContext } from "../../Context/CartProvider";
import "./CartContainer.css";
import { CgRemove } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import { MdClear } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import swal from "sweetalert";

import { Link } from "react-router-dom";

const CartContainer = () => {
  const { removeProduct, clearCart, cart, setCart, totalPrice } =
    useCartContext(CartContext);

  const increase = (newProduct) => {
    const isInCart = cart.find((prod) => prod.id === newProduct.id);
    setCart(
      cart.map((prod) =>
        prod.id === newProduct.id
          ? { ...prod, quantity: isInCart.quantity + 1 }
          : prod
      )
    );
  };

  const decrease = (newProduct) => {
    const isInCart = cart.find((prod) => prod.id === newProduct.id);
    setCart(
      cart.map((prod) =>
        prod.id === newProduct.id
          ? { ...prod, quantity: isInCart.quantity - 1 }
          : prod
      )
    );
  };

  const handleBuy = () => {
    swal({
      title: "Good job!",
      text: "Thanks for trusting us!",
      icon: "success",
    });
  };

  return (
    <>
      <div className="cart-container-title">
        <h1> Shopping Cart</h1>
      </div>

      {cart.length > 0 ? (
        <div className="cart-container">
          <div>
            {cart.map((product) => (
              <div key={product.id}>
                <div className="products-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="image"
                  />
                  <p>{product.name}</p>
                  <p>{product.variaty}</p>
                  <p>{product.type}</p>
                  <p>${product.price}</p>
                  <button
                    className="decrease"
                    onClick={() => decrease(product)}
                    disabled={product.quantity === 1 ? true : false}
                  >
                    <CgRemove size={"2.2rem"} />
                  </button>
                  <span className="quantity-cart">{product.quantity}</span>
                  <button
                    className="increase"
                    onClick={() => increase(product)}
                    disabled={product.quantity === product.stock ? true : false}
                  >
                    <CgAdd size={"2.2rem"} />
                  </button>
                  <span className="Buy" onClick={handleBuy}>
                    <button className="btn-buy">
                      <FaShoppingBag className="buy" size={"2rem"} />
                    </button>
                  </span>
                  <span
                    className="remove-product"
                    onClick={() => removeProduct(product.id)}
                  >
                    <button className="btn-remove">
                      <MdClear className="remove" size={"2.2rem"} />
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="container-clear-price">
            <button className="clear" onClick={() => clearCart()}>
              Clear cart
            </button>

            <div className="price-container">
              <p className="total-price">
                Total price: <br /> ${totalPrice()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-empty-cart">
          <div className="container-empty">
            <p className="empty">Your cart is empty </p>
            <Link to="/">
              <button className="btn btn-shopping">Go shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
