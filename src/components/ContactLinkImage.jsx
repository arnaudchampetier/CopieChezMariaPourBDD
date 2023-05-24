import React from "react";
import contact from "../assets/contact.png";
import { Link, animateScroll as scroll } from "react-scroll";

function ContactLinkImage() {
  return (
    <>
      {" "}
      <Link
        className="fixed bottom-4 right-4 p-2  rounded-full text-white hover:scale-105 transition-all duration-300  z-50"
        to="contact"
        smooth={true}
        duration={2000}
      >
        <img
          className="h-16 w-16 lg:w-32 lg:h-32 cursor-pointer relative"
          src={contact}
          alt="Scroll to bottom "
        />
      </Link>
    </>
  );
}

export default ContactLinkImage;
