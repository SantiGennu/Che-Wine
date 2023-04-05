import Slider from "../Carousel/Slider";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../Navbar/NavBar";

import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <hr className="divider" />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
      <ItemDetailContainer />
    </>
  );
};
export default Home;
