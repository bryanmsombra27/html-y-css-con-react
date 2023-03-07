const Header = () => {
  return (
    <>
      <header className="header contenedor">
        <div className="header__grid">
          <div className="header__logo">
            <img src="/img-carolina-spa/logo.svg" alt="logo" />
          </div>

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
      </header>

      <div className="navegacion">
        <div className="navegacion__border">
          <nav className="navegacion__contenedor">
            <a href="#" className="navegacion__enlace">
              Inicio
            </a>
            <a href="#" className="navegacion__enlace">
              Nosotros
            </a>
            <a href="#" className="navegacion__enlace">
              Servicios
            </a>
            <a href="#" className="navegacion__enlace">
              Producto
            </a>
            <a href="#" className="navegacion__enlace">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
