import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home.png";

function MentionsLegales() {
  return (
    <div
      id="mentionslegales"
      className="w-screen h-screen bg-red-100 flex flex-col items-center justify-center mx-auto p-6 text-gray-600"
    >
      <Link to="/" className="text-white flex items-center flex-col space-y-4 ">
        <img src={Home} alt="Accueil" className=" h-12 w-12 " />
        <p className="text-gray-600 text-xl font-larken">Retour au site</p>
      </Link>
      <div className="max-w-lg h-full overflow-auto">
        <h1 className="text-3xl mt-12 text-center font-larken">
          Mentions Légales
        </h1>
        <div className="mt-8 font-semplicita ">
          <p className="text-md">
            <span className="font-bold">Concept et production :</span>
            <span className="italic">
              {" "}
              Ce site est édité et diffusé par SARL Chez Maria au capital social
              de 10 000€.{" "}
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">Siège social :</span>
            <span className="italic"> 21 cours vitton 69006 Lyon. </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold"> Immatriculation au RCS :</span>
            <span className="italic"> 922 494 497 </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold"> Numéro d'identification TVA :</span>
            <span className="italic"> FR74922494497 </span>
          </p>
          <p className="text-md mt-8">
            <span className="font-bold"> Contact :</span>
            <span className="italic">
              {" "}
              téléphone : 06 76 71 67 54 <br></br> email : chezmaria@gmail.com
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">Hébergement :</span>{" "}
            <span className="italic"> Site hébergé chez : Vercel </span>
            <br />
            <br />
            <span className="font-bold">Adresse de l'hébergeur :</span>{" "}
            <span className="italic">
              Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">Protection de vos informations :</span>{" "}
            <span className="italic">
              Les données nominatives enregistrées sur ce site sont stockées et
              utilisées conformément à la loi du 6 janvier 1978 relative à
              l'informatique et aux libertés et sont réservées à l'usage
              exclusif de la boutique Chez Maria. Les utilisateurs de ce site
              disposent d'un droit d'accès, de rectification et de suppression
              des données.
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">
              Protection des mineurs et vente d'alcool :
            </span>{" "}
            <span className="italic">
              La vente d’alcool à un mineur de moins de 16 ans est strictement
              interdite (Art. L.3353-3 du Code de la santé publique).
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">Propriété intellectuelle :</span>{" "}
            <span className="italic">
              Toute reproduction ou représentation totale ou partielle de ce
              site par quelque procédé que ce soit, sans autorisation expresse,
              est interdite et constituerait une contrefaçon sanctionnée par les
              articles L.335-2 et suivants du Code de la propriété
              intellectuelle. Toute reproduction totale ou partielle des logos,
              images, scripts, code HTML, balises meta effectuée à partir des
              éléments du site sans notre autorisation expresse est prohibée au
              sens de l'article L.713-2 du Code de la propriété intellectuelle.'{" "}
            </span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">
              Directeur de la publication / Développement & optimisation :
            </span>{" "}
            <span className="italic">Arnaud Champetier</span>
          </p>

          <p className="text-md mt-8">
            <span className="font-bold">© 2023 Chez Maria - Lyon </span>{" "}
            <span className="italic">Tous droits réservés</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;
