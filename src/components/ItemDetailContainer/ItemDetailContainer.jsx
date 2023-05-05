import { useEffect, useState } from "react";
import { getProduct } from "../../Api";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router";
import { Loading } from "../Loading/Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getProduct(detailId)
  //     .then((res) => setProduct(res))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detailId);
    getDoc(queryDoc)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detailId]);

  return (
    <div className="detail-container">
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
