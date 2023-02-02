import Delivers from "./components/Delivers";
import Download from "./components/Download";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";

const DeliveryApp = () => {
  return (
    <>
      <Header />
      <Form />
      <Steps />
      <Testimonials />
      <Favorites />
      <Delivers />
      <Download />
      <Footer />
    </>
  );
};

export default DeliveryApp;
