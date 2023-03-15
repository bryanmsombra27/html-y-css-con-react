import { Link } from "react-router-dom";

const Header = ({ isMain = false }) => {
  return (
    <header className="header">
      <div className="header__contenedor">
        <div className="header__barra">
          <Link to="/" className="header__enlace">
            <img
              src="/img-guitar-la/logo.svg"
              alt="logo"
              className="header__logo"
            />
          </Link>

          <nav className="navegacion">
            <Link to="/" className="navegacion__enlace">
              Inicio
            </Link>
            <Link to="/nosotros" className="navegacion__enlace">
              Nosotros
            </Link>
            <Link to="/blog" className="navegacion__enlace">
              Blog
            </Link>
            <Link to="/tienda" className="navegacion__enlace">
              Tienda
            </Link>
          </nav>
        </div>

        {isMain && (
          <div className="modelo">
            <h1 className="modelo__nombre">Modelo VAI</h1>
            <p className="modelo__descripcion">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              debitis porro natus quidem, id nobis sed ipsum ipsa! Ex modi
              maiores neque eos magni magnam mollitia quae perspiciatis deleniti
              maxime.
            </p>

            <p className="modelo__precio">$399</p>

            <Link to="/producto/4" className="modelo__enlace">
              Ver producto
            </Link>
          </div>
        )}
      </div>
      {isMain && (
        <img
          src="/img-guitar-la/header_guitarra.png"
          alt="header guitarra"
          className="header__guitarra"
        />
      )}
    </header>
  );
};

export default Header;
