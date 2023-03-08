import Footer from "../components/footer";
import Header from "../components/header";

const Meeti = () => {
  return (
    <>
      <Header />

      <main className="meeti contenedor">
        <h1 className="meeti__nombre">Headless WordPress con Next.js</h1>

        <div className="meeti__grid">
          <section className="meeti__informacion">
            <img
              src="/img-meeti/meeti.jpg"
              alt="meeti"
              className="meeti__imagen"
            />

            <p className="meeti__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              atque accusantium maiores hic. Ullam officia voluptate facilis
              obcaecati quod delectus sequi vero atque, quasi unde pariatur
              dignissimos voluptatem deleniti temporibus.
            </p>
            <p className="meeti__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              atque accusantium maiores hic. Ullam officia voluptate facilis
              obcaecati quod delectus sequi vero atque, quasi unde pariatur
              dignissimos voluptatem deleniti temporibus.
            </p>
          </section>

          <aside className="sidebar">
            <img
              src="/img-meeti/mapa.jpg"
              alt="mapa"
              className="sidebar__mapa"
            />

            <div className="sidebar__contenido">
              <h3 className="sidebar__heading">Informacion meeti</h3>
              <p className="sidebar__texto">
                <span className="sidebar__label">Fecha:</span>
                30 diciembre de 2022
              </p>
              <p className="sidebar__texto">
                <span className="sidebar__label">Hora:</span>
                20:30
              </p>
              <p className="sidebar__texto">
                <span className="sidebar__label">Ubicacion:</span>
                Av. Vallarta 3033
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Meeti;
