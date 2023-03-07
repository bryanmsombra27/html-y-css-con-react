const Productos = () => {
  return (
    <main className="productos contenedor seccion">
      <h2 className="productos__heading">
        Nuestros <span>productos</span>
      </h2>

      <div className="productos__grid">
        <div className="producto">
          <div className="producto__mask">
            <img
              src="/img-carolina-spa/producto_01.jpg"
              alt="imagen producto 1"
              className="producto__imagen"
            />
          </div>

          <div className="producto__contenido">
            <h3 className="producto__nombre">Producto 1</h3>
            <p className="producto__descripcion">
              Lorem ipsum dolor sit amet consectetur, adipis et?
            </p>
            <p className="producto__precio">$25</p>
          </div>
        </div>
        <div className="producto">
          <div className="producto__mask">
            <img
              src="/img-carolina-spa/producto_02.jpg"
              alt="imagen producto 1"
              className="producto__imagen"
            />
          </div>

          <div className="producto__contenido">
            <h3 className="producto__nombre">Producto 2</h3>
            <p className="producto__descripcion">
              Lorem ipsum dolor sit amet consectetur, adipis et?
            </p>
            <p className="producto__precio">$25</p>
          </div>
        </div>
        <div className="producto">
          <div className="producto__mask">
            <img
              src="/img-carolina-spa/producto_03.jpg"
              alt="imagen producto 1"
              className="producto__imagen"
            />
          </div>

          <div className="producto__contenido">
            <h3 className="producto__nombre">Producto 3</h3>
            <p className="producto__descripcion">
              Lorem ipsum dolor sit amet consectetur, adipis et?
            </p>
            <p className="producto__precio">$25</p>
          </div>
        </div>
        <div className="producto">
          <div className="producto__mask">
            <img
              src="/img-carolina-spa/producto_04.jpg"
              alt="imagen producto 1"
              className="producto__imagen"
            />
          </div>

          <div className="producto__contenido">
            <h3 className="producto__nombre">Producto 4</h3>
            <p className="producto__descripcion">
              Lorem ipsum dolor sit amet consectetur, adipis et?
            </p>
            <p className="producto__precio">$25</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
