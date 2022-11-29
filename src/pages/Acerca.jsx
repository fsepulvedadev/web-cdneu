import React from "react";

const Acerca = () => {
  return (
    <div className="shadow-xl bg-[url('./assets/placeholder3.png')] bg-contain">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 h-auto">
            <h1 className="font-bold text-4xl mb-10 text-neutral underline decoration-wavy underline-offset-[10px] decoration-[#F04D2E]">
              Sobre CDNEU
            </h1>
            <div className="flex flex-col justify-center items-center  w-full mx-auto">
              <p className="lg:w-2/3 md:ml-20 leading-relaxed text-base text-success-content bg-success rounded-bl-lg rounded-br-lg rounded-tl-lg p-2 self-start md:my-4 my-2">
                EL <b>CDNEU</b> tiene como misión impulsar la dinámica de los
                negocios y la competitividad de las empresas, generar y
                acompañar nuevos emprendimientos creativos, y aportar la
                innovación a los espacios y servicios públicos, para mejorar la
                calidad de vida de la gente en los diferentes territorios de la
                provincia, a través de un manejo efectivo del diseño y la
                innovación, fortaleciendo la identidad local, aportando al
                equilibrio social y a la sostenibilidad ambiental, construyendo
                al desarrollo económico, social y cultural de la Provincia de
                Neuquén.
              </p>
              <p className="lg:w-2/3 h-fit p-2 inline-flex self-end  leading-relaxed text-base bg-primary text-primary-content rounded-bl-lg rounded-br-lg rounded-tr-lg md:my-4 my-2">
                En vistas de ello, cuenta con una estrategia provincial enfocada
                en el diseño y la innovación como impulsores del desarrollo
                local, buscando a partir de una fuerte articulación
                público-privada generar empleo sostenible en la comunidad de
                creativos y creativas de la provincia.
              </p>
              <p className="lg:w-2/3 h-fit p-2  leading-relaxed text-base bg-info text-info-content rounded-bl-lg rounded-br-lg rounded-tl-lg md:my-4 my-2">
                El <b>CDNEU</b> surgió de los intercambios que desde hace años
                COPADE realiza junto con el ecosistema emprendedor y creativo
                provincial, siendo una respuesta pensada, creada y puesta al
                servicio de las necesidades del sector.
              </p>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-neutral ml-10 md:underline  decoration-wavy underline-offset-[10px] decoration-[#86BF4C] mb-6">
            Lineas de Trabajo
          </h1>
          <div className="flex flex-wrap bg-warning rounded-xl">
            <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Incubadora Creativa
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Es un proceso de acompañamiento personalizado de los
                emprendimientos creativos para potenciarlos y promover su
                desarrollo exitoso. Se les brindan herramientas, capacitación
                (finanzas, administración, marketing, comercialización, etc.) y
                acompañamiento para garantizar su crecimiento y éxito. Segunda
                edición: 2021.
              </p>
              <a
                href="https://www.copade.gob.ar/incubadora-creativa/"
                target="_blank"
                className="text-primary inline-flex items-center"
              >
                Mas informacion
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Programa de Financiamiento CFI – Neuquén CREA
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Línea de financiamiento crediticio CFI para creativas y
                creativos de la provincia de Neuquén.
              </p>
              <a
                href="https://www.copade.gob.ar/linea-de-industrias-creativas/"
                target="_blank"
                className="text-accent inline-flex items-center"
              >
                Mas informacion
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Sello de Diseño Neuquino 2021
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Certificación de diseño provincial que busca distinguir y
                potenciar al diseño neuquino, teniendo en cuenta una serie de
                criterios culturales, identitarios, formales, funcionales y
                tecnológicos. Próxima convocatoria: Febrero 2021.
              </p>
              <a
                href="https://www.copade.gob.ar/catalogo-diseno/"
                target="_blank"
                className="text-success inline-flex items-center"
              >
                Mas informacion
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Consultorios de Creatividad
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Espacios de asesoramiento para la incorporación de diseño como
                factor de diferenciación e innovación en los modelos de negocios
                de emprendimientos creativos.
              </p>
              <a
                href="https://www.copade.gob.ar/innovar-y-crecer-2/"
                target="_blank"
                className="text-info inline-flex items-center"
              >
                Mas informacion
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Programas de Formación y Capacitación para Emprendimientos
                Creativos
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Ciclos de formación y capacitación (virtual y/o presencial) para
                potenciar las capacidades del sector emprendedor creativo por
                medio de herramientas de diseño, modelo de negocios, marketing,
                coaching, etc. Tercera edición 2021.
              </p>
              <a
                href="https://www.copade.gob.ar/finalizo-la-capacitacion-del-cdneu-para-emprendimientos-creativos/"
                target="_blank"
                className="text-secondary inline-flex items-center"
              >
                Mas informacion
                <svg
                  fill="none"
                  stroke="#F04D2E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <h1 className="text-4xl  my-6 font-bold text-neutral ml-10 md:underline text-center  decoration-wavy underline-offset-[10px] decoration-[#86BF4C] mb-6">
            Eventos
          </h1>

          <div className="bg-info text-info-content rounded-xl">
            <section class="text-info-content body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col"></div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <iframe
                        className="rounded-xl w-full h-full"
                        src="https://www.youtube.com/embed/zfr_e5SbKCs"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <h2 class="text-xl font-medium title-font text-neutral mt-5">
                      Sello de Diseño
                    </h2>
                    <p class="text-base leading-relaxed mt-2">
                      Entrevista que le realizaron en Postales Neuquinas a la
                      directora de creatividad del Copade Neuquén, Sofía
                      Cantoni. Sobre el cierre de la convocatoria por el
                      #SelloDeDiseñoNeuquino y como se instrumentará el proceso
                      de evaluación y distinción por parte del Comité de
                      Expertos. Hay más de 50 propuestas inscritas.
                    </p>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 ">
                      <iframe
                        className="rounded-xl w-full h-full"
                        src="https://www.youtube.com/embed/peaS8gJp8kI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <h2 class="text-xl font-medium title-font text-neutral mt-5">
                      Capacitación a emprendedoras y emprendedores.
                    </h2>
                    <p class="text-base leading-relaxed mt-2">
                      La propuesta ofrece capacitación y asesoramiento
                      personalizado a emprendedoras y emprendedores del sector
                      creativo de la Provincia del Neuquén.
                    </p>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <iframe
                        className="rounded-xl w-full h-full"
                        src="https://www.youtube.com/embed/obl_SNsdm4g"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <h2 class="text-xl font-medium title-font text-neutral mt-5">
                      Fomento de las Industrias creativas
                    </h2>
                    <p class="text-base leading-relaxed mt-2">
                      2° Aniversario del Centro de Diseño, Creatividad e
                      Innovación del Neuquén (CDNEU), una iniciativa puesta en
                      marcha el 14 de junio de 2019 por el Gobernador Omar
                      Gutiérrez.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acerca;
