const Nosotros = () => {
  return (
    <>
      <section className="nosotros contenedor">
        <h2 className="nosotros__heading">¿Por que estudiar con nostros ?</h2>

        <div className="nosotros__grid">
          <div className="nosotros__bloque">
            <img
              src="/img-escuela-cocina/icono_chef.png"
              alt="icono chef"
              className="nosotros__imagen"
            />

            <h3 className="nosotros__bloque-heading">Chef's especialistas</h3>
            <p className="nostros__bloque-texto">
              Los mejores chef's han trabajado en los mejores restaurantes de
              Europa.
            </p>
          </div>
          <div className="nosotros__bloque">
            <img
              src="/img-escuela-cocina/icono_vino.png"
              alt="icono vino"
              className="nosotros__imagen"
            />

            <h3 className="nosotros__bloque-heading">
              Incluye todo sobre bebidas
            </h3>
            <p className="nostros__bloque-texto">
              Ademas de la cocina, incluimos en el programa todo lo relacionado
              a bebidas.
            </p>
          </div>
          <div className="nosotros__bloque">
            <img
              src="/img-escuela-cocina/icono_menu.png"
              alt="icono menu"
              className="nosotros__imagen"
            />

            <h3 className="nosotros__bloque-heading">Siempre actualizado</h3>
            <p className="nostros__bloque-texto">
              El programa se actualiza constantemente con nuevos platillos y
              tecnicas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
