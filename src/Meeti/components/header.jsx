import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header contenedor">
        <div className="header__logo">
          <Link to="/">
            <img
              src="/img-meeti/logo.png"
              alt="logo"
              className="header__imagen"
            />
          </Link>
        </div>

        <nav className="navegacion">
          <a href="" className="navegacion__enlace navegacion__enlace--crear">
            crear grupo
          </a>
          <a href="" className="navegacion__enlace">
            iniciar sesion
          </a>
          <a href="" className="navegacion__enlace">
            registrarse
          </a>
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero__texto">
          Encuentra o crea grupo para compartir lo que mas te gusta
        </h1>
        <a href="" className="hero__enlace">
          Obtener una cuenta
        </a>
      </section>
    </>
  );
};

export default Header;
