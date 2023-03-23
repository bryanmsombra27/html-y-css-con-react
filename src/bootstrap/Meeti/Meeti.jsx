import { useEffect } from "react";
import Apps from "./components/apps";
import Footer from "./components/footer";
import Funcionamiento from "./components/funcionamiento";
import Header from "./components/header";
import "./scss/meeti.scss";

const Meeti = () => {
  useEffect(() => {
    document.querySelector("html").className = "meeti";
  }, []);

  return (
    <>
      <Header />
      <Funcionamiento />
      <Apps />
      <Footer />
    </>
  );
};

export default Meeti;
