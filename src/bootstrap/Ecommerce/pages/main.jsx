import Categorias from "../components/categorias";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Productos from "../components/productos";

const Main = () => {
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

export default Main;
