import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { getProduct } from "../../Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Filter from "../filter/Filter";
import { Searcher } from "../Searcher/Searcher";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { typeId } = useParams();

  useEffect(() => {
    getProduct()
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
  }, []);

  const productFiltered = products.filter((product) => {
    if (typeId) {
      return product.type === typeId;
    } else if (search) {
      return product.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return products;
    }
  });

  const HandleSearch = (e) => {
    setSearch(e.target.value); //funciona de puente ente itemListContainer y Searcher
  };

  return (
    <>
      <h3 className="greetings"> {greetings}</h3>
      <div>
        <Searcher HandleSearch={HandleSearch} />
        <Filter />
        <ItemList products={productFiltered} />
      </div>
    </>
  );
};

export default ItemListContainer;
