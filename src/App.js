import React, { useState } from "react";
import Map from "./Map";
import { scroller } from "react-scroll";
import Arrow from "./assets/arrow.png";

import Logo from "./assets/logo.png";
import Armoire from "./assets/armoiremaria.png";
import Traiteur from "./assets/banquemaria.png";
import Salade from "./assets/bowl.png";
import Salon from "./assets/salonmaria.png";
import Instagram from "./assets/instagram.png";
import Facebook from "./assets/facebook.png";

import Front from "./assets/devanturemaria.png";
import Boutique from "./assets/boutiquemaria.png";
import Fenetre from "./assets/fenêtremaria.png";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Envoyer les données du formulaire vers le serveur
  }
  return (
    <div>
      <header className="bg-red-400">
        <div className="container mx-auto px-4 py-4 md:py-8 flex justify-between items-center">
          <img
            src={Logo}
            alt="Logo de l'épicerie ardéchoise"
            className="h-20 md:h-24 w-20 md:w-24 rounded-full items-center"
          />
          <h1 className="font-cinzel justify-center text-2xl md:text-4xl text-gray-800 semi-bold ">
            CHEZ MARIA 💜
          </h1>

          <nav>
            <ul className="hidden md:flex space-x-8 text-gray-200 text-sm uppercase">
              <li>
                <a href="#">À propos</a>
              </li>
              <li>
                <a href="#">Produits</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-red-100 font-cinzel">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className=" text-xl md:text-3xl text-gray-800 text-center mb-4 md:mb-8">
            Bienvenue dans la première épicerie Ardéchoise de Lyon !{" "}
          </h1>

          <div className="flex h-1/4 md:h-min-1/3 items-center justify-center">
            <div className="group h-96  w-80 [perspective:1000px] md:mr-48 mr-4">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={Boutique}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-lg ">Epicerie Fine</h1>
                    <p className="text-lg">Traiteur</p>
                    <p className="text-base">
                      Petite restauration <br></br>Salon de thé
                    </p>
                    <button
                      className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                      onClick={() =>
                        scroller.scrollTo("footer", { smooth: true })
                      }
                    >
                      Contact{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="group h-96 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={Fenetre}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-lg ">Nous vous accueillons</h1>
                    <p className="text-lg">du lundi au samedi</p>
                    <p className="text-base ">
                      de 10 heures <br></br> à 19 heures 30
                    </p>
                    <button
                      className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                      onClick={() =>
                        scroller.scrollTo("footer", { smooth: true })
                      }
                    >
                      Contact{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-lg text-center text-gray-700 mb-4 md:my-12 md:mx-96 my-8  font-mono">
            Installée au 21 Cours Vitton dans le 6ème arrondissement de Lyon,
            Chez Maria vous ouvre les portes de l’Ardèche. Nous sommes fiers de
            vous faire découvrir ou redécouvrir, l’espace d’un instant, les
            trésors que nous offre ce magnifique département.
          </p>
          <img
            src={Arrow}
            alt="Scroll to about section"
            className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse"
            onClick={() => scroller.scrollTo("about", { smooth: true })}
          />
          <h1 className=" text-xl md:text-3xl text-gray-800 text-center mb-4 md:mb-8">
            Découvrez ...{" "}
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 mt-24 "
            id="about"
          >
            <div className="rounded-lg overflow-hidden shadow-lg mb-4 md:mb-0">
              <img
                src={Armoire}
                alt="Produits à base de châtaigne"
                className="w-full h-1/2 md:h-1/2 object-cover hover:brightness-105 hover:opacity-75 "
              />

              <div className="px-4 py-4   ">
                <h2 className="text-sm md:text-lg font-bold mb-2 ">
                  L'épicerie fine{" "}
                </h2>
                <p className="text-gray-700 text-sm md:text-base font-mono ">
                  Vous retrouverez ici le meilleur de la gastronomie ardéchoise.{" "}
                  <br></br>
                  <br></br>A travers une multitude de produits proposés, à
                  l’instar de terrines, tartinades et autres légumes
                  lacto-fermentés, vous profiterez d’un large choix de
                  condiments et de biscuits salés, d’une variété de vins fins et
                  de bières artisanales uniques.<br></br>
                  <br></br> La partie sucrée n’est pas en reste avec un
                  assortiment de crèmes et purées de marron, de biscuits et
                  autres gourmandises sélectionnées avec soin auprès des
                  meilleurs artisans Ardéchois. <br></br> <br></br>Si vous êtes
                  à la recherche d'un cadeau original, notre épicerie fine saura
                  répondre à vos besoins.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4 md:mb-0">
              <img
                src={Traiteur}
                alt="Vin de la région"
                className="w-full h-1/2 md:h-1/2 object-cover hover:brightness-105 hover:opacity-75"
              />
              <div className="px-4 py-4">
                <h2 className="text-sm md:text-lg font-bold mb-2">Traiteur </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Nous vous proposons de découvrir à travers nos produits frais
                  le savoir-faire ancestral de nos producteurs, auprès desquels
                  nous nous fournissons directement.<br></br>
                  <br></br> Découvrez les authentiques caillettes ardéchoises
                  mais aussi les mini caillettes aux saveurs de saison inédites,
                  les criques, le grilloton, la jambonette et tout un
                  assortiment de charcuterie traditionnelle.<br></br>
                  <br></br> Vous trouverez de plus un large choix de fromages
                  emblématiques de ce terroir Nous élaborons également des
                  plateaux apéritifs sur mesure pour tous vos évènements
                  personnels et professionnels
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={Salade}
                alt="Fromages de la région"
                className="w-full h-1/2 md:h-1/2 mx-auto rounded-xl object-cover hover:brightness-105 hover:opacity-75"
              />
              <div className="px-4 py-4">
                <h2 className="text-sm md:text-lg font-bold mb-2 ">
                  Petite restauration{" "}
                </h2>
                <p className="text-gray-700 text-sm md:text-base md:h-full">
                  Pour la pause du midi, nous confectionnons de généreux
                  sandwichs fermiers et salades en utilisant les produits frais
                  que nous avons à notre disposition, au gré des saisons et de
                  nos inspirations. <br></br>
                  <br></br> Tout au long de la journée, nous vous proposons
                  aussi un assortiment de dessert maison traditionnels, comme la
                  mousse et le fondant à la chataîgne, nos delicieux pavés
                  amandes à la myrtille ou à la framboise ainsi que d’autres
                  recettes d’antan.
                </p>
              </div>
            </div>
          </div>
          <img
            src={Arrow}
            alt="Scroll to about section"
            className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse my-8"
            onClick={() => scroller.scrollTo("salon", { smooth: true })}
          />
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-2 mt-12 md:mt-12">
            Et aussi ...{" "}
          </h1>
          <div
            id="salon"
            className="rounded-lg mt-8 md:mt-24 flex-col justify-center mx-auto overflow-hidden shadow-lg mb-4 md:mb-12 md:flex md:flex-row-reverse"
          >
            <div className="px-auto py-auto md:w-1/5 mx-auto my-auto">
              <h2 className="text-sm md:text-lg font-bold mb-2">
                Salon de Maria
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Venez profitez d’une pause gourmande dans le salon de Maria à
                toute heure de la journée, et découvrez nos sélections de thés,
                cafés et autres boissons artisanales
              </p>
            </div>
            <img
              src={Salon}
              alt="Salon de Maria"
              className="w-full md:w-1/5 h-1/3 md:h-1/3 mx-auto mb-24 mt-4 md:mb-12 rounded-xl object-cover hover:brightness-105 hover:opacity-75"
            />
          </div>
        </div>
      </main>
      <div className="flex flex-col md:flex-row mx-auto md:gap-48 bg-red-100 ">
        <div className="w-full mx-auto md:w-1/3 mb-8 md:mb-0">
          <div className="w-full h-96 relative rounded-xl mb-44 md:mb-44">
            <h2 className="text-lg md:text-3xl font-sans mb-2 text-center">
              Nous trouver :{" "}
            </h2>

            <Map />
          </div>
        </div>
        <div
          id="salon"
          className="w-full md:w-1/3 mx-auto rounded-xl mt-4 md:mt-24 overflow-hidden shadow-lg mb-4 md:mb-12 flex items-center bg-red-50"
        >
          <div className="md:w-96 flex-col text-center mx-auto">
            <h2 className="text-lg md:text-3xl font-sans mb-2">Contact :</h2>
            <p className="text-gray-700 text-sm md:text-2xl">
              21 Cours Vitton <br></br> 69006 Lyon <br></br>TEL : 04 76 71 67 54{" "}
              <br></br>Lundi au samedi : 10h30 – 19h30 <br></br>Dimanche :
              fermée
            </p>
            <div className="flex md:ml-14">
              <a href="https://www.instagram.com/chez.maria.lyon/">
                <img
                  className="w-8 h-8 md:w-12 md:h-12 mx-12 mt-4 md:mt-8 mb-4"
                  src={Instagram}
                  alt="Instagram logo"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100074332740719">
                <img
                  className="w-8 h-8 md:w-12 md:h-12 mt-4 md:mt-8 mb-4"
                  src={Facebook}
                  alt="Facebook logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 font-cinzel">
        <form
          className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-0 md:w-1/2 md:mx-auto "
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-center my-4">
            Une demande particulière ?
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Adresse e-mail
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <footer
        className="bg-gray-900 text-white text-center py-4 font-mono"
        id="footer"
      >
        <h1 className="text-xl">Contact</h1>
        <p>
          21 Cours Vitton <br></br> 69006 Lyon <br></br>TEL : 04 76 71 67 54{" "}
          <br></br>Lundi au samedi : 10h30 – 19h30 <br></br>Dimanche : fermée
        </p>
        <p>© 2023 Chez Maria - Lyon</p>
      </footer>
    </div>
  );
}
export default Home;
