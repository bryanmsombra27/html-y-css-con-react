const Header = () => {
  return (
    <>
      <header className="header contenedor">
        <div className="header__logo">
          <img src="/img/logo.svg" alt="logo delivery app" />
        </div>

        <nav className="navegacion">
          <a href="#" className="navegacion__link">
            Iniciar Sesion
          </a>
          <a href="#" className="navegacion__link">
            Crear Cuenta
          </a>
          <a href="#" className="navegacion__link navegacion__link--registrar">
            Registrar Restaurant
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
