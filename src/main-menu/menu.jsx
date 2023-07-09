import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <nav className="navegacion-principal" id="navegacion-proyectos">
        {/* <Link to="/">DeliveryApp</Link>
        <Link to="/PodcastFM">PodcastFM</Link>
        <Link to="/Airbnb">Airbnb</Link>
        <Link to="/Realstate">Realstate</Link>
        <Link to="/CarolinaSpa">CarolinaSpa</Link>
        <Link to="/Meeti">Meeti</Link>
        <Link to="/EscuelaCocina"> Escuela de cocina</Link>
        <Link to="/GuitarLA">GuitarLA</Link> */}

        <Link to="/">Ecommece</Link>
        <Link to="/Meeti">Meeti</Link>
        <Link to="/Podcast">PodcastFM</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default MainMenu;
