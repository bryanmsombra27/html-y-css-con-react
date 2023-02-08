const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="contenedor header-grid">
          <div className="logo">
            <img src="/img-potcast-fm/logo.svg" alt="podcast logo" />
          </div>
          <div className="contenido-header">
            <h1>Tu plataforma para publicar tus podcast</h1>
            <a href="#" className="boton-primario">
              Crear Cuenta
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
