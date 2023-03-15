import Blog from "../components/blog";
import Cursos from "../components/cursos";
import Footer from "../components/footer";
import Header from "../components/header";
import Productos from "../components/productos";

const Main = () => {
  return (
    <>
      <Header isMain={true} />
      <Productos />
      <Cursos />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
