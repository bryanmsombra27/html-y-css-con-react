import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contenido footer__contenedor">
        <nav className="footer__nav">
          <Link to="/" className="footer__enlace">
            Inicio
          </Link>
          <Link to="/nosotros" className="footer__enlace">
            Nostros
          </Link>
          <Link to="/blog" className="footer__enlace">
            Blog
          </Link>
          <Link to="/tienda" className="footer__enlace">
            Tienda
          </Link>
        </nav>
        <p className="footer__copyright">Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
