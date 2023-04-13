import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Navbar/NavBar";
import Slider from "./components/Carousel/Slider";
import Contact from "./components/Contact/Contact";
import BestSellers from "./components/BestSellers/BestSellers";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Slider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/type/:typeId" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bestSellers" element={<BestSellers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
