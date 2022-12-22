import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [seleccionado, setSeleccionado] = useState({});

  const navigate = useNavigate();
  const handleSeleccion = (proyecto) => {
    setSeleccionado(proyecto);
    navigate("/detalle");
    console.log(proyecto);
  };

  return (
    <AppContext.Provider value={{ handleSeleccion, seleccionado }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
