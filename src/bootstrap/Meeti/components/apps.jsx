const Apps = () => {
  return (
    <>
      <section className="tiendas container-xl mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/img-meeti/imagen1.jpg"
              alt="app 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/img-meeti/logo.png"
              alt="logo"
              className="logo mt-5 img-fluid"
            />
            <p className="text-center fw-bold mt-5 fs-4">
              Mantente conectado. Descarga la aplicacion
            </p>
            <div className="d-flex gap-4">
              <div className="col">
                <a href="">
                  <img
                    src="/img-meeti/categoria_8.jpg"
                    className="img-fluid"
                    alt="tienda apple"
                  />
                </a>
              </div>
              <div className="col">
                <a href="">
                  <img
                    src="/img-meeti/categoria_9.jpg"
                    className="img-fluid"
                    alt="tienda android"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/img-meeti/imagen2.jpg"
              alt="app 1"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Apps;
