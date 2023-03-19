import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Contacto from "./pages/contacto";
import Entrada from "./pages/entrada";
import Galeria from "./pages/galeria";

import Main from "./pages/main";
import Nosotros from "./pages/nosotros";
import Tienda from "./pages/tienda";

import "./scss/ecommerce.scss";

const Ecommerce = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/entrada" element={<Entrada />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Ecommerce;
