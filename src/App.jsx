import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "./pages/Proyectos";
import Provider from "./context/Provider";
import Detalle from "./pages/Detalle";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Provider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/detalle" element={<Detalle />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
