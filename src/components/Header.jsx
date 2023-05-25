import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/logomaria2.png";

function Header() {
  return (
    <>
      {" "}
      <header className="bg-navbar ">
        <div className="container mx-auto px-4 py-4 md:py-4 md:justify-between items-center flex-col md:flex-row ">
          <div className="flex items-center md:mr-24 mb-2 md:mb-0 ">
            <img
              src={Logo}
              alt="Logo de l'épicerie ardéchoise"
              className="h-36 md:h-56 w-32 md:w-48 rounded-xl mx-auto hover:scale-105 transition-all duration-1000 "
            />
          </div>
          <nav className=" mt-4 md:mt-0 sm:mx-4 mb-2 ">
            <ul className="h-12  cursor-pointer flex flex-row  justify-center space-x-3 lg:space-x-56 text-black text-md md:text-xl font-semplicita font-bold tracking-wider ">
              <li>
                <Link
                  activeClass="active"
                  to="epicerie"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className=" hover:text-black transition duration-300  "
                >
                  <span className="hidden 2xl:block rounded-full bg-red-100  hover:scale-105 transition duration-1000 p-4 border-2 border-black shadow-xl  ">
                    Epicerie fine
                  </span>
                  <span className="2xl:hidden rounded-xl custom-sm-text  bg-red-100  hover:scale-105 transition duration-1000 p-2 border-2 border-black shadow-lg  ">
                    Epicerie
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="traiteur"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className=" hover:text-black transition duration-300  "
                >
                  <span className="hidden 2xl:block rounded-full bg-red-100  hover:scale-105 transition duration-1000 p-4 border-2 border-black shadow-xl  ">
                    Traiteur
                  </span>
                  <span className="2xl:hidden rounded-xl custom-sm-text bg-red-100 hover:scale-105 transition duration-1000 p-2 border-2 border-black  shadow-lg ">
                    Traiteur
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="petiterestauration"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className=" hover:text-black transition duration-300  "
                >
                  <span className="hidden 2xl:block rounded-full bg-red-100  hover:scale-105 transition duration-1000 p-4 border-2 border-black  shadow-xl  ">
                    Petite restauration
                  </span>
                  <span className="2xl:hidden rounded-xl custom-sm-text bg-red-100  hover:scale-105 transition duration-1000 p-2 border-2 border-black  shadow-lg ">
                    Restauration
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="salon"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className=" hover:text-black transition duration-300  "
                >
                  <span className="hidden 2xl:block rounded-full bg-red-100  hover:scale-105 transition duration-1000 p-4 border-2 border-black  shadow-xl  ">
                    Salon chez Maria
                  </span>
                  <span className="2xl:hidden rounded-xl custom-sm-text bg-red-100  hover:scale-105 transition duration-1000 p-2 border-2 border-black  shadow-lg ">
                    Salon
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
