import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { getProducts } from "../../Api";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
    // .finally(() => console.log("error"))
  }, []);

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
