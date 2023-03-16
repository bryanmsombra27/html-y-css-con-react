const Navbar = () => {
  return (
    <>
      <div className="border-top py-4">
        <div className="navbar navbar-expand-lg container navbar-light">
          <a
            href=""
            className="navbar-brand d-lg-none fs-2 fw-bold text-uppercase text-primary"
          >
            Tienda muebles
          </a>
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
              <a className="text-dark text-decoration-none" href="">
                Inicio
              </a>
              <a className="text-dark text-decoration-none" href="">
                Nosotros
              </a>
              <a className="text-dark text-decoration-none" href="">
                Tienda
              </a>
              <a className="text-dark text-decoration-none" href="">
                Blog
              </a>
              <a className="text-dark text-decoration-none" href="">
                Galeria
              </a>
              <a className="text-dark text-decoration-none" href="">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
