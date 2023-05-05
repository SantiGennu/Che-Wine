import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Navbar/NavBar";
import Slider from "./components/Carousel/Slider";
import Contact from "./components/Contact/Contact";
import BestSellers from "./components/BestSellers/BestSellers";
import CartProvider from "./Context/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import Footer from "./components/Footer/Footer";

// analytics();

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Slider />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/type/:typeId" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bestSellers" element={<BestSellers />} />
            <Route path="/cartContainer" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
