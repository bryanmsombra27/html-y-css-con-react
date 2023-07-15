import "./Udemy.scss";

const Header = () => {
  return (
    <section className="descuentos container-xl ">
      <div className="row justify-content-around align-items-lg-end bg-light">
        <div className="col-lg-4 shadow bg-white texto-descuentos">
          <div className="p-3">
            <h2>Ultimo dia para disfrutar descuentos</h2>
            <p className="descripcion">
              cursos desde 10 usd. utiliza el cupon 10usd para pagar 10 dolares
              en cualquier curso
            </p>
            <input
              type="search"
              class="form-control buscar"
              placeholder=" ¿Que quieres aprender?"
            />
          </div>
        </div>
        <div className="col-lg-5">
          <img
            src="/img-udemy/persona1.png"
            className="img-fluid"
            alt="imagen persona 1"
          />
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <header className="header container-fluid d-none d-lg-block">
      <div className="d-flex justify-content-between align-items-center p-3 shadow-sm">
        <p className="fs-3 fw-bold m-0 me-4">
          <span className="text-success">U</span>niversidad
        </p>
        <form action="" className="flex-grow-1">
          <input
            type="search"
            className="form-control bg-light input"
            placeholder="busca cualquier cosa"
          />
        </form>

        <nav className="d-flex nav">
          <a href="" className="nav-link">
            U for business
          </a>
          <a href="" className="nav-link">
            enseña en U
          </a>
        </nav>
        <nav>
          <a href="" className="btn btn-outline-dark">
            Iniciar sesion
          </a>
          <a href="" className="btn btn-dark">
            Registrate
          </a>
        </nav>
      </div>
    </header>
  );
};

