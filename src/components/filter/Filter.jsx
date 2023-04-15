import "./Filter.css";
import { NavLink } from "react-router-dom";

const Filter = () => {
  return (
    <>
      <div className="search-container">
        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/"
        >
          All
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/type/Red wine"
        >
          Red Wine
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "value" : "value2")}
          to="/type/White wine"
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
