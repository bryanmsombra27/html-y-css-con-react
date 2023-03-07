const Cards = () => {
  return (
    <>
      <section className="cards">
        <div className="cards__grid contenedor">
          <div className="card">
            <img
              src="/img-carolina-spa/servicio_01.jpg"
              alt="imagen card 1 "
              className="card__imagen"
            />
            <div className="card__contenido">
              <h2 className="card__heading">
                Conoce sobre <span>nosotros</span>
              </h2>

              <a href="#" className="card__enlace">
                Leer mas
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="/img-carolina-spa/servicio_02.jpg"
              alt="imagen card 1 "
              className="card__imagen"
            />
            <div className="card__contenido">
              <h2 className="card__heading">
                nuestros <span>servicios</span>
              </h2>

              <a href="#" className="card__enlace">
                Leer mas
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="/img-carolina-spa/servicio_03.jpg"
              alt="imagen card 1 "
              className="card__imagen"
            />
            <div className="card__contenido">
              <h2 className="card__heading">
                Visita nuestra <span>tienda</span>
              </h2>

              <a href="#" className="card__enlace">
                Leer mas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
