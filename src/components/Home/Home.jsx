import BestSellers from "../BestSellers/BestSellers";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <ItemListContainer greetings={"Welcome to Che Wine"} />
      <BestSellers />
    </>
  );
};
export default Home;
