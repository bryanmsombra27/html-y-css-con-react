const Header = () => {
  return (
    <header className="header contenedor">
      <div className="header__grid">
        <div className="header__logo">
          <img
            src="/img-escuela-cocina/logo.svg"
            alt="logo"
            className="header__imagen"
          />
        </div>

        <nav className="navegacion">
          <a href="" className="navegacion__link">
            Nosotros
          </a>
          <a href="" className="navegacion__link">
            Blog
          </a>
          <a href="" className="navegacion__link">
            Clases
          </a>
          <a href="" className="navegacion__link">
            Galeria
          </a>
          <a href="" className="navegacion__link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
