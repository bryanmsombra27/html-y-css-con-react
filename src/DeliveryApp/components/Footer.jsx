const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__widget">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
            dolores expedita explicabo perspiciatis dignissimos labore magni,
            voluptates molestiae amet et voluptas commodi, consectetur
            voluptatum. Laudantium nisi id deserunt! Repellendus.
          </p>
        </div>
        <div className="footer__widget">
          <h3 className="footer__heading">Navegacion</h3>
          <nav className="footer__nav">
            <a href="#" className="footer__link">
              Enlace 1
            </a>
            <a href="#" className="footer__link">
              Enlace 2
            </a>
            <a href="#" className="footer__link">
              Enlace 3
            </a>
            <a href="#" className="footer__link">
              Enlace 4
            </a>
            <a href="#" className="footer__link">
              Enlace 5
            </a>
            <a href="#" className="footer__link">
              Enlace 6
            </a>
          </nav>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Contacto</h3>
          <p className="footer__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
            dolores expedita explicabo perspiciatis dignissimos labore magni,
            voluptates molestiae amet et voluptas commodi, consectetur
            voluptatum. Laudantium nisi id deserunt! Repellendus.
          </p>
        </div>
      </div>
      <p className="footer__copyright">
        App comida. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
