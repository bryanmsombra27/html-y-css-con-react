const Plans = () => {
  return (
    <section className="planes seccion">
      <div className="contenedor">
        <h2>Planes</h2>
        <p className="descripcion">
          Inicia gratis, crece tu plan cuando sea necesario
        </p>

        <div className="nuestros-planes">
          <div className="plan inicio">
            <h3>Inicio</h3>
            <p className="precio">$2.99 mes</p>

            <ul className="listado">
              <li>30 episodios</li>
              <li>estadisticas</li>
              <li>app para grabar</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>

          <div className="plan negocio">
            <h3>Negocio</h3>
            <p className="precio">$6.99 mes</p>

            <ul className="listado">
              <li> episodios ilimitados</li>
              <li>estadisticas</li>
              <li>app para grabar</li>
              <li>Todas las plataformas</li>
              <li>podcast pagados</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>

          <div className="plan pro">
            <h3>Pro</h3>
            <p className="precio">$4.99 mes</p>

            <ul className="listado">
              <li> 50 episodios</li>
              <li>Todas las plataformas</li>
              <li>estadisticas</li>
              <li>app para grabar</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
