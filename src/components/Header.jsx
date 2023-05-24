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
              className="h-36 md:h-56 w-32 md:w-52 rounded-xl mx-auto hover:scale-105 transition-all duration-1000 "
            />
          </div>
          <nav className=" mt-4 md:mt-0 sm:mx-4  ">
            <ul className="h-12  cursor-pointer flex flex-row  justify-center space-x-6 lg:space-x-56 text-gray-800 text-sm md:uppercase font-semplicita font-bold tracking-wider ">
              <li>
                <Link
                  activeClass="active"
                  to="epicerie"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:underline hover:text-white transition duration-300  "
                >
                  <span className="hidden md:block  ">Epicerie fine</span>
                  <span className="md:hidden ">Epicerie</span>
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
                  className="hover:underline hover:text-white transition duration-300"
                >
                  <span className="hidden md:block">Traiteur</span>
                  <span className="md:hidden">Traiteur</span>
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
                  className="hover:underline hover:text-white transition duration-300"
                >
                  <span className="hidden md:block">Petite restauration</span>
                  <span className="md:hidden">Restauration</span>
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
                  className="hover:underline hover:text-white transition duration-300"
                >
                  <span className="hidden md:block">Salon chez Maria</span>
                  <span className="md:hidden">Salon</span>
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
