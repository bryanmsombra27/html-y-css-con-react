const Download = () => {
  return (
    <>
      <section className="descargar">
        <div className="descargar__grid contenedor">
          <div className="descargar__imagen">
            <img src="img/app.png" alt="imagen" />
          </div>

          <div className="tiendas">
            <h3 className="tiendas__heading">Descarga la app</h3>
            <p className="tiendas__texto">Dispnible para android y IOS</p>
            <div className="tiendas__grid">
              <a href="#" className="tiendas__enlace">
                <img src="img/tienda-apple.svg" alt="apple" />
              </a>
              <a href="#" className="tiendas__enlace">
                <img src="img/tienda-android.svg" alt="android" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Download;
