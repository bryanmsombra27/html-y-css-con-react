import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Ecommerce from "./bootstrap/Ecommerce/Ecommerce";
// import Blog from "./bootstrap/Ecommerce/pages/blog";
// import Contacto from "./bootstrap/Ecommerce/pages/contacto";
// import Entrada from "./bootstrap/Ecommerce/pages/entrada";
// import Galeria from "./bootstrap/Ecommerce/pages/galeria";
// import Main from "./bootstrap/Ecommerce/pages/main";
// import Nosotros from "./bootstrap/Ecommerce/pages/nosotros";
// import Tienda from "./bootstrap/Ecommerce/pages/tienda";
// import Meeti from "./bootstrap/Meeti/Meeti";
// import "./App.css";

//COMPONENTS
// import GlassMorphimsButton from "./components/buttons/GlassMorphismButton";
// import MainMenu from "./main-menu/menu";
// import PodcastFM from "./bootstrap/PodcastFM/Podcast";
import UdemyApp from "./bootstrap/Udemy/Udemy";

function App() {
  return (
    <>
      {/* <Ecommerce /> */}
      {/* <Meeti /> */}
      {/* <BrowserRouter>
        <MainMenu />
        <Routes>
          ECOMMERCE
          <Route path="/" element={<Ecommerce />}>
            <Route path="/" element={<Main />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/entrada" element={<Entrada />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>

          MEETI 
          <Route path="/Meeti" element={<Meeti />} />
          PODCAST FM
          <Route path="/Podcast" element={<PodcastFM />} />
        </Routes>
      </BrowserRouter> */}
      {/* <PodcastFM /> */}
      <UdemyApp />
    </>
  );
}

export default App;
