import { useEffect } from "react";
import Destacadas from "./components/destacadas";
import Footer from "./components/footer";
import Header from "./components/header";
import Propiedades from "./components/propiedades";
import Testimoniales from "./components/testimoniales";
import "./scss/app.scss";

const Realstate = () => {
  useEffect(() => {
    imageScrollEfect();
  }, []);

  const imageScrollEfect = () => {
    const imagenes = document.querySelectorAll(".propiedad__imagen");

    window.addEventListener("scroll", () => {
      imagenes.forEach((imagen) => {
        const scrollY = window.scrollY / -20;
        imagen.style.backgroundPositionY = `${scrollY}px`;
      });
    });
  };

  return (
    <>
      <Header />
      <Propiedades />
      <Destacadas />
      <Testimoniales />
      <Footer />
    </>
  );
};

export default Realstate;
