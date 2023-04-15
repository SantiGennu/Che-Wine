import BestSellers from "../BestSellers/BestSellers";
import HandleFilter from "../HandleFilter/HandleFilter";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
// import { Searcher } from "../Searcher/Searcher";
// import Filter from "../filter/Filter";

import "./Home.css";

const Home = () => {
  return (
    <>
      <HandleFilter />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
      {/* <Searcher /> */}
      {/* <Filter /> */}

      <BestSellers />
    </>
  );
};
export default Home;
