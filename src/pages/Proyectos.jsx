import { useEffect, useState } from "react";
import Proyecto from "../components/Proyecto";
import Data from "../datos.json";
import logo from "../assets/logo-spiner.png";
import Detalle from "./Detalle";

const Proyectos = () => {
  const [proyectosData, setProyectosData] = useState([]);
  const [dataInc20, setDataInc20] = useState([]);
  const [dataInc21, setDataInc21] = useState([]);
  const [dataInc22, setDataInc22] = useState([]);
  const [dataSello21, setDataSello21] = useState([]);
  const [dataDeTodos, setDataDeTodos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const allNewData = [];
    const newDataInc2020 = Data["INCUBADORA CREATIVA 2020"].map((item) => ({
      ...item,
      tipo: "Incubadora 2020",
    }));
    const newDataInc2021 = Data["INCUBADORA CREATIVA 2021"].map((item) => ({
      ...item,
      tipo: "Incubadora 2021",
    }));
    const newDataInc2022 = Data["INCUBADORA CREATIVA 2022"].map((item) => ({
      ...item,
      tipo: "Incubadora 2022",
    }));
    const newDataSello2021 = Data["SELLO DE DISEÑO NEUQUINO 2021"].map(
      (item) => ({
        ...item,
        tipo: "Sello 2021",
      })
    );
    setDataInc20(newDataInc2020);
    setDataInc21(newDataInc2021);
    setDataInc22(newDataInc2022);
    setDataSello21(newDataSello2021);

    newDataInc2020.map((item) => allNewData.push(item));
    newDataInc2021.map((item) => allNewData.push(item));
    newDataInc2022.map((item) => allNewData.push(item));
    newDataSello2021.map((item) => allNewData.push(item));

    setDataDeTodos(allNewData);

    setProyectosData(allNewData);
    console.log(proyectosData);
  }, []);

  const handleFiltrado = (tipo) => {
    setProyectosData([]);
    setCargando(true);
    switch (tipo) {
      case "inc-2020":
        setTimeout(() => {
          setCargando(false);
          setProyectosData(dataInc20);
        }, 1000);

        break;

      case "inc-2021":
        setTimeout(() => {
          setCargando(false);
          setProyectosData(dataInc21);
        }, 1000);

        break;

      case "inc-2022":
        setTimeout(() => {
          setCargando(false);
          setProyectosData(dataInc22);
        }, 2100);

        break;

      case "sello-2021":
        setTimeout(() => {
          setCargando(false);
          setProyectosData(dataSello21);
        }, 1000);

        break;
      case "todos":
        setTimeout(() => {
          setCargando(false);
          setProyectosData(dataDeTodos);
        }, 1000);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="grid grid-row-3 place-items-center   w-11/12 mx-auto min-h-screen">
        <h1 className="text-3xl py-4 text-center font-bold underline decoration-wavy underline-offset-[10px] decoration-[#E0A1BE]">
          Proyectos CDNEU 2020-2022
        </h1>
        {!cargando && (
          <div className="w-10/12 mx-auto font-bold mt-4 grid md:grid-cols-4 grid-cols-2 grid-row-3 gap-2 place-items-center ">
            <h4
              onClick={() => handleFiltrado("inc-2020")}
              className="badge p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-accent"
            >
              Incubadora 2020
            </h4>
            <h4
              onClick={() => handleFiltrado("inc-2021")}
              className="badge p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-info"
            >
              Incubadora 2021
            </h4>
            <h4
              onClick={() => handleFiltrado("inc-2022")}
              className="badge p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-success"
            >
              Incubadora 2022
            </h4>
            <h4
              onClick={() => handleFiltrado("sello-2021")}
              className="badge  p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-warning"
            >
              Sello de diseño 2021
            </h4>
            <h4
              onClick={() => handleFiltrado("todos")}
              className="badge p-4 rounded-none col-span-2 md:col-span-4 md:w-2/5 w-full bg-[url('./assets/banner2.png')] bg-bottom-left hover:bg-right-top border-none text-neutral font-bold duration-500 transition-all cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg mx-auto"
            >
              Ver todos
            </h4>
          </div>
        )}
        {cargando && (
          <>
            <img className="w-24 animate-pulse" src={logo} alt="spiner" />
            <h1 className="text-4xl text-primary font-bold">Cargando...</h1>
          </>
        )}
        <div className="grid md:grid-cols-3  md:gap-10 w-11/12 place-items-center mx-auto gap-6 my-6">
          {proyectosData.map((proyect, i) => (
            <Proyecto
              key={i}
              nombre={proyect["EMPRENDIMIENTO "]}
              emprendedor={proyect["EMPRENDEDOR/A"]}
              localidad={proyect["LOCALIDAD "]}
              info={proyect["INFORMACIÓN "]}
              instagram={proyect["INSTAGRAM"]}
              web={proyect["WEB"]}
              tipo={proyect["tipo"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyectos;
