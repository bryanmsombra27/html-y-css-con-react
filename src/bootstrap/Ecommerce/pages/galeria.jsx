import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Modal from "../components/modalContent";
import Content from "../components/pagesContent";

const Galeria = () => {
  const [showModalImage, setshowModalImage] = useState(
    "/img-ecommerce/galeria_01.jpg"
  );

  const handleClickedImage = (e) => {
    const imageNumber = +e.target.dataset.image;

    setshowModalImage(`/img-ecommerce/galeria_0${imageNumber}.jpg`);
  };

  return (
    <>
      <Header />
      <Content title="Galeria">
        <ul className="row list-unstyled galeria">
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_01.jpg"
                alt="galeria 1"
                data-image={1}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_02.jpg"
                alt="galeria 2"
                data-image={2}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_03.jpg"
                alt="galeria 3"
                data-image={3}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_04.jpg"
                alt="galeria 4"
                data-image={4}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_05.jpg"
                alt="galeria 5"
                data-image={5}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_06.jpg"
                alt="galeria 6"
                data-image={6}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_07.jpg"
                alt="galeria 7"
                data-image={7}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_08.jpg"
                alt="galeria 8"
                data-image={8}
                className="img-fluid"
              />
            </a>
          </li>
          <li className="col-md-6 col-lg-4">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modal-imagen"
              onClick={handleClickedImage}
            >
              <img
                src="/img-ecommerce/galeria_09.jpg"
                alt="galeria 9"
                data-image={9}
                className="img-fluid"
              />
            </a>
          </li>
        </ul>
      </Content>

      <Modal
        idModal="modal-imagen"
        content={
          <>
            <img
              src={`${showModalImage}`}
              alt="galeria 2"
              className="img-fluid"
            />
          </>
        }
      />

      <Footer />
    </>
  );
};

export default Galeria;
