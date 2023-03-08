const Formulario = () => {
  return (
    <section className="busqueda">
      <h2 className="busqueda__heading">Busca un grupo en tu ciudad</h2>

      <div className="contenedor">
        <form action="#" className="formulario">
          <select name="koso" id="koso" className="formulario__campo">
            <option value="">Programacion</option>
            <option value="">Diseño</option>
            <option value="">Negocios</option>
            <option value="">Moda</option>
            <option value="">Ejercicio y Salud</option>
            <option value="">Fotografia</option>
            <option value="">Comida</option>
            <option value="">Diseño interior</option>
            <option value="">Cafe</option>
            <option value="">Cine</option>
            <option value="">Libros</option>
            <option value="">Emprendimiento</option>
          </select>

          <input
            type="text"
            className="formulario__campo"
            placeholder="nombre del evento"
          />
          <input
            type="text"
            className="formulario__campo"
            placeholder="ciudad o pais"
          />

          <input type="submit" className="formulario__submit" value="Buscar" />
        </form>
      </div>
    </section>
  );
};

export default Formulario;
