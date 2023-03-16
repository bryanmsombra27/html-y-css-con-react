const Categorias = () => {
  return (
    <section className="container-xl">
      <h2 className="text-center py-5">Categorias de productos</h2>

      <div className="row mt-5">
        <div className="col-md-4 categoria">
          <div>
            <img
              src="/img-ecommerce/categoria1.jpg"
              alt="categoria 1"
              className="img-fluid"
            />
          </div>
          <a
            href="#"
            className="text-center text-decoration-none d-block text-dark fs-2 py-3"
          >
            Oficina
          </a>
        </div>
        <div className="col-md-4 categoria">
          <div>
            <img
              src="/img-ecommerce/categoria2.jpg"
              alt="categoria 2"
              className="img-fluid"
            />
          </div>
          <a
            href="#"
            className="text-center text-decoration-none d-block text-dark fs-2 py-3"
          >
            Hogar
          </a>
        </div>
        <div className="col-md-4 categoria">
          <div>
            <img
              src="/img-ecommerce/categoria3.jpg"
              alt="categoria 3"
              className="img-fluid"
            />
          </div>
          <a
            href="#"
            className="text-center text-decoration-none d-block text-dark fs-2 py-3"
          >
            Cocina
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categorias;
