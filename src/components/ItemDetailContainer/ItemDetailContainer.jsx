import React, { useEffect, useState } from "react";
import { getProduct } from "../../Api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct()
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
