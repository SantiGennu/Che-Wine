import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { getProduct } from "../../Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const { typeId } = useParams();

  useEffect(() => {
    if (typeId) {
      getProduct()
        .then((resp) => setProducts(resp.filter((prod) => prod.type == typeId)))
        .catch((err) => console.log(err));
    } else {
      getProduct()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err));
    }
    // .finally(() => console.log("error"))
  }, [typeId]);

  return (
    <>
      <h3 className="greetings"> {greetings}</h3>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
