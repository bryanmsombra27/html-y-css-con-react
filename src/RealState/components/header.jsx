const Header = () => {
  return (
    <header className="header">
      <div className="header__barra contenedor">
        <div className="header__logo">
          <img src="/img-real-state/logo.svg" alt="real state" />
        </div>
        <div className="navegacion">
          <a href="#" className="navegacion__link">
            Nosotros
          </a>
          <a href="#" className="navegacion__link">
            propiedades
          </a>
          <a href="#" className="navegacion__link">
            Logs
          </a>
          <a href="#" className="navegacion__link">
            Testimoniales
          </a>
          <a href="#" className="navegacion__link">
            Contacto
          </a>
        </div>
      </div>

      <div className="contenedor">
        <div className="header__contenido">
          <h1 className="header__heading">
            Encuentra tu casa de lujo al mejor precio
          </h1>
          <p className="header__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            asperiores temporibus quaerat dolorum eolestias ipsa, quisquam neque
            illo ratione, necessitatibus asperiores adipisci accusantium.
          </p>

          <img
            src="/img-real-state/imagenHeader.jpg"
            className="header__imagen"
            alt="imagen header"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
