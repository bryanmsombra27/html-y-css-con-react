import Cards from "./components/cards";
import Cita from "./components/cita";
import Footer from "./components/footer";
import Header from "./components/header";
import Horarios from "./components/horarios";
import Productos from "./components/productos";
import Slider from "./components/slider";
import "./scss/app.scss";

const CarolinaSpa = () => {
  return (
    <>
      <Header />
      <Slider />
      <Cards />
      <Horarios />
      <Productos />
      <Cita />
      <Footer />
    </>
  );
};

export default CarolinaSpa;
