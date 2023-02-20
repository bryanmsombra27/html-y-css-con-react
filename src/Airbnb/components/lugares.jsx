const Lugares = () => {
  return (
    <section className="lugares contenedor seccion">
      <h2 className="lugares__heading">Vive en cualquier lugar del mundo</h2>
      <div className="lugares__grid">
        <div className="lugar">
          <img
            src="/img-airbnb/vive_1.jpg"
            alt="lugar 1"
            className="lugar__imagen"
          />
          <p className="lugar__nombre">Escapadas al aire libre</p>
        </div>
        <div className="lugar">
          <img
            src="/img-airbnb/vive_2.jpg"
            alt="lugar 1"
            className="lugar__imagen"
          />
          <p className="lugar__nombre">Alojamientos unicos</p>
        </div>
        <div className="lugar">
          <img
            src="/img-airbnb/vive_3.jpg"
            alt="lugar 1"
            className="lugar__imagen"
          />
          <p className="lugar__nombre">Alojamientos enteros</p>
        </div>
        <div className="lugar">
          <img
            src="/img-airbnb/vive_4.jpg"
            alt="lugar 1"
            className="lugar__imagen"
          />
          <p className="lugar__nombre">Con tu mascota</p>
        </div>
      </div>
    </section>
  );
};

export default Lugares;
