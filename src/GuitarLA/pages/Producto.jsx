import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Producto = () => {
  const productos = [
    { id: 1, name: "Lukather", img: "/img-guitar-la/guitarra_01.jpg" },
    { id: 2, name: "SRV", img: "/img-guitar-la/guitarra_02.jpg" },
    { id: 3, name: "Botherland", img: "/img-guitar-la/guitarra_03.jpg" },
    { id: 4, name: "VAI", img: "/img-guitar-la/guitarra_04.jpg" },
    { id: 5, name: "Thompson", img: "/img-guitar-la/guitarra_05.jpg" },
    { id: 6, name: "White", img: "/img-guitar-la/guitarra_06.jpg" },
    { id: 7, name: "Cobain", img: "/img-guitar-la/guitarra_07.jpg" },
    { id: 8, name: "Dale", img: "/img-guitar-la/guitarra_08.jpg" },
    { id: 9, name: "Krieger", img: "/img-guitar-la/guitarra_09.jpg" },
    { id: 10, name: "Campbell", img: "/img-guitar-la/guitarra_10.jpg" },
    { id: 11, name: "Reed", img: "/img-guitar-la/guitarra_11.jpg" },
    { id: 12, name: "Hazel", img: "/img-guitar-la/guitarra_12.jpg" },
  ];
  const params = useParams();
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const productFounded = productos.find((item) => item.id == +params.id);

    setProduct(productFounded);
  }, [params]);

  return (
    <>
      <Header />

      <div className="producto__contenedor">
        <div className="producto">
          <img
            // src="/img-guitar-la/guitarra_01.jpg"
            src={`${product.img}`}
            alt="guitarra 1 "
            className="producto__imagen"
          />

          <div className="producto__contenido">
            <h3 className="producto__nombre">{product.name}</h3>
            <p className="producto__descripcion">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              natus soluta odio. Dicta doloremque delectus veritatis laboriosam
              doloribus sapiente cupiditate repellat cum, et praesentium in
              ipsam earum reprehenderit. Aliquid, porro!
            </p>
            <p className="producto__precio">$299</p>

            <form className="producto__formulario">
              <label htmlFor="" className="producto__label">
                Cantidad:
              </label>
              <select name="" id="" className="producto__cantidad">
                <option value="" disabled selected>
                  -- Seleccione --{" "}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <input
                type="submit"
                value="Agregar al carrito"
                className="producto__agregar-carrito"
              />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Producto;
