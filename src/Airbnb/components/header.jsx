const Header = () => {
  return (
    <>
      <header className="header">
        <div className="barra contenedor">
          <div className="barra__logo">
            <p className="barra__nombre">Viaje</p>
          </div>

          <nav className="barra__navegacion">
            <a href="" className="barra__link">
              Lugares para hospedarte
            </a>
            <a href="" className="barra__link">
              Experiencias
            </a>
            <a href="" className="barra__link">
              Experiencias en linea
            </a>
          </nav>

          <nav className="barra__login">
            <a href="#" className="barra__link">
              Hazte anfitrion
            </a>
          </nav>
        </div>

        <form action="#" className="formulario contenedor">
          <div className="formulario__campo">
            <label htmlFor="ubicacion" className="formulario__label">
              Ubicacion
            </label>
            <input
              type="text"
              className="formulario__input"
              id="ubicacion"
              placeholder="a donde viajas"
            />
          </div>
          <div className="formulario__campo">
            <label htmlFor="llegada" className="formulario__label">
              Llegada
            </label>
            <input type="date" className="formulario__input" id="llegada" />
          </div>
          <div className="formulario__campo">
            <label htmlFor="salida" className="formulario__label">
              Salida
            </label>
            <input type="date" className="formulario__input" id="salida" />
          </div>
          <div className="formulario__campo">
            <label htmlFor="huespedes" className="formulario__label">
              Huespedes
            </label>
            <input
              type="number"
              className="formulario__input"
              id="huespedes"
              placeholder="cuantos"
            />
          </div>
          <div className="formulario__campo">
            <input
              type="submit"
              className="formulario__submit"
              value="Buscar"
            />
          </div>
        </form>

        <div className="header__busqueda contenedor">
          <p className="header__busqueda-label">No sabes a donde ir ?</p>
          <a href="" className="header__busqueda-boton">
            Busqueda Flexible
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
