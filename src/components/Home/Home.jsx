import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Filter from "../filter/filter";

import "./Home.css";

const Home = () => {
  return (
    <>
      <hr className="divider" />
      <Filter />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
    </>
  );
};
export default Home;
