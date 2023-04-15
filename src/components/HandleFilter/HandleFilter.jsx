import React, { useEffect, useState } from "react";
import { getProduct } from "../../Api";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { Searcher } from "../Searcher/Searcher";
import Filter from "../filter/Filter";

const HandleFilter = () => {
  const { typeId } = useParams();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const HandleSearch = (e) => {
    setSearch(e.target.value); //puente que permite enviar y recibir la info desde searcher a handleFliter
  };

  const productFiltered = products.filter((product) => {
    if (typeId) {
      return product.type === typeId;
    } else if (search) {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
  });
  //Envio por prop mi funcion hanldeSearch a Searcher y los productos las condiciones al itemList
  return (
    <div>
      <Searcher HandleSearch={HandleSearch} />
      <Filter />
      <ItemList products={productFiltered} />
    </div>
  );
};

export default HandleFilter;
