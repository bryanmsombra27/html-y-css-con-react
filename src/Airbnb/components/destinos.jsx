const Destinos = () => {
  return (
    <section className="destinos contenedor seccion">
      <h2 className="destinos__heading">Descubre alojamientos populares</h2>
      <ul className="destinos__grid">
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_1.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">New York</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_2.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">Paris</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_3.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">San francisco</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_4.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">Egipto</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_5.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">Londres</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_6.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">Italia</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_7.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">India</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src="/img-airbnb/icono_destino_8.png" alt="destino" />
          </div>
          <div className="destino__informacion">
            <h3 className="destino__nombre">Grecia</h3>
            <p className="destino__distancia">4h en avion</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Destinos;
