import React, { useState } from "react";
import "./Searcher.css";

export const Searcher = () => {
  const [search, setSearch] = useState("");

  const HandleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="search-container">
        <input
          value={search}
          onChange={HandleSearch}
          type="text"
          className="search-input"
          placeholder="Search product name here.."
        />
        <button className="search">Search</button>
      </div>
    </>
  );
};
