import portada from "../assets/catalogo-portada.jpg";
import Carrousel from "../components/Carrousel";
import { FiDownloadCloud } from "react-icons/fi";

const Sello = () => {
  return (
    <div className="shadow-xl bg-[url('./assets/placeholder3.png')] bg-contain p-2">
      <main className="container mx-auto my-10">
        <h1 className="text-3xl text-center my-6 font-bold underline decoration-wavy underline-offset-[7px] decoration-[#86BF4C]">
          Propuestas Distinguidas 2021
        </h1>
        <div className="grid md:grid-cols-4 place-items-center ">
          <div className="md:col-span-2 mr-2 ">
            <p className="p-6 bg-warning text-warning-content my-2 rounded-xl shadow-xl">
              El catálogo corresponde al resultado de la primera edición de la
              convocatoria del <b>Sello de Diseño Neuquino</b> , en la que
              fueron distinguidos 14 productos y servicios de diseño
              relacionados al sector creativo neuquino. Es una de las
              herramientas a través de las cuales el gobierno de la Provincia
              del Neuquén reconoce a las personas emprendedoras con el objetivo
              de potenciar, visibilizar y destacar propuestas de diseño locales.
            </p>
            <p className="p-6 bg-info text-info-content my-2 rounded-xl shadow-xl">
              Las propuestas seleccionadas tienen a disposición diversas
              herramientas para seguir fortaleciendo su negocio entre las que se
              cuentan: formar parte del catálogo digital de productos y
              servicios distinguidos, participar en espacios de capacitación,
              difusión, promoción y comercialización, recibir asesoramiento
              técnico y financiero personalizado, así como la participación en
              eventos sectoriales organizados por la Secretaría del COPADE.
            </p>
          </div>
          <img
            className="md:w-full w-full h-auto md:h-96 rounded-xl md:col-span-2 shadow-xl"
            src={portada}
            alt=""
          />
        </div>

        <div className="bg-accent p-4 shadow-xl rounded-xl flex flex-col my-6">
          <div className="flex md:flex-row flex-col items-center ">
            <Carrousel />
            <p className="text-accent-content md:w-1/3 md:p-4 p-1 md:leading-7">
              Se proyecta que la marca <b>Sello de Diseño Neuquino</b> se
              convierta en una referencia clave para el público consumidor, el
              turismo, la industria, el sector público, entre otros, por la cual
              ciertos productos y servicios son y serán distinguidos a partir de
              los valores que otorga el diseño y su incidencia en el entramado
              social, cultural y productivo. El catálogo digital con los 14
              productos y servicios seleccionados en la edición 2021 ya está
              disponible para descargar en el siguiente enlace.
            </p>
          </div>
          <a
            className="btn md:w-2/4 mx-auto my-5 md:text-lg text-white"
            href="./assets/catalogo-2021.pdf"
            download="Catalogo Sello de Diseño Neuquino 2021"
          >
            Descargar Catalogo
            <FiDownloadCloud className="text-white ml-2 text-xl" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Sello;
