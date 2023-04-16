import { useState } from "react";
import "./Searcher.css";

export const Searcher = ({ HandleSearch }) => {
  //recibe por param la funcion y la devuelve con el valor actualizado de la busqueda
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    HandleSearch(e); // envía el valor actualizado a ItemListContainer
  };

  return (
    <>
      <div className="search-container">
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Search product name here.."
        />
        <button className="search">Search</button>
      </div>
    </>
  );
};
