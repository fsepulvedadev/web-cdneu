import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
