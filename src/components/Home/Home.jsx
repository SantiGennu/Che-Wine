import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Searcher } from "../Searcher/Searcher";
import Filter from "../filter/Filter";

import "./Home.css";

const Home = () => {
  return (
    <>
      <hr className="divider" />
      <Searcher />
      <Filter />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
    </>
  );
};
export default Home;
