import React, { useState } from "react";
import "./App.css";
import Map from "./Map";
import { scroller } from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

import Arrow from "./assets/downpurple.png";

import Logo from "./assets/logomaria2.png";
import Armoire from "./assets/armoiremaria.png";
import Traiteur from "./assets/banquemaria.png";
import Salade from "./assets/bowl.png";
import Salon from "./assets/salonmaria.png";
import Instagram from "./assets/instagramblack.png";
import Facebook from "./assets/facebook1.png";

import Front from "./assets/devanturemaria.png";
import Boutique from "./assets/boutiquemaria.png";
import Fenetre from "./assets/fenêtremaria.png";
import doodle from "./assets/doodle.svg";
import contact from "./assets/contact.png";

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
      <header className="bg-navbar ">
        <div className="container mx-auto px-4 py-4 md:py-4 md:justify-between items-center flex-col md:flex-row ">
          <div className="flex items-center md:mr-24 mb-2 md:mb-0 ">
            <img
              src={Logo}
              alt="Logo de l'épicerie ardéchoise"
              className="h-28 md:h-52 w-28 md:w-48 rounded-xl mx-auto "
            />
          </div>
          <nav className=" mt-4 md:mt-0 sm:mx-4  ">
            <ul className="h-12  cursor-pointer flex flex-row md:justify-center space-x-6 lg:space-x-56 text-gray-800 text-sm md:uppercase font-semplicita font-bold tracking-wider ">
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
                  <span className="hidden md:block ">Epicerie fine</span>
                  <span className="md:hidden">Epicerie</span>
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
      <Link
        className="fixed bottom-4 right-4 p-2  rounded-full text-white hover:bg-gray-400 transition-all duration-300"
        to="contact"
        smooth={true}
        duration={2000}
      >
        <img
          className="h-16 w-16 lg:w-32 lg:h-32 animate-pulse cursor-pointer"
          src={contact}
          alt="Scroll to bottom "
        />
      </Link>

      <main className="bg-red-100 font-cinzel">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className=" text-xl md:text-3xl text-gray-800 text-center mb-4 md:mb-8 font-semplicita font-semoibold">
            Bienvenue dans la première épicerie Ardéchoise de Lyon !{" "}
          </h1>

          <div className="flex h-1/4 md:h-min-1/3 items-center justify-center cursor-pointer ">
            <div className="group h-96  w-80 [perspective:1000px] md:mr-48 mr-4">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={Boutique}
                    alt=""
                  />
                </div>
                <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center ">
                    <h1 className="text-lg ">Epicerie Fine</h1>
                    <p className="text-lg">Traiteur</p>
                    <p className="text-base">
                      Petite restauration <br></br>Salon de thé
                    </p>
                    <button
                      className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 cursor-pointor"
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
            <div className="group h-96  w-80 [perspective:1000px] md:mr-48 mr-4 ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={Front}
                    alt=""
                  />
                </div>
                <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center ">
                    <h1 className="text-lg "> Venez découvrir</h1>
                    <p className="text-lg">le meilleur</p>
                    <p className="text-base">
                      de ce que l'Ardèche <br></br>a à vous offrir!
                    </p>
                    <button
                      className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 cursor-pointor"
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
            <div className="group h-96 w-80 [perspective:1000px] hidden md:block">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 ">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 "
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-lg text-center text-gray-700 mb-4 md:my-12 lg:mx-96 my-8  font-semplicita font-semibold">
            Installée au 21 Cours Vitton dans le 6ème arrondissement de Lyon,
            Chez Maria vous ouvre les portes de l’Ardèche. Nous sommes fiers de
            vous faire découvrir ou redécouvrir, l’espace d’un instant, les
            trésors que nous offre ce magnifique département.
          </p>
          <img
            src={Arrow}
            alt="Scroll to about section"
            className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse"
            onClick={() => scroller.scrollTo("epicerie", { smooth: true })}
          />
          <h1 className=" text-xl md:text-2xl text-gray-800 font-semplicita text-center mb-8 md:mb-12 lg:mb-24">
            Découvrez ...{" "}
          </h1>
          <div
            id="epicerie"
            className=" flex flex-col  items-center mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142 "
              src={Armoire}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start bg-navbar  lg:h-142 ">
              <h5 className="lg:mb-28 mb-8 mt-8 lg:mt-24 text-2xl font-semplicita font-bold tracking-tight text-gray-900 dark:text-white ">
                Epicerie Fine{" "}
              </h5>
              <p className="mb-3 font-semplicita text-gray-900 dark:text-gray-400 font-semibold">
                Vous retrouverez ici le meilleur de la gastronomie ardéchoise.{" "}
                <br />
                <br />A travers une multitude de produits proposés, à l’instar
                de terrines, tartinades et autres légumes lacto-fermentés, vous
                profiterez d’un large choix de condiments et de biscuits salés,
                d’une variété de vins fins et de bières artisanales uniques.
                <br />
                <br />
                La partie sucrée n’est pas en reste avec un assortiment de
                crèmes et purées de marron, de biscuits et autres gourmandises
                sélectionnées avec soin auprès des meilleurs artisans Ardéchois.{" "}
                <br />
                <br />
                Si vous êtes à la recherche d'un cadeau original, notre épicerie
                fine saura répondre à vos besoins.
              </p>
            </div>
          </div>
          <div
            id="traiteur"
            className=" mt-24 lg:mt-48 bg-navbar flex flex-col  items-center mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142"
              src={Traiteur}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start ">
              <h5 className="lg:mb-28 mb-8 text-2xl font-semplicita font-bold tracking-tight text-gray-900 dark:text-white ">
                Traiteur{" "}
              </h5>
              <p className="mb-3 font-semplicita text-gray-900 dark:text-gray-400 font-semibold">
                Nous vous proposons de découvrir à travers nos produits frais le
                savoir-faire ancestral de nos producteurs, auprès desquels nous
                nous fournissons directement.
                <br />
                <br />
                Découvrez les authentiques caillettes ardéchoises mais aussi les
                mini caillettes aux saveurs de saison inédites, les criques, le
                grilloton, la jambonette et tout un assortiment de charcuterie
                traditionnelle.
                <br />
                <br />
                Vous trouverez de plus un large choix de fromages emblématiques
                de ce terroir Nous élaborons également des plateaux apéritifs
                sur mesure pour tous vos évènements personnels et
                professionnels.
              </p>
            </div>
          </div>
          <div
            id="petiterestauration"
            className=" mt-24 lg:mt-56 bg-navbar flex flex-col  items-center mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142"
              src={Salade}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start ">
              <h5 className="lg:mb-28 mb-8 text-2xl font-semplicita font-bold tracking-tight text-gray-900 dark:text-white ">
                Petite restauration{" "}
              </h5>
              <p className="mb-3 font-semplicita text-gray-900 dark:text-gray-400 font-semibold">
                Pour la pause du midi, nous confectionnons de généreux sandwichs
                fermiers et salades en utilisant les produits frais que nous
                avons à notre disposition, au gré des saisons et de nos
                inspirations. <br></br>
                <br></br> Tout au long de la journée, nous vous proposons aussi
                un assortiment de dessert maison traditionnels, comme la mousse
                et le fondant à la chataîgne, nos delicieux pavés amandes à la
                myrtille ou à la framboise ainsi que d’autres recettes d’antan.
              </p>
            </div>
          </div>

          <img
            src={Arrow}
            alt="Scroll to about section"
            className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse my-24 "
            onClick={() => scroller.scrollTo("salon", { smooth: true })}
          />
          <h1 className="text-2xl text-center md:text-2xl font-semplicita mb-2 mt-12 md:mt-12 text-gray-800">
            Et aussi ...{" "}
          </h1>
          <div
            id="salon"
            className=" mt-24 lg:mt-56 bg-purple-100 flex flex-col  items-center mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 hover:bg-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142"
              src={Salon}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start ">
              <h5 className="lg:mb-28 mb-8 text-2xl font-semplicita font-bold tracking-tight text-gray-900 dark:text-white ">
                Salon de Maria{" "}
              </h5>
              <p className="mb-3 font-semplicita text-gray-900 dark:text-gray-400 font-semibold">
                Venez profitez d’une pause gourmande dans le salon de Maria à
                toute heure de la journée, et découvrez nos sélections de thés,
                cafés et autres boissons artisanales
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-col md:flex-row mx-auto md:gap-48 bg-red-200 ">
        <div className="w-full mx-auto md:w-1/3 mb-8 md:mb-0">
          <div className="w-full h-96 relative rounded-xl mb-12 md:mb-24">
            <h2 className="text-lg md:text-3xl font-semplicita mb-4 mt-4 text-center">
              Nous trouver :{" "}
            </h2>

            <Map />
          </div>
        </div>
        <div
          id="salon"
          className="w-full md:w-1/3 h-1/3 md:h-1/3 mx-auto md:py-12 rounded-xl mt-4 md:mt-8 overflow-hidden shadow-lg mb-4 md:mb-12 flex items-center bg-red-100"
        >
          <div className="md:w-96 flex-col text-center mx-auto">
            <h2 className="text-lg md:text-3xl font-semplicita mb-8 md:mb-8  ">
              Contact :
            </h2>
            <p className="text-gray-700 text-sm md:text-2xl font-semplicita">
              21 Cours Vitton <br></br> 69006 Lyon <br></br>TEL : 04 76 71 67 54{" "}
              <br></br>Lundi au samedi : 10h30 – 19h30 <br></br>Dimanche :
              fermée
            </p>
            <div className="flex justify-around ">
              <a href="https://www.instagram.com/chez.maria.lyon/">
                <img
                  className="w-8 h-8 md:w-12 md:h-12 mt-4 md:mt-8 mb-4"
                  src={Instagram}
                  alt="Instagram logo"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100074332740719">
                <img
                  className="w-8 h-8 md:w-14 md:h-14 mt-4 md:mt-8 mb-4"
                  src={Facebook}
                  alt="Facebook logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-100 font-semplicita">
        <form
          className="bg-red-100 shadow-md rounded px-8 pt-6 pb-8 mb-0 md:w-1/2 md:mx-auto "
          onSubmit={handleSubmit}
          id="contact"
        >
          <h1 className="text-xl text-center my-4">
            Une demande particulière ?
          </h1>
          <img src={doodle} alt="" className="p-6 h-52 md:h-48 mx-auto" />
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
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <footer
        className="bg-red-900 text-white text-center py-4 font-semplicita"
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

//<h1 class="font-cinzel font-normal justify-center text-2xl md:text-4xl text-gray-900 tracking-widest md:tracking-2">
//       CHEZ MARIA
//    </h1>*/
