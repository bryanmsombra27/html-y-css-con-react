const Steps = () => {
  return (
    <section className="pasos">
      <img src="/img/wave.svg" alt="wave" className="pasos__wave" />

      <div className="pasos__contenido">
        <h2 className="pasos__heading">
          como funciona?{" "}
          <span className="pasos__heading--descripcion">
            tan facil como 1,2,3
          </span>
        </h2>
        <div className="pasos__grid contenedor">
          <div className="pasos__paso">
            <img
              src="/img/paso_1.png"
              alt="paso 1 "
              className="pasos__imagen"
            />
          </div>
          <div className="pasos__paso">
            <img
              src="/img/paso_2.png"
              alt="paso 2 "
              className="pasos__imagen"
            />
          </div>
          <div className="pasos__paso">
            <img
              src="/img/paso_3.png"
              alt="paso 3 "
              className="pasos__imagen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
