import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import BlogPage from "./pages/Blog";
import Entrada from "./pages/Entrada";
import Main from "./pages/main";
import Nosotros from "./pages/Nosotros";
import Producto from "./pages/Producto";
import Tienda from "./pages/Tienda";

const GuitarLA = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/entrada" element={<Entrada />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/producto/:id" element={<Producto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default GuitarLA;
