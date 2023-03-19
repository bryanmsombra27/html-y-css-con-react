import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/pagesContent";

const Contacto = () => {
  return (
    <>
      <Header />
      <Content title="Contacto">
        <div className="row justify-content-center">
          <form className="col-md-8">
            <fieldset>
              <legend className="bg-primary text-center text-white fs-2 fw-bold">
                Tus Datos
              </legend>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text "
                  className="form-control "
                  placeholder="nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Asunto:
                </label>
                <input
                  type="text "
                  className="form-control "
                  placeholder="asunto"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Telefono:
                </label>
                <input
                  type="tel"
                  className="form-control "
                  placeholder="telefono"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Telefono:
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  className="form-control"
                  rows="10"
                ></textarea>
              </div>
            </fieldset>

            <fieldset>
              <legend className="bg-primary text-center text-white fs-2 fw-bold">
                Pais
              </legend>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Pais:
                </label>
                <select name="" id="" className="form-control">
                  <option value="" disabled selected>
                    --seleccione--
                  </option>
                  <option value="">Peru</option>
                  <option value="">Chile</option>
                  <option value="">Colombia</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend className="bg-primary text-center text-white fs-2 fw-bold">
                Informacion Extra
              </legend>
              <div className="mb-3 ">
                <label htmlFor="" className="form-label">
                  Cliente:
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="type"
                  id=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Proveedor:
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="type"
                  id=""
                />
              </div>
            </fieldset>

            <div className="d-grid d-md-flex">
              <input
                type="submit"
                className="btn btn-secondary mt-5  fs-2 px-5"
                value="Enviar formulario"
              />
            </div>
          </form>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Contacto;
