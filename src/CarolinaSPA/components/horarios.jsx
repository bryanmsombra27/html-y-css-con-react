const Horarios = () => {
  return (
    <section className="horario">
      <div className="horario__grid contenedor">
        <div className="horario__contenido">
          <h3 className="horario__heading">Horarios</h3>
          <p className="horario__texto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            perferendis, quo maiores ducimus cumque qui molestiae quibusdam!
            Nihil assumenda atque id quam error odit cumque, alias dignissimos
            placeat expedita quas!
          </p>

          <table className="tabla">
            <thead className="tabla__thead">
              <tr>
                <th className="tabla__th">Dia</th>
                <th className="tabla__th">De</th>
                <th className="tabla__th">Hasta</th>
              </tr>
            </thead>
            <tbody className="tabla__tbody">
              <tr className="tabla__tr">
                <td className="tabla__td">Lunes</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Martes</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Miercoles</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Jueves</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Viernes</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Sabado</td>
                <td className="tabla__td">09:00</td>
                <td className="tabla__td">19:00</td>
              </tr>
              <tr className="tabla__tr">
                <td className="tabla__td">Domingo</td>
                <td className="tabla__td" colSpan="2">
                  Cerrado
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Horarios;
