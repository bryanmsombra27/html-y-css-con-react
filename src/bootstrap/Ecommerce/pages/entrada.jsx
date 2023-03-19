import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/pagesContent";

const Entrada = () => {
  return (
    <>
      <Header />
      <Content title="Entrada de blog">
        <div className="row justify-content-md-center">
          <article className="col-md-8 ">
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
              suscipit commodi ullam. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Beatae tempore ullam recusandae doloribus iusto
              accusamus consequatur tempora maxime eligendi illo officia magni
              maiores ad laborum veritatis, saepe esse praesentium architecto!
            </p>
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
          </article>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Entrada;
