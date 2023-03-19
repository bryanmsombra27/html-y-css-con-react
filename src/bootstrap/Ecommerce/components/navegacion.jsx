import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-top py-4">
        <div className="navbar navbar-expand-lg container navbar-light">
          <Link
            to="/"
            className="navbar-brand d-lg-none fs-2 fw-bold text-uppercase text-primary"
          >
            Tienda muebles
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navegacion"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navegacion" className="collapse navbar-collapse">
            <nav className="navbar-nav container text-center d-flex   flex-md-row  justify-content-md-between">
              <Link to="/" className="text-dark text-decoration-none">
                Inicio
              </Link>
              <Link to="/nosotros" className="text-dark text-decoration-none">
                Nosotros
              </Link>
              <Link to="/tienda" className="text-dark text-decoration-none">
                Tienda
              </Link>
              <Link to="/blog" className="text-dark text-decoration-none">
                Blog
              </Link>
              <Link to="/galeria" className="text-dark text-decoration-none">
                Galeria
              </Link>
              <Link to="/contacto" className="text-dark text-decoration-none">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
