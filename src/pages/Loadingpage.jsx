import { LoadingContext } from "./Context/Context";
import "./Loadingpage.css";

import { useContext, useEffect } from "react";

const Loadingpage = () => {
  // useContext importieren
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section className="loadingpage">
      <img src="../../public/2.png" alt="loading" />
      <h1>WELCOME TO OUR SITE</h1>
    </section>
  );
};

export default Loadingpage;
