import Bloques from "./components/bloques";
import Cursos from "./components/cursos";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Nosotros from "./components/nosotros";
import "./scss/app.scss";

const EscuelaCocina = () => {
  return (
    <>
      <Header />
      <Bloques />
      <Nosotros />
      <Cursos />
      <Hero />
      <Footer />
    </>
  );
};

export default EscuelaCocina;
