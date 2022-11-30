import { useContext, useState } from "react";
import { AppContext } from "../context/Provider";
import img1 from "../assets/JARA-1.jpg";
import img2 from "../assets/JARA-2.jpg";
import img3 from "../assets/JARA-3.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

const Detalle = () => {
  const context = useContext(AppContext);
  const { seleccionado } = context;
  const { nombre, emprendedor, localidad, info, instagram, web } = seleccionado;

  return (
    <div className=" w-full bg-white bg-[url('./assets/placeholder3.png')] bg-contain flex justify-center items-center">
      <div className="grid grid-cols-6 md:grid-rows-1 grid-rows-8 w-11/12 p-4 my-4 bg-warning  shadow-xl rounded-xl">
        <div className="md:col-span-2 col-span-6 p-2 row-span-3">
          <h1 className="md:text-4xl text-2xl text-center font-bold md:my-10 my-2 underline decoration-wavy underline-offset-[5px] decoration-[#E0A1BE]">
            {nombre}
          </h1>
          <div className="flex flex-col my-5">
            <p className="flex justify-center items-center md:my-2 md:text-base text-sm">
              <BsFillPersonFill className="mr-2 text-primary" /> {emprendedor}
            </p>
            <p className="flex justify-center items-center md:my-2 md:text-base text-sm">
              <IoLocationSharp className="mr-2 text-success" />
              {localidad}
            </p>
          </div>
          <p className="my-5">{info}</p>
        </div>
        <div className="md:col-span-4 md:row-span-2 col-span-6 row-span-4 p-1 w-full grid grid-cols-2 grid-rows-2 place-items-stretch gap-2 ">
          <div className="w-full h-full md:h-[260px] ">
            <img className=" w-full h-full rounded-xl" src={img1} alt="" />
          </div>
          <div className="w-full h-full md:h-[260px] ">
            <img className="w-full h-full  rounded-xl" src={img2} alt="" />
          </div>
          <div className="w-full h-full md:h-[260px]  col-span-2">
            <img className=" w-full h-full rounded-xl" src={img3} alt="" />
          </div>
        </div>
        <div className="col-span-6">
          <h1 className="md:text-2xl text-xl font-bold text-right my-5 mr-5 underline decoration-wavy underline-offset-[5px] decoration-[#F04D2E]">
            Contacto
          </h1>
          <div className="flex w-full justify-end">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                className="btn btn-info text-2xl mx-2 md:w-32 w-28 "
              >
                <FiInstagram />
              </a>
            )}
            {web && (
              <a
                href={web}
                target="_blank"
                className="btn btn-success text-2xl mx-2 md:w-32 w-28 "
              >
                <TfiWorld />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
