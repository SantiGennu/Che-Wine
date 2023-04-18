import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
// import { getProduct } from "../../Api";
import { useState, useContext } from "react";
import Filter from "../filter/Filter";
import { Searcher } from "../Searcher/Searcher";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { CartContext } from "../../Context/CartProvider";

const ItemListContainer = ({ greetings }) => {
  const { products, loading } = useContext(CartContext);
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { typeId } = useParams();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getProduct()
  //     .then((resp) => setProducts(resp))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  const productFiltered = products.filter((product) => {
    if (typeId) {
      return product.type === typeId;
    } else if (search) {
      return product.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return [];
    }
  });

  const HandleSearch = (e) => {
    setSearch(e.target.value); //funciona de puente ente itemListContainer y Searcher
  };

  return (
    <>
      <h3 className="greetings"> {greetings}</h3>
      <div>
        {loading ? null : <Searcher HandleSearch={HandleSearch} />}
        {loading ? null : <Filter />}
        {loading ? <Loading /> : <ItemList products={productFiltered} />}
      </div>
    </>
  );
};

export default ItemListContainer;
