const Testimoniales = () => {
  return (
    <div className="testimoniales-blog contenedor">
      <section className="testimoniales-blog__testimoniales">
        <h2 className="testimoniales-blog__heading">
          Que dicen <span>Nuestros clientes</span>
        </h2>

        <div className="testimonial">
          <img
            src="/img-real-state/testimonial.jpg"
            alt="testimonial"
            className="testimonial__imagen"
          />
          <div className="testimonial__contenido">
            <p className="testimonial__nombre">Familia hernandez</p>
            <p className="testimonial__texto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit at deleniti facilis atque quis, dolorum sit dolorem
              quia, quidem aspernatur odit nulla fuga exercitationem commodi
              magni sapiente voluptatum nisi corrupti?
            </p>
          </div>
        </div>
      </section>
      <section className="testimoniales-blog__blog">
        <h2 className="testimoniales-blog__heading">
          Ultimas entradas <span>de nuestro blog</span>
        </h2>
        <div className="entrada">
          <div className="entrada__imagen-contenedor">
            <img
              src="/img-real-state/blog_1.jpg"
              alt="imagen blog 1"
              className="entrada__imagen"
            />
          </div>

          <div className="entrada__contenido">
            <h3 className="entrada__nombre">Titulo aqui</h3>
            <p className="entrada__meta">
              Publicado por bienes raices el 10 de agosto de 2022 - 10
              comentarios
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              rerum quos illo dignissimos, debitis numquam facere quia harum
              aliquam! Aspernatur doloribus voluptates error modi, a fugit ullam
              quisquam quae sint?
            </p>
            <a href="#" className="entrada__enlace">
              Leer articulo
            </a>
          </div>
        </div>
        <div className="entrada">
          <div className="entrada__imagen-contenedor">
            <img
              src="/img-real-state/blog_2.jpg"
              alt="imagen blog 2"
              className="entrada__imagen"
            />
          </div>

          <div className="entrada__contenido">
            <h3 className="entrada__nombre">Titulo aqui</h3>
            <p className="entrada__meta">
              Publicado por bienes raices el 10 de agosto de 2022 - 10
              comentarios
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              rerum quos illo dignissimos, debitis numquam facere quia harum
              aliquam! Aspernatur doloribus voluptates error modi, a fugit ullam
              quisquam quae sint?
            </p>
            <a href="#" className="entrada__enlace">
              Leer articulo
            </a>
          </div>
        </div>
        <div className="entrada">
          <div className="entrada__imagen-contenedor">
            <img
              src="/img-real-state/blog_3.jpg"
              alt="imagen blog 3"
              className="entrada__imagen"
            />
          </div>

          <div className="entrada__contenido">
            <h3 className="entrada__nombre">Titulo aqui</h3>
            <p className="entrada__meta">
              Publicado por bienes raices el 10 de agosto de 2022 - 10
              comentarios
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              rerum quos illo dignissimos, debitis numquam facere quia harum
              aliquam! Aspernatur doloribus voluptates error modi, a fugit ullam
              quisquam quae sint?
            </p>
            <a href="#" className="entrada__enlace">
              Leer articulo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoniales;
