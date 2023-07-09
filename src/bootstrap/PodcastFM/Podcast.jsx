import Header from "./components/header";
import "./scss/podcast.scss";

const PodcastFM = () => {
  return (
    <>
      <Header />
      <CreatePodcast />
      <Benefits />
      <Stadisticts />
      <Plans />
      <Testimonials />
      <Footer />
    </>
  );
};

const CreatePodcast = () => {
  return (
    <>
      <section className="container-xl py-5 crea-podcast">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/img-potcast-fm/imagen_podcast.svg" alt="podcast" />
          </div>
          <div className="col-md-6">
            <h2>Crea tu podcast</h2>
            <p className="mt-3">
              Nosotros lo distribuimos a las plataformas mas populares como
              Google podcast,Spotify,Apple podcast y Youtube
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Benefits = () => {
  return (
    <>
      <section className="beneficios bg-primary py-5">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2>Llega a miles y gana dinero</h2>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur perferendis ex sequi distinctio, nemo neque
                consequuntur, mollitia, porro!upiditate esse velit dignissimos
                possimus deleniti sed nemo reprehenderit ipsa? In fugiat facilis
                ex?
              </p>
            </div>
            <div className="col-md-4 offset-md-1">
              <img
                src="/img-potcast-fm/podcast_cover.png"
                className="img-fluid imagen"
                alt="cover podcast"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const Stadisticts = () => {
  return (
    <>
      <div className="stadistics py-5">
        <div className="container-xl">
          <h2>Estadisticas detalladas</h2>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur a atque qui sint nisi quisquam, doloribus amet, dicta
            deleniti voluptates eius nobis mollitia eveniet nam facilis
            praesentium consequuntur debitis ullam.
          </p>
          <img
            src="/img-potcast-fm/grafica.svg"
            className="img-fluid mt-5"
            alt="stadistics"
          />
        </div>
      </div>
    </>
  );
};

const Plans = () => {
  return (
    <section className="planes bg-secondary py-5">
      <div className="container-xl">
        <h2>Planes</h2>
        <p className="text-white mt-4">
          Inicia gratis, Crece tu plan cuando sea necesario
        </p>
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-10 ">
            <div className="row">
              <div className="col-md-4 order-2  plan inicio bg-white ">
                <h3 className="text-center">Inicio</h3>
                <p className="text-center precio">$2.99 Mes</p>
                <ul className="list-unstyled">
                  <li className="text-center mb-2">30 episodios</li>
                  <li className="text-center mb-2">Estadisticas</li>
                  <li className="text-center mb-2">App para grabar</li>
                </ul>
                <a href="#" className="boton-plan btn">
                  Inscribirme
                </a>
              </div>
              <div className="col-md-4 order-1 order-md-2 plan negocio bg-primary">
                <h3 className="text-center">Negocio</h3>
                <p className="text-center precio">$6.99 Mes</p>
                <ul className="list-unstyled">
                  <li className="text-center mb-2">Episodios ilimitados</li>
                  <li className="text-center mb-2">Todas las plataformas</li>
                  <li className="text-center mb-2">Estadisticas</li>
                  <li className="text-center mb-2">App para grabar</li>
                  <li className="text-center mb-2">Podcast pagados</li>
                </ul>
                <a href="#" className="boton-plan btn">
                  Inscribirme
                </a>
              </div>
              <div className="col-md-4 order-3  plan pro bg-white ">
                <h3 className="text-center">Pro</h3>
                <p className="text-center precio">$4.99 Mes</p>
                <ul className="list-unstyled">
                  <li className="text-center mb-2"> 50 episodios</li>
                  <li className="text-center mb-2">Todas las plataformas</li>
                  <li className="text-center mb-2">Estadisticas</li>
                  <li className="text-center mb-2">App para grabar</li>
                </ul>
                <a href="#" className="boton-plan btn">
                  Inscribirme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="testimoniales py-5 container-xl">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src="/img-potcast-fm/app.jpg"
            alt="app"
            className="img-fluid w-75 d-block mx-auto"
          />
        </div>
        <div className="col-md-8">
          <h2>Testimoniales</h2>
          <div className="row mt-3">
            <div className="col-md-6 offset-md-2 mb-2">
              <div className="testimonial bg-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                ipsam amet, provident hic minima cumque deleniti cupiditate
                fugit assumenda deserunt illo rerum aliquid dolorum, similique,
                at rem iste tenetur voluptatum?
              </div>
            </div>
            <div className="col-md-6 offset-md-4 mb-2">
              <div className="testimonial bg-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                ipsam amet, provident hic minima cumque deleniti cupiditate
                fugit assumenda deserunt illo rerum aliquid dolorum, similique,
                at rem iste tenetur voluptatum?
              </div>
            </div>
            <div className="col-md-6 offset-md-6 mb-2">
              <div className="testimonial bg-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                ipsam amet, provident hic minima cumque deleniti cupiditate
                fugit assumenda deserunt illo rerum aliquid dolorum, similique,
                at rem iste tenetur voluptatum?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container container">
        <div className="footer__row row align-items-center">
          <div className="footer__widget col-md-3">
            <img
              src="/img-potcast-fm/logo.svg"
              alt="logo"
              className="footer__logo img-fluid p-5"
            />
          </div>
          <div className="footer__widget col-md-3">
            <h3 className="footer__heading">Soluciones</h3>

            <nav className="footer__nav">
              <a href="#" className="footer__link">
                Soluciones
              </a>
              <a href="#" className="footer__link">
                Graficas{" "}
              </a>
              <a href="#" className="footer__link">
                Distribucion
              </a>
            </nav>
          </div>
          <div className="footer__widget col-md-3">
            <h3 className="footer__heading">Soporte</h3>

            <nav className="footer__nav">
              <a href="#" className="footer__link">
                Documentacion
              </a>
              <a href="#" className="footer__link">
                Precios
              </a>
              <a href="#" className="footer__link">
                API
              </a>
            </nav>
          </div>
          <div className="footer__widget col-md-3">
            <h3 className="footer__heading">Podcast fm</h3>

            <nav className="footer__nav">
              <a href="#" className="footer__link">
                Nosotros
              </a>
              <a href="#" className="footer__link">
                Blog
              </a>
              <a href="#" className="footer__link">
                Clientes
              </a>
            </nav>
          </div>
        </div>
      </div>
      <p className="footer__copyright m-0 p-5 text-center">
        Todos los derechos reservados
      </p>
    </section>
  );
};

export default PodcastFM;
