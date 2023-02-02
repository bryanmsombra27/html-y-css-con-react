const Form = () => {
  return (
    <>
      <section className="contenedor formulario">
        <div className="formulario__grid">
          <div className="formulario__contenido">
            <h2 className="formulario__heading">
              Encuentra y pide comida de tu restaurante favorito
            </h2>
            <form action="#" className="formulario__buscar">
              <div className="formulario__campo">
                <label htmlFor="" className="formulario__label">
                  Restaurant
                </label>
                <input
                  type="text"
                  className="formulario__input"
                  placeholder="Tacos Mexico"
                />
              </div>
              <div className="formulario__campo">
                <label htmlFor="" className="formulario__label">
                  Platillo
                </label>
                <input
                  type="text"
                  className="formulario__input"
                  placeholder="Tacos"
                />
              </div>
              <input
                type="button"
                value="Buscar..."
                className="formulario__submit"
              />
            </form>
          </div>
          <div className="formulario__imagen-contenedor">
            <img
              src="img/dibujo_repartidor.svg"
              className="formulario__imagen"
              alt="imagen repartidor"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
