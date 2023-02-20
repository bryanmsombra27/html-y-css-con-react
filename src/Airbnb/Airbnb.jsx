import Anfitrion from "./components/anfitrion";
import Destinos from "./components/destinos";
import Experiencias from "./components/experiencias";
import Footer from "./components/footer";
import Header from "./components/header";
import Lugares from "./components/lugares";

const Airbnb = () => {
  return (
    <>
      <Header />
      <Destinos />
      <Lugares />
      <Anfitrion />
      <Experiencias />
      <Footer />
    </>
  );
};

export default Airbnb;
