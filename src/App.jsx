import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import der Seiten/Komponenten
import Loadingpage from "./pages/Loadingpage";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./components/Header/Header";

// Import des Context
import { LoadingContext } from "./pages/Context/Context";
import { DarkContext } from "./pages/Context/Context";

function App() {
  // States für den useContext
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <DarkContext.Provider value={{ darkMode, setDarkMode }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" elements={<Home />} />
                <Route path="/gallery" elements={<Gallery />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loadingpage />
          )}
        </LoadingContext.Provider>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
