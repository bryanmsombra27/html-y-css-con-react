import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/pagesContent";

const Blog = () => {
  return (
    <>
      <Header />
      <Content title="Blog">
        <div className="row mt-5 gx-5">
          <section className="col-md-8 order-1 order-md-0">
            <article className="mb-2 pb-5">
              <h2 className="my-5">Guia de colores</h2>

              <img
                src="/img-ecommerce/nosotros.jpg"
                alt="blog"
                className="img-fluid"
              />

              <div className="d-flex flex-column  flex-md-row  justify-content-md-between  mt-4 ">
                <p className="fw-bold">
                  Fecha:
                  <span className="text-primary">22 Octubre de 2022</span>
                </p>
                <p className="fw-bold">
                  Escrito por:
                  <span className="text-primary">Tienda muebles</span>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                voluptatum fugit, dolorem autem sed nisi quas asperiores vero
                eveniet, dolores animi dolorum id! Non molestias enim illum
                suscipit commodi ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                voluptatum fugit, dolorem autem sed nisi quas asperiores vero
                eveniet, dolores animi dolorum id! Non molestias enim illum
                suscipit commodi ullam.
              </p>

              <Link
                to="/entrada"
                className="btn btn-success  px-5 py-3 fs-3 text-uppercase fw-bold rounded-0  d-block  d-md-inline-block "
              >
                Continuar leyendo
              </Link>
            </article>
            <article className="mb-2 border-top pb-5">
              <h2 className="my-5">Guia de colores</h2>

              <img
                src="/img-ecommerce/nosotros.jpg"
                alt="blog"
                className="img-fluid"
              />

              <div className="d-flex flex-column  flex-md-row  justify-content-md-between  mt-4 ">
                <p className="fw-bold">
                  Fecha:
                  <span className="text-primary">22 Octubre de 2022</span>
                </p>
                <p className="fw-bold">
                  Escrito por:
                  <span className="text-primary">Tienda muebles</span>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                voluptatum fugit, dolorem autem sed nisi quas asperiores vero
                eveniet, dolores animi dolorum id! Non molestias enim illum
                suscipit commodi ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                voluptatum fugit, dolorem autem sed nisi quas asperiores vero
                eveniet, dolores animi dolorum id! Non molestias enim illum
                suscipit commodi ullam.
              </p>

              <Link
                to="/entrada"
                className="btn btn-success  px-5 py-3 fs-3 text-uppercase fw-bold rounded-0  d-block  d-md-inline-block "
              >
                Continuar leyendo
              </Link>
            </article>
          </section>

          <aside className="col-md-4">
            <h3 className="my-3">Otras entradas de blog</h3>

            <ul className="mt-5">
              <li>
                <Link to="/entrada" className="text-dark text-decoration-none">
                  Guia de colores
                </Link>
              </li>
              <li>
                <Link to="/entrada" className="text-dark text-decoration-none">
                  Nuevos Modelos
                </Link>
              </li>
              <li>
                <Link to="/entrada" className="text-dark text-decoration-none">
                  Guia para diseños interiores
                </Link>
              </li>
              <li>
                <Link to="/entrada" className="text-dark text-decoration-none">
                  Guia para diseños exteriores
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Blog;
