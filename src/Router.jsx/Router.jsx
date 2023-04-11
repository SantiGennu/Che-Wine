import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default Router;
