import { useContext } from "react";
import place1 from "../assets/placeholder1.png";
import place2 from "../assets/placeholder2.png";
import { TfiWorld } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AppContext } from "../context/Provider";

const Proyecto = ({
  nombre,
  emprendedor,
  localidad,
  info,
  tipo,
  instagram,
  web,
  logo,
  img1,
  img2,
  img3,
  categoria,
}) => {
  const context = useContext(AppContext);
  const { handleSeleccion } = context;

  return (
    <div
      onClick={() => {
        const newSeleccionado = {
          nombre: nombre,
          emprendedor: emprendedor,
          localidad: localidad,
          info: info,
          instagram: instagram,
          web: web,
          logo,
          img1,
          img2,
          img3,
          categoria: categoria,
        };
        handleSeleccion(newSeleccionado);
      }}
      className="card h-[600px] md:w-full bg-base-100 shadow-xl rounded-none rounded-bl-lg rounded-br-lg rounded-tl-lg cursor-pointer hover:scale-105 duration-500 hover:shadow-warning"
    >
      <figure>
        <img
          src={logo ? logo : place1}
          className="w-[300px] h-[300px]"
          alt="imagen"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <div
          className={`badge ${
            tipo === "Incubadora 2020"
              ? "badge-accent"
              : tipo === "Incubadora 2021"
              ? "badge-info"
              : tipo === "Incubadora 2022"
              ? "badge-success"
              : "badge-warning"
          } badge-secondary`}
        >
          {tipo}
        </div>
        <div className="flex flex-col">
          <p className="flex items-center">
            <BsFillPersonFill className="mr-2 text-primary" /> {emprendedor}
          </p>
          <p className="flex items-center">
            <IoLocationSharp className="mr-2 text-success" />
            {localidad}
          </p>
        </div>
        <p>
          {`${String(info).substring(0, 200)} ...`} {/* {info} */}
        </p>
        <div className="flex justify-end items-center my-2">
          {web && (
            <a className="mx-1 text-2xl text-accent-focus" href={web}>
              <TfiWorld />
            </a>
          )}
          {instagram && (
            <a className="mx-1 text-2xl text-secondary" href={instagram}>
              <FiInstagram />
            </a>
          )}
        </div>
        <div className="card-actions justify-end">
          <div className="w-full flex items-center justify-center">
            {categoria == "Producto" ? (
              <div className="badge badge-accent">Producto</div>
            ) : categoria == "Servicio" ? (
              <div className="badge badge-success">Servicio</div>
            ) : categoria == "Servicio/Producto" ? (
              <>
                <div className="badge badge-accent">Producto</div>
                <div className="badge badge-success ml-2">Servicio</div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
