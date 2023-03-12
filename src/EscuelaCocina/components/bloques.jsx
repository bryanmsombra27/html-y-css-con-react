const Bloques = () => {
  return (
    <section className="bloques">
      <div className="bloques__grid">
        <div className="bloque">
          <div className="bloque__contenido">
            <h2 className="bloque__heading">20 años de experiencia</h2>
            <p className="bloque__texto">
              Nos respaldan, siempre ofertando los mejores cursos para
              principiantes y expertos
            </p>
          </div>
        </div>
        <div className="bloque"></div>
        <div className="bloque">
          <div className="bloque__contenido">
            <h2 className="bloque__heading">Sobre Nosotros</h2>
            <p className="bloque__texto">
              Un grupo de expertos, integrado por chef's de los mejores
              restaurants de la ciudad
            </p>
          </div>
        </div>
        <div className="bloque"></div>
      </div>
    </section>
  );
};

export default Bloques;
