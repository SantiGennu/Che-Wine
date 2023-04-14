import BestSellers from "../BestSellers/BestSellers";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Searcher } from "../Searcher/Searcher";
import Filter from "../filter/Filter";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Searcher />
      <Filter />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
      <BestSellers />
    </>
  );
};
export default Home;
