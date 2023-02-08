const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contenedor footer-grid">
          <div className="footer-widget">
            <img src="/img-potcast-fm/logo.svg" className="logo" alt="logo" />
          </div>

          <div className="footer-widget">
            <h3>Soluciones </h3>

            <nav>
              <a href="">Soluciones</a>
              <a href="">Graficas</a>
              <a href="">Distribucion</a>
            </nav>
          </div>
          <div className="footer-widget">
            <h3>Soporte </h3>

            <nav>
              <a href="">Documentacion</a>
              <a href="">precios</a>
              <a href="">API</a>
            </nav>
          </div>
          <div className="footer-widget">
            <h3>Podcast FM </h3>

            <nav>
              <a href="">Nosotros</a>
              <a href="">blog</a>
              <a href="">clientes</a>
            </nav>
          </div>
        </div>

        <p className="copyright">Podcast FM - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Footer;
