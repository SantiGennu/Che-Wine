import ItemListContainer from "../ItemListContainer/ItemListContainer";

import "./Home.css";

const Home = () => {
  return (
    <>
      <hr className="divider" />
      <ItemListContainer greetings={"Welcome to Che Wine"} />
      {/* <ItemDetailContainer /> */}
    </>
  );
};
export default Home;
