import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [seleccionado, setSeleccionado] = useState({
    nombre: "JARA JOYAS",
    emprendedor: "Cristina Jara",
    localidad: "Neuquen Capital",
    info: "Diseño y elaboracion de joyeria contemporanea.",
    instagram: "https://www.instagram.com/crisjarajoyas/",
    web: "https://jarajoyas.mitiendanube.com/",
  });

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
