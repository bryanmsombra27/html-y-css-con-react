import { Link } from "react-router-dom";

const Productos = () => {
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

  return (
    <>
      <section className="productos productos__contenedor">
        <h2 className="productos__heading">Nuestra coleccion</h2>
        <div className="productos__grid">
          {productos.map((item) => (
            <div className="producto" key={item.id}>
              <img
                src={`${item.img}`}
                alt="guitarra 1 "
                className="producto__imagen"
              />

              <div className="producto__contenido">
                <h3 className="producto__nombre">{item.name}</h3>
                <p className="producto__descripcion">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  natus soluta odio. Dicta doloremque delectus veritatis
                  laboriosam doloribus sapiente cupiditate repellat cum, et
                  praesentium in ipsam earum reprehenderit. Aliquid, porro!
                </p>
                <p className="producto__precio">$299</p>
                <Link to={`/producto/${item.id}`} className="producto__enlace">
                  Ver producto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Productos;
