import React from "react";
import { scroller } from "react-scroll";

import Boutique from "../assets/boutiquemaria.png";
import Boutique2 from "../assets/fenêtremaria.png";

import Front from "../assets/devanturemaria.png";
import Front2 from "../assets/devanturemaria2.png";

import Fenetre from "../assets/fenêtremaria.png";
import Arrow from "../assets/downpurple.png";

import Armoire from "../assets/armoiremaria.png";
import Traiteur from "../assets/banquemaria.png";
import Salade from "../assets/bowl.png";
import Salon from "../assets/salonmaria.png";

function Main() {
  return (
    <>
      <main className="bg-red-100 font-cinzel">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className=" text-xl md:text-3xl text-gray-800 text-center mb-4 md:mb-8 font-larken ">
            Bienvenue dans la première épicerie Ardéchoise de Lyon !{" "}
          </h1>

          <div className="flex h-1/4 md:h-min-1/3 items-center justify-center cursor-pointer ">
            <div className="group h-96  w-80 [perspective:1000px] mr-4 md:mr-12 ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <style>
                  {`
        @media (max-width: 430px) {
          .boutique-image {
            display: none;
          }
        }

        @media (min-width: 431px) {
          .boutique2-image {
            display: none;
          }
        }
      `}
                </style>
                <div className="absolute inset-0">
                  <img
                    src={Boutique}
                    alt="Front"
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 boutique-image"
                  />
                  <img
                    src={Boutique2}
                    alt="Front2"
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 boutique2-image"
                  />
                </div>
                <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center font-cinzel ">
                    <h1 className="text-lg ">Epicerie Fine</h1>
                    <p className="text-lg">Traiteur</p>
                    <p className="text-base">
                      Petite restauration <br></br>Salon de thé
                    </p>
                    <button
                      className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 cursor-pointor"
                      onClick={() =>
                        scroller.scrollTo("contact", { smooth: true })
                      }
                    >
                      Contact{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="group h-96  w-80 [perspective:1000px] mr-4  md:mr-12 ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <style>
                  {`
        @media (max-width: 430px) {
          .front-image {
            display: none;
          }
        }

        @media (min-width: 431px) {
          .front2-image {
            display: none;
          }
        }
      `}
                </style>
                <div className="absolute inset-0">
                  <img
                    src={Front}
                    alt="Front"
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 front-image"
                  />
                  <img
                    src={Front2}
                    alt="Front2"
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 front2-image"
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
                        scroller.scrollTo("contact", { smooth: true })
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

          <p className="text-sm md:text-lg text-center text-gray-700 mb-4 md:my-12 lg:mx-96 my-8 font-semplicita">
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
            className=" flex flex-col mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142 "
              src={Armoire}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start bg-navbar  lg:h-142 ">
              <h5 className="lg:mb-28 mb-8 mt-8 lg:mt-24 text-3xl font-larken  tracking-tight text-black  ">
                Epicerie Fine{" "}
              </h5>
              <p className="mb-3 font-semplicita text-black text-xl  ">
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
              <h5 className="lg:mb-28 mb-8 text-3xl font-larken tracking-tight text-black  ">
                Traiteur{" "}
              </h5>
              <p className="mb-3 font-semplicita text-black text-xl  ">
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
              <h5 className="lg:mb-28 mb-8 text-3xl font-larken tracking-tight text-black  ">
                Petite restauration{" "}
              </h5>
              <p className="mb-3 font-semplicita text-black text-xl ">
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
            className="w-12 h-12 mx-auto mb-4 md:mb-8 cursor-pointer animate-pulse my-24  "
            onClick={() => scroller.scrollTo("salon", { smooth: true })}
          />
          <h1 className="text-2xl text-center md:text-2xl font-semplicita mb-2 mt-12 md:mt-12 text-gray-800">
            Et aussi ...{" "}
          </h1>
          <div
            id="salon"
            className=" mt-24 lg:mt-32 bg-navbar flex flex-col  items-center mx-auto border border-gray-200 rounded-lg shadow md:flex-row lg:w-3/4 hover:bg-red-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer hover:opacity-90 transition duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg lg:h-142 lg:w-142"
              src={Salon}
              alt=""
            />
            <div className="flex flex-col p-4 leading-normal text-center justify-start ">
              <h5 className="lg:mb-28 mb-8 text-3xl font-larken  tracking-tight text-black  ">
                Salon de Maria{" "}
              </h5>
              <p className="mb-3 font-semplicita text-black  text-xl">
                Venez profitez d’une pause gourmande dans le salon de Maria à
                toute heure de la journée, et découvrez nos sélections de thés,
                cafés et autres boissons artisanales
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
