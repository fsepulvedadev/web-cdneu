import logo from "../assets/logo-negro-horizontal.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [links, setLinks] = useState([
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Acerca de", path: "/acerca" },
  ]);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectLink, setSelectLink] = useState(false);

  return (
    <div className="w-full h-[15vh] md:grid md:grid-cols-3 grid-cols-2 md:place-items-center flex justify-between items-center bg-[url('./assets/placeholder2.png')] bg-cover bg-center shadow-lg">
      <Link to={"/"}>
        <img className="md:w-32 w-24 ml-10 md:m-0" src={logo} alt="logo" />
      </Link>

      <CgMenu
        onClick={() => {
          setOpenMenu(true);
        }}
        className={`md:hidden text-3xl mr-10 text-neutral duration-500 transition-all`}
      />
      <ul
        className={`md:flex justify-around w-full items-center font-bold hidden`}
      >
        {links.map((link) => (
          <Link
            className="hover:underline hover:decoration-wavy underline-offset-4 decoration-[#F04D2E]"
            key={link.name}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <div
        className={`absolute ${
          !openMenu ? "translate-x-[1000px] hidden" : "sm:translate-x-20 flex"
        } 
         bg-white w-9/12 rounded-bl-lg rounded-br-lg  rounded-tl-lg top-0 h-full z-10 right-0 flex-col shadow-xl transition duration-500 md:hidden`}
      >
        <CgClose
          onClick={() => {
            setOpenMenu(false);
          }}
          className={`md:hidden text-4xl mr-5 mt-5 text-neutral self-end`}
        />
        <ul className="md:hidden flex flex-col text-center w-full font-bold  rounded-xl h-full mt-24">
          {links.map((link) => (
            <Link
              onClick={() => {
                setOpenMenu(false);
              }}
              className="py-1 my-2"
              key={link.name}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
};

export default Navbar;
