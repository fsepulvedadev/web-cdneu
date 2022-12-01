import { Link } from "react-router-dom";
import fondo3 from "../assets/fondo-hero3.jpg";
import fondo2 from "../assets/fondo-hero2.jpg";
import fondo1 from "../assets/fondo-hero.jpeg";

import { useEffect, useState } from "react";

const Inicio = () => {
  const [fondo, setFondo] = useState("fondo3");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!fondo) {
        setFondo("fondo1");
      } else if (fondo === "fondo1") {
        setFondo("fondo2");
      } else if (fondo === "fondo2") {
        setFondo("fondo3");
      } else if (fondo === "fondo3") {
        setFondo("fondo1");
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [fondo]);

  return (
    <div className={`hero h-[85vh] shadow-xl duration-700`}>
      <img
        className={`relative w-full duration-1000 h-[85vh] brightness-50 top-0  ${
          fondo === "fondo2" ? "opacity-0 " : "opacity-100"
        } `}
        src={fondo2}
        alt=""
      />
      <img
        className={`relative w-full duration-1000 h-[85vh] brightness-50 left-0 top-0 ${
          fondo === "fondo1" ? "opacity-0 " : "opacity-100"
        } `}
        src={fondo1}
        alt=""
      />
      <img
        className={`relative w-full duration-1000 h-[85vh] brightness-50 top-0 ${
          fondo === "fondo3" ? "opacity-0" : "opacity-100"
        } `}
        src={fondo3}
        alt=""
      />
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-white z-40">
        <div className="max-w-lg">
          <div className="mb-4">
            <h1 className="md:text-8xl text-6xl tracking-wider font-bold">
              CDNEU
            </h1>
            <p className="pb-6 uppercase text-sm">
              Centro de diseño, creatividad <br /> e innovacion del neuquen
            </p>
          </div>
          <p className="py-6">
            El Centro de Diseño, Creatividad e Innovación es una propuesta
            innovadora de COPADE destinada al fortalecimiento e impulso de las
            industrias creativas en la provincia del Neuquén.
          </p>
          <Link
            to={"/proyectos"}
            className="btn btn-accent bg-[url('./assets/banner2.png')] bg-cover bg-bottom-left hover:bg-right-top   border-none text-content font-bold duration-500 transition-all"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
