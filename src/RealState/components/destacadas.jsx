const Destacadas = () => {
  return (
    <>
      <section className="destacada">
        <div className="destacada__grid contenedor">
          <div className="destacada__contenido">
            <h3 className="destacada__heading">Propiedad destacada</h3>
            <p className="destacada__texto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, beatae. Dignissimos iure necessitatibus, laborum
              impedit molestiae eum modi voluptas quisquam nemo deleniti vitae
              vero iusto praesentium fugit maiores tenetur amet.
            </p>
            <p className="destacada__precio">$ 1,200,00.00</p>
            <a href="#" className="destacada__enlace">
              Ver propiedad
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destacadas;
