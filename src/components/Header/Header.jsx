import { DarkContext } from "../../pages/Context/Context";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  // useContext importieren
  const { darkMode, setDarkMode } = useContext(DarkContext);

  //   Darkmode Funktion
  const darkModeFunction = () => {
    setDarkMode((dark) => !dark);
  };

  return (
    <header>
      <img src="../../../public/logo.png" alt="logo" />
      <nav>
        <Link to="/">MAIN</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link>PROJECTS</Link>
        <Link>CERTIFICATIONS</Link>
        <Link>CONTACTS</Link>
        <img
          onClick={darkModeFunction}
          src={
            darkMode ? "../../../public/sonne.png" : "../../../public/mond.svg"
          }
          alt="darklightmode"
        />
      </nav>
    </header>
  );
};

export default Header;
