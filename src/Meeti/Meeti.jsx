import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Metti from "./pages/Metti";
import "./scss/app.scss";

const Meeti = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/meeti" element={<Metti />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Meeti;
