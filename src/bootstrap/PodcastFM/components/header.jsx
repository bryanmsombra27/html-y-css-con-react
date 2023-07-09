const Header = () => {
  return (
    <>
      <header className="site-header py-5">
        <div className="container-xl">
          <div className="logo">
            <img src="/img-potcast-fm/logo.svg" alt="logo" />
          </div>
          <div className="contenido">
            <h1 className="text-center text-md-start">
              Tu plataforma para publicar tus podcast
            </h1>
            <a href="#" className="btn btn-header">
              Crear cuenta
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
