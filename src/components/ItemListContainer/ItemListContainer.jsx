import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
import Filter from "../filter/Filter";
import { Searcher } from "../Searcher/Searcher";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
// import { getProduct } from "../../Api";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { typeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");

    if (typeId) {
      const queryFilter = query(queryCollection, where("type", "==", typeId));
      getDocs(queryFilter)
        .then((res) =>
          setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((res) =>
          setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [typeId]);

  // useEffect(() => {
  //   if (search) {
  //     const filteredProducts = products.filter((product) => {
  //       return product.name.toLowerCase().includes(search?.toLowerCase());
  //     });
  //     setFiltered(filteredProducts);
  //     console.log(filteredProducts);
  //   } else {
  //     setFiltered(products);
  //   }
  // }, [search, products]);

  // const HandleSearch = (value) => {
  //   setSearch(value); //funciona de puente ente itemListContainer y Searcher
  // };

  const HandleSearch = (value) => {
    setSearch(value);

    if (value) {
      const filteredProducts = products.filter((product) => {
        return (
          product.name &&
          product.name.toLowerCase().includes(value.toLowerCase())
        );
      });
      setFiltered(filteredProducts);
    } else {
      setFiltered(products);
    }
  };
  return (
    <>
      <h3 className="greetings"> {greetings}</h3>
      <div>
        {loading ? null : (
          <Searcher HandleSearch={HandleSearch} search={search} />
        )}
        {loading ? null : <Filter />}
        {loading ? (
          <Loading />
        ) : (
          <ItemList products={search ? filtered : products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
