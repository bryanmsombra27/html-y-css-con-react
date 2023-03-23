const Footer = () => {
  return (
    <>
      <footer className="footer footer-meeti bg-dark mt-5 pt-4 pb-2 text-white">
        <div className="container">
          <div className="d-flex align-items-center border-bottom pb-4">
            <p className="m-0 me-2 fw-bold">Crea tu propio grupo de meeti </p>
            <a href="#" className="btn btn-dark border fw-bold">
              Primeros Pasos
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <p className="fs-5">Tu cuenta</p>
              <nav className="nav flex-column">
                <a href="#" className="nav-link">
                  Registrarse
                </a>
                <a href="#" className="nav-link">
                  Iniciar sesion
                </a>
                <a href="#" className="nav-link">
                  Ayuda
                </a>
              </nav>
            </div>
            <div className="col-md-4">
              <p className="fs-5">Descubrir</p>
              <nav className="nav flex-column">
                <a href="#" className="nav-link">
                  Grupos
                </a>
                <a href="#" className="nav-link">
                  Calendario
                </a>
                <a href="#" className="nav-link">
                  Temas
                </a>
                <a href="#" className="nav-link">
                  Ciudades
                </a>
                <a href="#" className="nav-link">
                  Eventos en linea
                </a>
                <a href="#" className="nav-link">
                  Guias locales
                </a>
              </nav>
            </div>
            <div className="col-md-4">
              <p className="fs-5">Meeti</p>
              <nav className="nav flex-column">
                <a href="#" className="nav-link">
                  Acerca de
                </a>
                <a href="#" className="nav-link">
                  Blog
                </a>
                <a href="#" className="nav-link">
                  Meeti Pro
                </a>
                <a href="#" className="nav-link">
                  Empleo
                </a>
                <a href="#" className="nav-link">
                  Aplicaciones
                </a>
              </nav>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row mt-5 align-items-center">
            <p className="meeti m-0 me-5">Meeti</p>
            <nav className="nav flex-column flex-md-row">
              <a href="#" className="nav-link me-4">
                Acerca de
              </a>
              <a href="#" className="nav-link me-4">
                Blog
              </a>
              <a href="#" className="nav-link me-4">
                Meeti Pro
              </a>
              <a href="#" className="nav-link me-4">
                Empleo
              </a>
              <a href="#" className="nav-link me-4">
                Aplicaciones
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
