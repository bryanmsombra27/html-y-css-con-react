const Funcionamiento = () => {
  return (
    <>
      <section className="container-xl">
        <h2 className="fs-1 text-center meeti-title">Como funciona meeti</h2>
        <p className="text-center w-50 mx-auto">
          Conoce a personas en linea que compartan tus intereses a traves de
          eventos en linea y en persona. Crea una cuenta gratis.
        </p>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src="/img-meeti/imagen1.jpg"
              alt="imagen 1 "
              className="img-fluid"
            />
            <h3 className="meeti-title secondary p-3 text-center fs-4 fw-bold">
              Unete a un grupo
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accu
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/img-meeti/imagen2.jpg"
              alt="imagen 2"
              className="img-fluid"
            />
            <h3 className="meeti-title secondary p-3 text-center fs-4 fw-bold">
              Administra asistentes
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accu
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/img-meeti/imagen3.jpg"
              alt="imagen 3"
              className="img-fluid"
            />
            <h3 className="meeti-title secondary p-3 text-center fs-4 fw-bold">
              Crece tu comunidad
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accu
            </p>
          </div>
        </div>

        <div className="d-flex  align-items-center justify-content-center my-5">
          <a href="" className="btn btn-secundario text-white">
            Unirse a Meeti
          </a>
        </div>
      </section>

      <main className="container-xl eventos mt-5">
        <div className="d-flex justify-content-between">
          <h2 className="meeti-title">Proximos Eventos</h2>
          <a
            href="#"
            className="secondary text-decoration-none d-none d-sm-block"
          >
            Explora mas eventos
          </a>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="/img-meeti/categoria_1.jpg"
                alt="evento 1 "
                className="card-img-top"
              />

              <div className="card-body">
                <p className="card-text fecha fw-bold fs-5">
                  10 de Diciembre 20:00 horas
                </p>
                <h3 className="meeti-title card-title fs-5">
                  Diseño de apps con swift
                </h3>
                <p className="card-text descripcion">
                  Lorem ipsum dolor sit, amet consecing elit. Asperiores
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="/img-meeti/categoria_2.jpg"
                alt="evento 2 "
                className="card-img-top"
              />

              <div className="card-body">
                <p className="card-text fecha fw-bold fs-5">
                  10 de Diciembre 20:00 horas
                </p>
                <h3 className="meeti-title card-title fs-5">
                  Teoria del diseño{" "}
                </h3>
                <p className="card-text descripcion">
                  Lorem ipsum dolor sit, amet consecing elit. Asperiores
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="/img-meeti/categoria_3.jpg"
                alt="evento 1 "
                className="card-img-top"
              />

              <div className="card-body">
                <p className="card-text fecha fw-bold fs-5">
                  10 de Diciembre 20:00 horas
                </p>
                <h3 className="meeti-title card-title fs-5">
                  Planeacion empresarial
                </h3>
                <p className="card-text descripcion">
                  Lorem ipsum dolor sit, amet consecing elit. Asperiores
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="/img-meeti/categoria_4.jpg"
                alt="evento 4"
                className="card-img-top"
              />

              <div className="card-body">
                <p className="card-text fecha fw-bold fs-5">
                  10 de Diciembre 20:00 horas
                </p>
                <h3 className="meeti-title card-title fs-5">Diseño de ropa </h3>
                <p className="card-text descripcion">
                  Lorem ipsum dolor sit, amet consecing elit. Asperiores
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Funcionamiento;
