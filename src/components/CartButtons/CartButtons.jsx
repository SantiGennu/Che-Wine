import "./CartButtons.css";
import { Link } from "react-router-dom";

export const CartButtons = () => {
  return (
    <div className="shopping">
      <Link className="btn btn-primary goToCart" to="/cart">
        Go to cart
      </Link>
      <Link className="btn btn-primary continue" to="/">
        Continue shopping
      </Link>
    </div>
  );
};
