import React, { useContext } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import { CartContext } from "../../Context/CartProvider";

export const Loading = () => {
  const { loading } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-center">
      <RotateLoader
        color={"#0359ba"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
