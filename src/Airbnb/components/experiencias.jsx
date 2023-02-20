const Experiencias = () => {
  return (
    <>
      <main className="experiencias contenedor seccion">
        <h2 className="experiencias__heading">Descubre experiencias</h2>
        <p className="experiencias__descripcion">
          Actividades unicas con expertos locales, en persona o en linea
        </p>

        <div className="experiencias__listado">
          <div className="experiencia">
            <img
              src="/img-airbnb/experiencia_1.jpg"
              alt=""
              className="experiencia__imagen"
            />

            <p className="experiencia__titulo">Experiencias</p>
            <p className="experiencia__descripcion">
              Actividades locales estes donde estes
            </p>
          </div>
          <div className="experiencia">
            <img
              src="/img-airbnb/experiencia_2.jpg"
              alt=""
              className="experiencia__imagen"
            />

            <p className="experiencia__titulo">Experiencias</p>
            <p className="experiencia__descripcion">
              Visita una ciudad y vive en ella
            </p>
          </div>
          <div className="experiencia">
            <img
              src="/img-airbnb/experiencia_3.jpg"
              alt=""
              className="experiencia__imagen"
            />

            <p className="experiencia__titulo">Experiencias en linea</p>
            <p className="experiencia__descripcion">
              Actividades interactivas en vivo
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experiencias;
