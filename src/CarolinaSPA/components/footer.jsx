const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__widget">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__texto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sit
            cum cupiditate minima recusandae fugit deleniti vero. Pariatur a,
            numquam inventore sunt asperiores laudantium reprehenderit voluptate
            laboriosam officiis optio corporis.
          </p>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Horario</h3>
          <p className="footer__texto">Lun-Vie: 9AM - 7PM</p>
          <p className="footer__texto">Sabado: 9AM - 2PM</p>
          <p className="footer__texto">Domingo: cerrado</p>
        </div>
        <div className="footer__widget">
          <h3 className="footer__heading">Contacto</h3>
          <p className="footer__texto">Av. Revolucion 1818</p>

          <nav className="sociales">
            <a href="https://facebook.com" className="sociales__enlace">
              <span className="sociales__accesible">Facebook</span>
            </a>
            <a href="https://twitter.com" className="sociales__enlace">
              <span className="sociales__accesible">Twitter</span>
            </a>
            <a href="https://instagram.com" className="sociales__enlace">
              <span className="sociales__accesible">Instagram</span>
            </a>
            <a href="https://youtube.com" className="sociales__enlace">
              <span className="sociales__accesible">Youtube</span>
            </a>
            <a href="https://tiktok.com" className="sociales__enlace">
              <span className="sociales__accesible">Tiktok</span>
            </a>
          </nav>
        </div>
      </div>
      <p className="footer__copyright">
        Carolina Spa & salon. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
