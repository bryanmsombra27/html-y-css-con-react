const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__box">
          <h3 className="footer__heading">Navegacion</h3>
          <div className="footer__navegacion">
            <a href="#" className="footer__link">
              Nosotros
            </a>
            <a href="#" className="footer__link">
              propiedades
            </a>
            <a href="#" className="footer__link">
              Logs
            </a>
            <a href="#" className="footer__link">
              Testimoniales
            </a>
            <a href="#" className="footer__link">
              Contacto
            </a>
          </div>
        </div>
        <div className="footer__box">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__texto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            corrupti minima ratione error. Pariatur tempora veritatis, ab
            consequuntur incidunt sapiente voluptatum necessitatibus laudantium
            ipsa recusandae dicta hic beatae autem quidem?
          </p>
        </div>
        <div className="footer__box">
          <img
            src="/img-real-state/logo.svg"
            alt="logo"
            className="footer__imagen"
          />
        </div>
      </div>
      <p className="footer__copyright">
        Todos los derechos reservados realState
      </p>
    </footer>
  );
};

export default Footer;
