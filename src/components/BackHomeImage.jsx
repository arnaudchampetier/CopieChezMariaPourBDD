import React from "react";
import BackHome from "../assets/home2.png";
import { Link, animateScroll as scroll } from "react-scroll";

function BackHomeImage() {
  return (
    <>
      {" "}
      <Link
        className="fixed bottom-4 left-4 p-2  rounded-full text-white hover:scale-105 transition-all duration-300  z-50 "
        to="home"
        smooth={true}
        duration={1500}
      >
        <img
          className="h-14 w-14 lg:w-18 lg:h-18 cursor-pointer relative"
          src={BackHome}
          alt="Scroll to bottom "
        />
      </Link>
    </>
  );
}

export default BackHomeImage;
