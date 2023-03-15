import { Link } from "react-router-dom";

const Cursos = () => {
  return (
    <>
      <section className="cursos">
        <div className="cursos__contenedor cursos__grid">
          <div className="cursos__contenido">
            <h2 className="cursos__heading">Aprende a tocar guitarra</h2>
            <p className="cursos__texto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              in earum minus quisquam vel optio sint tempore, ipsum culpa error,
              quod dignissimos laboriosam est illo exercitationem. Animi
              deserunt quae exercitationem!
            </p>
            <Link to="/blog" className="cursos__enlace">
              Mas informacion
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cursos;
