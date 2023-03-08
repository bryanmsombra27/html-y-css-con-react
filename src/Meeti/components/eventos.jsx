import { Link } from "react-router-dom";

const Eventos = () => {
  return (
    <main className="eventos contenedor">
      <h3 className="eventos__heading">Proximos eventos</h3>

      <div className="eventos__grid">
        <div className="evento">
          <Link to="/meeti">
            <img
              src="/img-meeti/imagen1.jpg"
              alt="imagen 1"
              className="evento__imagen"
            />
            <div className="evento__contenido">
              <p className="evento__fecha">Jueves 30 de septiembre de 2022</p>
              <h3 className="evento__nombre">ideas de negocios</h3>

              <div className="evento__autor">
                <div className="evento__autor-imagen">
                  <img src="/img-meeti/perfil1.jpg" alt="perfil 1 " />
                </div>
                <div className="evento__autor-informacion">
                  <p className="evento__organizado-texto">Organizado por:</p>
                  <p className="evento__organizado-nombre">Bryan Ochoa</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="evento">
          <Link to="/meeti">
            <img
              src="/img-meeti/imagen2.jpg"
              alt="imagen 2"
              className="evento__imagen"
            />
            <div className="evento__contenido">
              <p className="evento__fecha">Jueves 30 de septiembre de 2022</p>
              <h3 className="evento__nombre">Bitcoins y otras criptos</h3>

              <div className="evento__autor">
                <div className="evento__autor-imagen">
                  <img src="/img-meeti/perfil1.jpg" alt="perfil 1 " />
                </div>
                <div className="evento__autor-informacion">
                  <p className="evento__organizado-texto">Organizado por:</p>
                  <p className="evento__organizado-nombre">Bryan Ochoa</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="evento">
          <Link to="/meeti">
            <img
              src="/img-meeti/imagen3.jpg"
              alt="imagen 3"
              className="evento__imagen"
            />
            <div className="evento__contenido">
              <p className="evento__fecha">Jueves 30 de septiembre de 2022</p>
              <h3 className="evento__nombre">Pizza paso a paso</h3>

              <div className="evento__autor">
                <div className="evento__autor-imagen">
                  <img src="/img-meeti/perfil2.jpg" alt="perfil 2" />
                </div>
                <div className="evento__autor-informacion">
                  <p className="evento__organizado-texto">Organizado por:</p>
                  <p className="evento__organizado-nombre">Josue perez</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Eventos;
