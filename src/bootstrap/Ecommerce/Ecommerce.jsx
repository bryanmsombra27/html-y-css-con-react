import Categorias from "./components/categorias";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Productos from "./components/productos";

import "./scss/ecommerce.scss";

const Ecommerce = () => {
  return (
    <>
      <Header />
      <Hero />
      <Productos />
      <Categorias />
      <Footer />
    </>
  );
};

export default Ecommerce;
