const Testimonials = () => {
  return (
    <>
      <section className="contenedor testimoniales">
        <h2 className="testimoniales__heading">Testimoniales</h2>

        <div className="testimoniales__grid">
          <div className="testimonial">
            <header className="testimonial__header">
              <div className="testimonial__imagen">
                <img src="img/testimonial1.jpg" alt="testimonial 1" />
              </div>

              <div className="testimonial__informacion">
                <p className="testimonial__autor">Juan Perez</p>
                <img
                  src="img/estrellas.png"
                  alt="estrellas"
                  className="testimonial__calificacion"
                />
              </div>
            </header>
            <blockquote className="testimonial__texto">
              Una excelente app, puedo seleccionar de una gran cantidad de
              opciones y pagar en tarjeta o efectivo segun ne convenga.
            </blockquote>
          </div>

          <div className="testimonial">
            <header className="testimonial__header">
              <div className="testimonial__imagen">
                <img src="img/testimonial5.jpg" alt="testimonial 1" />
              </div>

              <div className="testimonial__informacion">
                <p className="testimonial__autor">Itzel Cruz</p>
                <img
                  src="img/estrellas.png"
                  alt="estrellas"
                  className="testimonial__calificacion"
                />
              </div>
            </header>
            <blockquote className="testimonial__texto">
              Una excelente app, puedo seleccionar de una gran cantidad
            </blockquote>
          </div>

          <div className="testimonial">
            <header className="testimonial__header">
              <div className="testimonial__imagen">
                <img src="img/testimonial4.jpg" alt="testimonial 1" />
              </div>

              <div className="testimonial__informacion">
                <p className="testimonial__autor">Rocio Rodriguez</p>
                <img
                  src="img/estrellas.png"
                  alt="estrellas"
                  className="testimonial__calificacion"
                />
              </div>
            </header>
            <blockquote className="testimonial__texto">
              Una excelente app, puedo seleccionar de una gran cantidad de
              opciones y pagar en tarjeta o efectivo segun ne convenga. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
              labore!
            </blockquote>
          </div>

          <div className="testimonial">
            <header className="testimonial__header">
              <div className="testimonial__imagen">
                <img src="img/testimonial2.jpg" alt="testimonial 1" />
              </div>

              <div className="testimonial__informacion">
                <p className="testimonial__autor">Cynthia V</p>
                <img
                  src="img/estrellas.png"
                  alt="estrellas"
                  className="testimonial__calificacion"
                />
              </div>
            </header>
            <blockquote className="testimonial__texto">
              Una excelente app, puedo seleccionar de una gran cantidad de
              opciones y pagar en tarjeta o efectivo segun ne convenga.
            </blockquote>
          </div>
          <div className="testimonial">
            <header className="testimonial__header">
              <div className="testimonial__imagen">
                <img src="img/testimonial3.jpg" alt="testimonial 1" />
              </div>

              <div className="testimonial__informacion">
                <p className="testimonial__autor">Jose Hernandez</p>
                <img
                  src="img/estrellas.png"
                  alt="estrellas"
                  className="testimonial__calificacion"
                />
              </div>
            </header>
            <blockquote className="testimonial__texto">
              Una excelente app, puedo seleccionar de una gran cantidad de
              opciones y pagar en tarjeta o efectivo segun ne convenga.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
