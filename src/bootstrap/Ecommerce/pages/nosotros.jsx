import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/pagesContent";

const Nosotros = () => {
  return (
    <>
      <Header />
      <Content title="Sobre Nosotros">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="/img-ecommerce/nosotros.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              explicabo sed pariatur itaque at labore dolorum inventore, esse
              soluta aperiam. Vero vitae cupiditate aliquid, velit quasi est
              illum consequatur numquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              explicabo sed pariatur itaque at labore dolorum inventore, esse
              soluta aperiam. Vero vitae cupiditate aliquid, velit quasi est
              illum consequatur numquam?
            </p>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Nosotros;
