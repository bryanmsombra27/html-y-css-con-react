import Navbar from "./navegacion";

const Header = () => {
  return (
    <>
      <header className="py-5">
        <h1 className="text-center">
          Tienda <span className="text-primary">Muebles</span>
        </h1>
      </header>

      <Navbar />
    </>
  );
};

export default Header;
