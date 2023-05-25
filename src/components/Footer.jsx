import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="bg-red-900 text-white text-center py-4 font-semplicita"
        id="footer"
      >
        <h1 className="text-xl">Contact</h1>
        <p>
          21 Cours Vitton <br /> 69006 Lyon <br />
          TEL : 04 76 71 67 54 <br />
          Lundi au Samedi : 10h30 – 19h30 <br />
          Dimanche : fermé
        </p>
        <p>© 2023 Chez Maria - Lyon</p>
        <Link to="/mentionslegales" className="text-gray-300">
          Mentions légales
        </Link>
      </footer>
    </>
  );
}

export default Footer;
