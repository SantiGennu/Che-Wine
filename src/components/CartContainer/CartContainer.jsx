import { CartContext, useCartContext } from "../../Context/CartProvider";
import "./CartContainer.css";
import { CgRemove } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import { MdClear } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link, json } from "react-router-dom";
import { useEffect } from "react";

const CartContainer = () => {
  const { removeProduct, clearCart, cart, setCart, totalPrice } =
    useCartContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const handleBuy = (values) => {
    const { repeat, ...buyerInfo } = values; //elimino el campo repeat en firebase
    const order = {
      Buyer: buyerInfo,
      Items: cart.map(({ id, name, price }) => ({ id, name, price })),
      Total: totalPrice(),
    };
    console.log(order);
    //Add orders
    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then(({ id }) => console.log({ id }))
      .catch((resp) => console.log(resp))
      .finally(() => clearCart());
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
          <div className="container">
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                phone: "",
                email: "",
              }}
              validate={(values) => {
                let errors = {};

                if (!values.name) {
                  errors.name = "Field name is requiered";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                  errors.name = "field name accept just letters and spaces";
                }

                if (!values.surname) {
                  errors.surname = "Field surname is requiered";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)) {
                  errors.surname =
                    "Field surname accept just letters and spaces";
                }
                if (!values.phone) {
                  console.log(values.phone);
                  errors.phone = "Field phone is requiered";
                } else if (
                  !/^\+?\d{1,3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone)
                ) {
                  errors.phone = "Phone number incorrect";
                }

                if (!values.email) {
                  errors.email = "Field email is requiered";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errors.email = "Email is incorrect";
                }
                if (!values.repeat) {
                  errors.repeat = "Field repeat email is required";
                } else if (values.email !== values.repeat) {
                  errors.repeat = "Repeat email must match email";
                }

                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                handleBuy(values);
                console.log(values);
                console.log("enviado");
              }}
            >
              {({ errors }) => (
                <Form className="form-cart">
                  <div className="div-name">
                    <div className="label">
                      <label htmlFor="name">Name</label>
                    </div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Santiago"
                    />
                    <ErrorMessage
                      name="name"
                      component={() => (
                        <div className="error">{errors.name} </div>
                      )}
                    />
                  </div>
                  <div className="div-surname">
                    <div className="label">
                      <label htmlFor="surname">Surname</label>
                    </div>
                    <Field
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Gennuso"
                    />
                    <ErrorMessage
                      name="surname"
                      component={() => (
                        <div className="error">{errors.surname} </div>
                      )}
                    />
                  </div>

                  <div className="div-phone">
                    <div className="label">
                      <label htmlFor="phone">Phone number</label>
                    </div>
                    <Field type="number" id="phone" name="phone" />
                    <ErrorMessage
                      name="phone"
                      component={() => (
                        <div className="error">{errors.phone} </div>
                      )}
                    />
                  </div>

                  <div className="div-email">
                    <div className="label">
                      <label htmlFor="email">Email</label>
                    </div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="santiagogennuso@gmail.com"
                    />

                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="error">{errors.email} </div>
                      )}
                    />
                  </div>
                  <div className="div-repeat">
                    <div className="repeat">
                      <label htmlFor="repeat">Repeat Email</label>
                    </div>
                    <Field
                      type="email"
                      id="repeat"
                      name="repeat"
                      placeholder="santiagogennuso@gmail.com"
                    />

                    <ErrorMessage
                      name="repeat"
                      component={() => (
                        <div className="error">{errors.repeat} </div>
                      )}
                    />
                  </div>
                  <button type="submit" className="btn-form">
                    Proceed to checkout
                  </button>
                </Form>
              )}
            </Formik>
            ;
          </div>
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
