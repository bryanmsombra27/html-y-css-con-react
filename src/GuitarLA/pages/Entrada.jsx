import Footer from "../components/footer";
import Header from "../components/header";

const Entrada = () => {
  return (
    <>
      <Header />
      <div className="entrada__contenedor">
        <h2 className="entrada__heading">Como elegir tu primera guitarra</h2>

        <article className="entrada">
          <img
            src="/img-guitar-la/blog_4.jpg"
            alt="imagen blog"
            className="entrada__imagen"
          />

          <div className="entrada__contenido">
            <h3 className="entrada__titulo">Como elegir tu primer guitarra</h3>
            <p className="entrada__fecha">20 de enero de 2023</p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
              odio quas ipsam ratione esse iure quos, ducimus deserunt optio
              obcaecati eos excepturi quia mollitia expedita hic perferendis
              laboriosam nisi!
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
              odio quas ipsam ratione esse iure quos, ducimus deserunt optio
              obcaecati eos excepturi quia mollitia expedita hic perferendis
              laboriosam nisi!
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
              odio quas ipsam ratione esse iure quos, ducimus deserunt optio
              obcaecati eos excepturi quia mollitia expedita hic perferendis
              laboriosam nisi!
            </p>
            <p className="entrada__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
              odio quas ipsam ratione esse iure quos, ducimus deserunt optio
              obcaecati eos excepturi quia mollitia expedita hic perferendis
              laboriosam nisi!
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
};

export default Entrada;
