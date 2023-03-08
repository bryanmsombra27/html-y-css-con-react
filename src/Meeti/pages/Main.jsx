import Categorias from "../components/categorias";
import Eventos from "../components/eventos";
import Footer from "../components/footer";
import Formulario from "../components/formulario";
import Grupos from "../components/grupos";
import Header from "../components/header";

const Main = () => {
  return (
    <>
      <Header />
      <Formulario />
      <Eventos />
      <Categorias />
      <Grupos />
      <Footer />
    </>
  );
};

export default Main;
