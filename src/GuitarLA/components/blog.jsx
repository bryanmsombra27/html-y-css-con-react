import { Link } from "react-router-dom";

const Blog = ({ isPage }) => {
  return (
    <>
      <section className="blog">
        <h2 className="blog__heading">Nuestro blog</h2>
        <div
          className={`blog__contenedor  ${
            isPage ? "blog__grid-blog-page" : "blog__grid"
          } `}
        >
          <article className="entrada">
            <img
              src="/img-guitar-la/blog_1.jpg"
              alt="imagen blog"
              className="entrada__imagen"
            />

            <div className="entrada__contenido">
              <h3 className="entrada__titulo">
                Como elegir tu primer guitarra
              </h3>
              <p className="entrada__fecha">20 de enero de 2023</p>
              <p className="entrada__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
                odio quas ipsam ratione esse iure quos, ducimus deserunt optio
                obcaecati eos excepturi quia mollitia expedita hic perferendis
                laboriosam nisi!
              </p>
              <Link to="/entrada" className="entrada__enlace">
                Leer Entrada
              </Link>
            </div>
          </article>
          <article className="entrada">
            <img
              src="/img-guitar-la/blog_2.jpg"
              alt="imagen blog"
              className="entrada__imagen"
            />

            <div className="entrada__contenido">
              <h3 className="entrada__titulo">
                Como elegir tu primer guitarra
              </h3>
              <p className="entrada__fecha">20 de enero de 2023</p>
              <p className="entrada__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
                odio quas ipsam ratione esse iure quos, ducimus deserunt optio
                obcaecati eos excepturi quia mollitia expedita hic perferendis
                laboriosam nisi!
              </p>
              <Link to="/entrada" className="entrada__enlace">
                Leer Entrada
              </Link>
            </div>
          </article>
          <article className="entrada">
            <img
              src="/img-guitar-la/blog_3.jpg"
              alt="imagen blog"
              className="entrada__imagen"
            />

            <div className="entrada__contenido">
              <h3 className="entrada__titulo">
                Como elegir tu primer guitarra
              </h3>
              <p className="entrada__fecha">20 de enero de 2023</p>
              <p className="entrada__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
                odio quas ipsam ratione esse iure quos, ducimus deserunt optio
                obcaecati eos excepturi quia mollitia expedita hic perferendis
                laboriosam nisi!
              </p>
              <Link to="/entrada" className="entrada__enlace">
                Leer Entrada
              </Link>
            </div>
          </article>
          <article className="entrada">
            <img
              src="/img-guitar-la/blog_4.jpg"
              alt="imagen blog"
              className="entrada__imagen"
            />

            <div className="entrada__contenido">
              <h3 className="entrada__titulo">
                Como elegir tu primer guitarra
              </h3>
              <p className="entrada__fecha">20 de enero de 2023</p>
              <p className="entrada__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem
                odio quas ipsam ratione esse iure quos, ducimus deserunt optio
                obcaecati eos excepturi quia mollitia expedita hic perferendis
                laboriosam nisi!
              </p>
              <Link to="/entrada" className="entrada__enlace">
                Leer Entrada
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blog;
