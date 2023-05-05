import { CartContext, useCartContext } from "../../Context/CartProvider";
import "./CartContainer.css";
import { useState } from "react";
import { CgRemove } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import { MdClear } from "react-icons/md";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
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
  const handleBuy = (e) => {
    e.preventDefault();
    const order = {
      buyer: user,
      items: cart.map(({ id, name, price }) => ({ id, name, price })),
      total: totalPrice(),
    };

    //Add orders
    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then(({ id }) => console.log({ id }))
      .catch((resp) => console.log(resp))
      .finally(clearCart());
    alert("The shopping has been made");
  };

  //update products
  // const db = getFirestore();
  // const queryDoc = doc(db, "products", "3VpYzpMSyH3ffX7rlpL5");
  // updateDoc(queryDoc, {
  //   stock: 17, //de esta forma actualizo la cantidad de stock del producto
  // });

  return (
    <>
      <div className="cart-container-title">
        <h1> Shopping Cart</h1>
      </div>
      {cart.length > 0 ? (
        <>
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
                      disabled={
                        product.quantity === product.stock ? true : false
                      }
                    >
                      <CgAdd size={"2.2rem"} />
                    </button>

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
          <form className="form-cart">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Santiago"
              required
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            ></input>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Gennuso"
              required
              value={user.surname}
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
            ></input>
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="45324567"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="santiagogennuso@email.com"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <label>Repeat Email</label>
            <input
              type="text"
              name="email"
              placeholder="santiagogennuso@email.com"
              required
              value={user.repeat}
              onChange={(e) => setUser({ ...user, repeat: e.target.value })}
            ></input>
            <button onClick={handleBuy}> Proceed to checkout</button>
          </form>
        </>
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
