const Productos = () => {
  return (
    <main className="container-xl py-5">
      <h2 className="text-center my-5">Nuestros productos</h2>

      <div className="row g-0 pt-5 mb-4">
        <div className="col-md-8 producto">
          <img
            src="/img-ecommerce/producto1.jpg"
            alt="producto 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mb-4 mb-md-0  bg-primary text-center p-5 text-white d-flex flex-column justify-content-center">
          <h3>Producto 1 </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            animi aliquam aspernatur repudiandae ab id, voluptatibus porro
            mollitia earum a natus corporis opti
          </p>
          <p className="fs-1 fw-bold">$1,000.00</p>
          <a
            href="#"
            className="btn btn-success fs-3 text-uppercase fw-bold py-3"
          >
            Agregar al carrito
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <img
              src="/img-ecommerce/producto2.jpg"
              alt="producto 2"
              className="img-fluid"
            />

            <div className="card-body text-center  bg-primary text-white p-5">
              <h3>Producto 2 </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur animi aliquam aspernatur repudiandae ab id,
                voluptatibus porro mollitia earum a natus corporis opti
              </p>
              <p className="fs-1 fw-bold">$12,000.00</p>
              <a
                href="#"
                className="btn btn-success fs-3 text-uppercase fw-bold py-3 d-block"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <img
              src="/img-ecommerce/producto3.jpg"
              alt="producto 3"
              className="img-fluid"
            />
            <div className="card-body text-center  bg-primary text-white p-5">
              <h3>Producto 3 </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur animi aliquam aspernatur repudiandae ab id,
                voluptatibus porro mollitia earum a natus corporis opti
              </p>
              <p className="fs-1 fw-bold">$12,000.00</p>
              <a
                href="#"
                className="btn btn-success fs-3 text-uppercase fw-bold py-3 d-block"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/img-ecommerce/producto4.jpg"
              alt="producto 4"
              className="img-fluid"
            />

            <div className="card-body text-center  bg-primary text-white p-5">
              <h3>Producto 4 </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur animi aliquam aspernatur repudiandae ab id,
                voluptatibus porro mollitia earum a natus corporis opti
              </p>
              <p className="fs-1 fw-bold">$12,000.00</p>
              <a
                href="#"
                className="btn btn-success fs-3 text-uppercase fw-bold py-3 d-block"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/img-ecommerce/producto5.jpg"
              alt="producto 5"
              className="img-fluid"
            />

            <div className="card-body text-center  bg-primary text-white p-5">
              <h3>Producto 5 </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur animi aliquam aspernatur repudiandae ab id,
                voluptatibus porro mollitia earum a natus corporis opti
              </p>
              <p className="fs-1 fw-bold">$12,000.00</p>
              <a
                href="#"
                className="btn btn-success fs-3 text-uppercase fw-bold py-3 d-block"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/img-ecommerce/producto6.jpg"
              alt="producto 6"
              className="img-fluid"
            />

            <div className="card-body text-center  bg-primary text-white p-5">
              <h3>Producto 6 </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur animi aliquam aspernatur repudiandae ab id,
                voluptatibus porro mollitia earum a natus corporis opti
              </p>
              <p className="fs-1 fw-bold">$12,000.00</p>
              <a
                href="#"
                className="btn btn-success fs-3 text-uppercase fw-bold py-3 d-block"
              >
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
