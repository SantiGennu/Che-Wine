import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/Navbar/NavBar";
import Slider from "./components/Carousel/Slider";
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
          <Route path="/type/:typeId" element={<Home />} />
          <Route path="/type/:typeId" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
