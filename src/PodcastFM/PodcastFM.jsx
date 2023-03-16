import Benefits from "./components/Benefits";
import CrearPodcast from "./components/Crearpodcast";
import Estadistics from "./components/Estadistics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import "./scss/app.scss";
const PodcastFM = () => {
  return (
    <>
      <Header />
      <CrearPodcast />
      <Benefits />
      <Estadistics />
      <Plans />
      <Testimonials />
      <Footer />
    </>
  );
};

export default PodcastFM;
