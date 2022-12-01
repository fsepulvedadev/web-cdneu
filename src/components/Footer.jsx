import React from "react";
import copadeLogo from "../assets/copade-logo.png";
import cdNeuLogo from "../assets/logo-negro-horizontal.svg";
import neuquenProvincia from "../assets/neuquen-provincia.png";

const Footer = () => {
  return (
    <div className="w-full  bg-[url('./assets/placeholder2.png')] bg-cover bg-right flex justify-center items-center">
      <div className="w-11/12 my-4 bg-white mx-auto rounded-xl flex md:flex-row flex-col justify-around items-center py-4">
        <div className="flex items-center justify-center my-2 ml-10 ">
          <img className="invert w-16 h-16 mx-2" src={copadeLogo} alt="" />
          <img className=" w-32 mx-2" src={cdNeuLogo} alt="" />
        </div>
        <div className="text-center my-2">
          <h1 className="font-bold text-lg">Contacto</h1>
          <ul className="">
            <li>www.copade.gob.ar</li>
            <li>Antartida Argentina 1245 (CAM)</li>
            <li>Edificio 2 Piso 4 - C.P. 8300</li>
            <li>(299) 449 5661</li>
            <li>cdneu@neuquen.gov.ar</li>
          </ul>
        </div>
        <div className=" my-2">
          <img
            className="filter grayscale saturate-200 contrast-200 md:w-64 w-52"
            src={neuquenProvincia}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
