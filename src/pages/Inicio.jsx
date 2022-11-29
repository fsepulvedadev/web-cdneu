import { Link } from "react-router-dom";
import logo from "../assets/logo-blanco-horizontal.png";

const Inicio = () => {
  return (
    <div className="hero min-h-[80vh] bg-[url('./assets/fondo-hero.jpeg')] bg-cover bg-no-repeat bg-center shadow-xl ">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-6xl tracking-wider font-bold">CDNEU</h1>
          <p className="pb-6 uppercase text-sm">
            Centro de diseño, creatividad <br /> e innovacion del neuquen
          </p>
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
