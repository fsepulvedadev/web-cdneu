import { useEffect, useState } from "react";
import Proyecto from "../components/Proyecto";
import Data from "../datos.json";
import logo from "../assets/logo-spiner.png";
import Detalle from "./Detalle";

const Proyectos = () => {
  const [proyectosData, setProyectosData] = useState([]);
  const [sinResultados, setSinResultados] = useState(false);
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

  const handleBusqueda = (palabra) => {
    const value = palabra.toLowerCase().trim();
    const busqueda = dataDeTodos.filter((proyecto) => {
      if (proyecto["EMPRENDIMIENTO "].toLowerCase().indexOf(value) != -1) {
        setSinResultados(false);
        return proyecto;
      } else {
        setSinResultados(true);
      }
    });

    setProyectosData(busqueda);
    console.log(proyectosData);
  };

  return (
    <>
      <div className="grid grid-row-3 place-items-center   w-11/12 mx-auto min-h-screen">
        <h1 className="text-3xl py-4 text-center font-bold underline decoration-wavy underline-offset-[10px] decoration-[#E0A1BE]">
          Proyectos CDNEU 2020-2022
        </h1>
        {!cargando && (
          <div className=" mx-auto font-bold mt-4 grid md:grid-cols-4 grid-cols-4 md:grid-rows-3 grid-rows-4 gap-2 place-items-center w-full">
            <div className="grid md:grid-rows-1 md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-4 gap-2 md:row-span-1 row-span-2 col-span-4">
              <h4
                onClick={() => handleFiltrado("inc-2020")}
                className="badge min-w-full p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-accent"
              >
                Incubadora 2020
              </h4>
              <h4
                onClick={() => handleFiltrado("inc-2021")}
                className="badge min-w-full p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-info"
              >
                Incubadora 2021
              </h4>
              <h4
                onClick={() => handleFiltrado("inc-2022")}
                className="badge min-w-full p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-success"
              >
                Incubadora 2022
              </h4>
              <h4
                onClick={() => handleFiltrado("sello-2021")}
                className="badge min-w-full  p-4 md:text-base text-xs  rounded-none hover:scale-110 duration-300 cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg badge-warning"
              >
                Sello de diseño 2021
              </h4>
            </div>

            <h4
              onClick={() => handleFiltrado("todos")}
              className="badge p-4 rounded-none col-span-4 md:col-span-4 md:w-2/5 w-full bg-[url('./assets/banner2.png')] bg-bottom-left hover:bg-right-top border-none text-neutral font-bold duration-500 transition-all cursor-pointer rounded-bl-lg rounded-br-lg rounded-tl-lg mx-auto"
            >
              Ver todos
            </h4>
            <div className="form-control col-span-4 w-full flex justify-center">
              <div className="input-group mx-auto">
                <input
                  type="text"
                  placeholder="Buscar proyectos"
                  onChange={(e) => {
                    handleBusqueda(e.target.value);
                  }}
                  className="input input-bordered md:w-1/3 w-3/4 ml-auto focus:outline-none"
                />
                <button className="btn btn-square mr-auto bg-[url('./assets/banner2.png')] bg-top border-none bg-cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
              logo={proyect["LOGO"]}
              img1={proyect["IMG1"]}
              img2={proyect["IMG2"]}
              img3={proyect["IMG3"]}
              categoria={proyect["CATEGORÍA"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyectos;
