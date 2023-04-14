import { useEffect, useState } from "react";
import { getProduct } from "../../Api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { detailId } = useParams();

  useEffect(() => {
    getProduct(detailId)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    product && (
      <div className="detail-container">
        <ItemDetail product={product} />
      </div>
    )
  );
};

export default ItemDetailContainer;
