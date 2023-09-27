import { BrowserRouter } from "react-router-dom";
import { NavbarKandidat } from "./components/Navbar/Navbar";
import { FooterKandidat } from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarKandidat />
      <FooterKandidat />
    </BrowserRouter>
  );
};

export default App;
