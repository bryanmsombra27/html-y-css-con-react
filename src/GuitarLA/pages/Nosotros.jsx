import Footer from "../components/footer";
import Header from "../components/header";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="nosotros nosotros__contenedor">
        <h2 className="nosotros__heading">Nosotros</h2>

        <div className="nosotros__grid">
          <img
            src="/img-guitar-la/nosotros.jpg"
            alt="nosotros"
            className="nosotros__imagen"
          />

          <div className="nosotros__contenido">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              omnis dolore aliquid, autem esse voluptatem quisquam placeat ex
              molestias assumenda non minus nihil, odio consequuntur fugiat eius
              nisi temporibus necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              omnis dolore aliquid, autem esse voluptatem quisquam placeat ex
              molestias assumenda non minus nihil, odio consequuntur fugiat eius
              nisi temporibus necessitatibus.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Nosotros;
