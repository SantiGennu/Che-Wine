import React, { useState } from "react";
import "./Filter.css";
import { NavLink } from "react-router-dom";

const Filter = () => {
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <input
          value={search}
          onChange={searcher}
          type="text"
          className="search-input"
          placeholder="Search product name here.."
        />
        <button className="search">Search</button>
      </div>
      <div className="buttons">
        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/"
        >
          All
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/type/red wine"
        >
          Red Wine
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/type/white wine"
        >
          White Wine
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/type/Rosé"
        >
          Rosé
        </NavLink>
      </div>
    </>
  );
};

export default Filter;
