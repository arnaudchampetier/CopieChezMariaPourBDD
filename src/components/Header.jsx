import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/logomaria2.png";
import BackHome from "../assets/home2.png";
import { useLocation } from "react-router-dom";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const [shouldHandleScroll, setShouldHandleScroll] = useState(true);

  const handleScrollTop = () => {
    if (window.pageYOffset === 0) {
      setIsSticky(false);
      setActiveItem(null);
    }
  };

  const handleScroll = () => {
    if (shouldHandleScroll) {
      // Votre logique handleScroll ici
      const scrollTop = window.pageYOffset;
      const epicerieSection = document.getElementById("epicerie");
      const traiteurSection = document.getElementById("traiteur");
      const petiterestaurationSection =
        document.getElementById("petiterestauration");
      const salonSection = document.getElementById("salon");
      const threshold = 200;

      const epicerieOffset = epicerieSection.offsetTop - threshold;
      const traiteurOffset = traiteurSection.offsetTop - threshold;
      const petiterestaurationOffset =
        petiterestaurationSection.offsetTop - threshold;
      const salonOffset = salonSection.offsetTop - threshold;

      if (scrollTop >= epicerieOffset && scrollTop < traiteurOffset) {
        setActiveItem("epicerie");
      } else if (
        scrollTop >= traiteurOffset &&
        scrollTop < petiterestaurationOffset
      ) {
        setActiveItem("traiteur");
      } else if (
        scrollTop >= petiterestaurationOffset &&
        scrollTop < salonOffset
      ) {
        setActiveItem("petiterestauration");
      } else if (scrollTop >= salonOffset) {
        setActiveItem("salon");
      } else {
        setActiveItem(null);
      }

      setIsSticky(scrollTop > threshold);
    }
  };

  const handleClick = (itemId) => {
    if (activeItem === itemId) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
      setIsSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [shouldHandleScroll]);

  useEffect(() => {
    // Désactiver handleScroll lorsque vous êtes sur la page des mentions légales
    if (location.pathname === "/mentionslegales") {
      setShouldHandleScroll(false);
    } else {
      setShouldHandleScroll(true);
    }
  }, [location]);

  return (
    <>
      <header className="bg-navbar" id="home">
        <div className=" mx-auto px-4 py-4 md:py-4 md:justify-between items-center flex-col md:flex-row ">
          <div className="flex items-center md:mr-24 mb-2 md:mb-0 ">
            <img
              src={Logo}
              alt="Logo de l'épicerie ardéchoise"
              className="h-36 cursor-pointer md:h-56 w-32 md:w-48 rounded-xl mx-auto hover:scale-105 transition-all duration-1000 "
              onClick={() => scroll.scrollToTop()}
            />
          </div>
          <nav
            className={`mt-4 md:mt-0 mb-2 ${
              isSticky ? "sticky bg-white sticky-nav sticky-compense" : ""
            }`}
          >
            <ul className="h-12  px-8 mt-8 sm:mt-8 md:mt-10 lg:mt-9 xl:mt-8 2xl:mt-8 cursor-pointer flex flex-row  justify-center space-x-2 md:space-x-16 lg:space-x-38 xl:space-x-44 text-gray-700 text-md md:text-xl font-larken uppercase font-bold tracking-wider ">
              <li className="hidden md:block">
                <Link
                  className="text-white transition-all duration-300 z-50"
                  to="home"
                  smooth={true}
                  duration={1500}
                >
                  <img
                    className="h-18 w-18 2xl:h-20 2xl:w-20 xl:h-14 xl:w-14 lg:h-12 lg:w-12 md:h-10 md:w-10  sm:h-6 sm:w-6  lg:-mt-2 xl:-mt-2 cursor-pointer hover:scale-110 sm:-mt-2 md:-mt-2   2xl:-mt-4"
                    src={BackHome}
                    alt="Scroll to bottom"
                  />
                </Link>
              </li>
              <li
                className={`hidden xl:block  uppercase relative cursor-pointer transition-all duration-500
                     before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 
                     before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
                      before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 hover:before:w-full hover:before:opacity-100${
                        activeItem === "epicerie" ? "active" : ""
                      }`}
              >
                <Link
                  activeClass="active"
                  to="epicerie"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-black hover:text-xl transition duration-300"
                  onClick={() => handleClick("epicerie")}
                >
                  <span
                    className={`
                       ${
                         activeItem === "epicerie" ? "epicerie-fine active" : ""
                       }`}
                  >
                    Epicerie fine
                  </span>
                  <span
                    className={`2xl:hidden rounded-xl custom-sm-text hover:scale-105 transition duration-1000 ${
                      activeItem === "epicerie" ? "epicerie-fine active" : ""
                    }`}
                  >
                    Epicerie
                  </span>
                </Link>
              </li>
              <li className={`${activeItem === "traiteur" ? "active" : ""}`}>
                <Link
                  activeClass="active"
                  to="traiteur"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-black hover:text-2xl transition duration-300"
                  onClick={() => handleClick("traiteur")}
                >
                  <span
                    className={`hidden 2xl:block hover:scale-105  uppercase relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 hover:before:w-full hover:before:opacity-100 ${
                      activeItem === "traiteur" ? "traiteur active" : ""
                    }`}
                  >
                    Traiteur{" "}
                  </span>
                  <span
                    className={`2xl:hidden rounded-xl custom-sm-text hover:scale-105 transition duration-1000 ${
                      activeItem === "traiteur" ? "traiteur active" : ""
                    }`}
                  >
                    Traiteur
                  </span>
                </Link>
              </li>
              <li
                className={`${
                  activeItem === "petiterestauration" ? "active" : ""
                }`}
              >
                <Link
                  activeClass="active"
                  to="petiterestauration"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-black hover:text-2xl transition duration-300"
                  onClick={() => handleClick("petiterestauration")}
                >
                  <span
                    className={`hidden 2xl:block hover:scale-105  uppercase relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 hover:before:w-full hover:before:opacity-100 ${
                      activeItem === "petiterestauration"
                        ? "petiterestauration active"
                        : ""
                    }`}
                  >
                    Petite restauration{" "}
                  </span>
                  <span
                    className={`2xl:hidden rounded-xl custom-sm-text hover:scale-105 transition duration-1000 ${
                      activeItem === "petiterestauration"
                        ? "petiterestauration active"
                        : ""
                    }`}
                  >
                    Restauration
                  </span>
                </Link>
              </li>
              <li className={`${activeItem === "salon" ? "active" : ""}`}>
                <Link
                  activeClass="active"
                  to="salon"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:text-black hover:text-2xl transition duration-300"
                  onClick={() => handleClick("salon")}
                >
                  <span
                    className={`hidden 2xl:block hover:scale-105  uppercase relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 hover:before:w-full hover:before:opacity-100 ${
                      activeItem === "salon" ? "salon active" : ""
                    }`}
                  >
                    Salon Chez Maria
                  </span>
                  <span
                    className={`2xl:hidden rounded-xl custom-sm-text hover:scale-105 transition duration-1000 ${
                      activeItem === "salon" ? "salon active" : ""
                    }`}
                  >
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
