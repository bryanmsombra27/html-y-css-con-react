import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Contacto from "./pages/contacto";
import Entrada from "./pages/entrada";
import Galeria from "./pages/galeria";

import Main from "./pages/main";
import Nosotros from "./pages/nosotros";
import Tienda from "./pages/tienda";

import "./scss/ecommerce.scss";

const Ecommerce = () => {
  useEffect(() => {
    document.querySelector("html").className = "ecommerce";
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Ecommerce;