const Courses = () => {
  return (
    <section className="cursos container-xl mt-5 pt-5">
      <h3>Una amplia seleccion de cursos</h3>
      <p className="fs-4">
        Elige entre mas de 155,000 cursos en video y en linea con nuevo
        contenido cada mes
      </p>

      <nav className="nav">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Javascript
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Python
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            React native
          </a>
        </li>
      </nav>

      <div className="categoria-curso p-4 mt-3">
        <p className="fs-4 fw-bold">
          Amplia tus oportunidades con js y frontend
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          magnam minus accusamus a earum voluptatem culpa animi pariatur
          deserunt reprehenderit, harum ducimus ex maiores, natus cupiditate
          odio similique adipisci voluptatum.
        </p>

        <a href="" className="btn btn-outline-dark">
          Explorar js
        </a>
        <ul className="list-unstyled mt-5 listado-cursos">
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_6.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">
                  Curso de js moderno creando proyectos
                </h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_2.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">Diseño UX/UI con figma</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_10.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">FullStack con JS</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_9.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">
                  Desarrollo web completo con python y node
                </h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_3.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">
                  Diseño de interfaces para apps moviles
                </h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card  d-lg-none">
              <img
                src="/img-udemy/curso_12.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">Bootcamp backend</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-light my-5 py-5">
      <div className="container-xl">
        <div className="row justify-content-between align-items-center ">
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="d-flex justify-content-around align-items-center">
              <div className="me-3">
                <div className="icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-play-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                  </svg>
                </div>
              </div>
              <p className="fw-bold">
                Aprende habilidades a tu ritmo con mas de 150 mil cursos en
                video
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-5 mb-md-0">
            <div className="d-flex justify-content-around align-items-center">
              <div className="me-3">
                <div className="icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
              <p className="fw-bold">
                Compra cursos impartidos por expertos del mudo real y obten un
                empleo
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-5 mb-md-0">
            <div className="d-flex justify-content-around align-items-center">
              <div className="me-3">
                <div className="icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-phone-fill fs-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                  </svg>
                </div>
              </div>
              <p className="fw-bold">
                Aprende a tu ritmo, con acceso de por vida desde ordenadores o
                dispositivos moviles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const StudentsAreWatching = () => {
  return (
    <>
      <main className="container-xl">
        <p className="fs-4 fw-bold">Los estudiantes estan viendo</p>

        <ul className="list-unstyled mt-5 listado-cursos">
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_1.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">Curso de guitarra principios basicos</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_4.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">fotografia para principantes </h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_5.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">Curso de ventas por internet</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_7.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">fundamentos basicos de UX/UI</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card">
              <img
                src="/img-udemy/curso_8.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">
                  Diseño de tiendas virtuales con WooCommerce
                </h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
          <li className="curso">
            <div className="card  d-lg-none">
              <img
                src="/img-udemy/curso_12.jpg"
                alt="curso "
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="titulo">Bootcamp backend</h4>
                <p className="instructor">jose pedro instructor</p>

                <div className="d-flex align-items-center">
                  <p className="puntaje fw-bold text-secondary m-0 me-2">
                    {" "}
                    4.7
                  </p>
                  <img
                    src="/img-udemy/estrellas.png"
                    className="me-2 calificacion"
                    alt="estrellas"
                  />
                  <p className="total m-0">(3121)</p>
                </div>

                <p className="precio fw-bold">
                  {" "}
                  10 USD$ <span className="original fw-normal">
                    200 USD$
                  </span>{" "}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

const Categories = () => {
  return (
    <section className="container-xl categorias mt-3">
      <p className="fs-4 fw-bold">Categorias principales</p>

      <ul className="list-unstyled grid">
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-01.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Diseño</p>
          </a>
        </li>

        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-02.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Desarrollo</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-03.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Marketing</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-04.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">informatica y software</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-05.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Desarrollo personal</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-06.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Negocios</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-07.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Fotografia</p>
          </a>
        </li>
        <li className="g-col-lg-6">
          <a href="#" className="text-decoration-none">
            <div className="bg-light">
              <img
                src="/img-udemy/iconos-08.png"
                alt="icono"
                className="img-fluid"
              />
            </div>
            <p className="fw-bold mt-2">Musica</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

const TopicsByCateogry = () => {
  return (
    <section className="listado-categorias bg-light  mt-5 pt-5">
      <div className="container-xl">
        <p className="fw-bold fs-4">Temas por categoria</p>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <p className="fw-blod fs-4">Desarrollo</p>
            <ul className="list-unstyled">
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Python
                </a>
                <p>30 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Desarrollo web
                </a>
                <p>10 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Aprendizaje automatico
                </a>
                <p>6 000 000 Estudiantes</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <p className="fw-blod fs-4">Negocios</p>
            <ul className="list-unstyled">
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Analisis financiero
                </a>
                <p>1 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  SQL
                </a>
                <p>4 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  PMP
                </a>
                <p>1 000 000 Estudiantes</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <p className="fw-blod fs-4">Informatica y Software</p>
            <ul className="list-unstyled">
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Certificacion AWS
                </a>
                <p>4 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Hacking etico
                </a>
                <p>10 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Seguridad informatica
                </a>
                <p>4 000 000 Estudiantes</p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <p className="fw-blod fs-4">Diseño</p>
            <ul className="list-unstyled">
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Photoshop
                </a>
                <p>10 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Diseño grafico
                </a>
                <p>3 000 000 Estudiantes</p>
              </li>
              <li className="mb-4">
                <a href="#" className="text-success fw-bold fs-5">
                  Dibujo
                </a>
                <p>2 000 000 Estudiantes</p>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" className="btn btn-outline-dark">
          Explora mas temas
        </a>
      </div>
    </section>
  );
};
const Instructor = ({ img, title, btnTitle }) => {
  return (
    <section className="container-xl py-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 order-2 order-md-1">
          <img
            // src="/img-udemy/persona2.png"
            src={img}
            alt="instructor"
            className="img-fluid"
          />
        </div>
        <div className="col-md-5 order-1 order-md-2">
          {/* <h2 className="fs-3">Convierte en instructor</h2> */}
          <h2 className="fs-3">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            natus illum vero necessitatibus debitis ea veniam eos eum dolor
            amet? Placeat voluptate cumque provident veritatis sint saepe
            voluptatibus officia perferendis.
          </p>
          <a href="" className="btn btn-dark">
            {/* Empieza a enseñar hoy mismo */}
            {btnTitle}
          </a>
        </div>
      </div>
    </section>
  );
};
const EnterprisesAndLogos = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="text-center">
              Empresas de todos los tamaños confian en nosotros
            </h4>

            <div className="logos">
              <div className="logo">
                <img src="/img-udemy/logo-01.svg" alt="logotipo" />
              </div>
              <div className="logo">
                <img src="/img-udemy/logo-02.svg" alt="logotipo" />
              </div>
              <div className="logo">
                <img src="/img-udemy/logo-03.svg" alt="logotipo" />
              </div>
              <div className="logo">
                <img src="/img-udemy/logo-04.svg" alt="logotipo" />
              </div>
              <div className="logo">
                <img src="/img-udemy/logo-05.svg" alt="logotipo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const UforBusiness = () => {
  return (
    <section className="container-xl py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <h2 className="fs-3">
            Universidad <span className="text-success">Business</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            nihil ipsam delectus repellat quasi! Ratione, quam? Eaque ut
            laudantium, corrupti ipsa consequatur corporis. Nisi dolorem rem
            voluptate voluptatibus quia molestiae.
          </p>
          <a href="" className="btn btn-dark">
            Consigue U business
          </a>
        </div>
        <div className="col-md-5">
          <img
            src="/img-udemy/persona3.png"
            alt="persona 3"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container-xl ">
        <div className="row align-items-start">
          <nav className="col-md-2 d-grid gap-2">
            <a href="" className="text-light text-decoration-none">
              U business
            </a>
            <a href="" className="text-light text-decoration-none">
              enseña en U
            </a>
            <a href="" className="text-light text-decoration-none">
              Consigue la app
            </a>
            <a href="" className="text-light text-decoration-none">
              quienes somos
            </a>
            <a href="" className="text-light text-decoration-none">
              contactos
            </a>
          </nav>
          <nav className="col-md-2 d-grid gap-2">
            <a href="" className="text-light text-decoration-none">
              Empleo
            </a>
            <a href="" className="text-light text-decoration-none">
              Blog
            </a>
            <a href="" className="text-light text-decoration-none">
              Ayuda y asistencia
            </a>
            <a href="" className="text-light text-decoration-none">
              Afiliados
            </a>
          </nav>
          <nav className="col-md-2 d-grid gap-2 me-auto">
            <a href="" className="text-light text-decoration-none">
              Condiciones
            </a>
            <a href="" className="text-light text-decoration-none">
              Mapa de sitio
            </a>
            <a href="" className="text-light text-decoration-none">
              Politica de privacidad
            </a>
          </nav>
          <div className="col-md-2 ">
            <a href="#" className="btn btn-outline-light">
              Español
            </a>
          </div>
        </div>
      </div>

      <div className="container-xl mt-5 d-flex align-items-center justify-content-between">
        <p className="text-light fs-3 fw-bold">
          {" "}
          <span className="text-success">U</span>niversidad{" "}
        </p>
        <p className="text-light">&copy; Derechos resevados</p>
      </div>
    </footer>
  );
};

const UdemyApp = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Courses />
      <Features />
      <StudentsAreWatching />
      <Categories />
      <TopicsByCateogry />
      <Instructor
        img="/img-udemy/persona2.png"
        btnTitle="Empieza a enseñar hoy mismo"
        title="Convierte en instructor"
      />
      <EnterprisesAndLogos />
      <UforBusiness />
      <Instructor
        img="/img-udemy/transforma.png"
        btnTitle="descubre como"
        title="transforma tu vida mediante la educacion"
      />
      <Footer />
    </>
  );
};

export default UdemyApp;
