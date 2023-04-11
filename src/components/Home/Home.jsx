import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Filter from "../Filter/Filter";

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
