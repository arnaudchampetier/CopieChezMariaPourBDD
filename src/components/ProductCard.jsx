import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../App.css";
import ProductDescriptionModal from "./ProductDescriptionModal";
import goutezlardeche from "../assets/goutezmoica.png";
import AB from "../assets/Agriculture-biologique.svg.png";
import NP from "../assets/nature-et-progres.png";
import Vegan from "../assets/veganlogo.png";
import NoImage from "../assets/pasdimage.png";

function ProductCard({
  product,
  addToCart,
  uniqueSenteurKeys,
  setUniqueSenteurKeys,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPictograms, setSelectedPictograms] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [selectedSenteur, setSelectedSenteur] = useState(
    Array.isArray(product.senteurs) && product.senteurs.length > 0
      ? product.senteurs[0]
      : null
  );
  const [senteursSoldOut, setSenteursSoldOut] = useState(/* initialisation */);

  const openModal = (product, pictograms) => {
    setSelectedProduct(product);
    setSelectedPictograms(pictograms);
    setModalOpen(true);
  };

  const isSenteurSoldOut = (senteur) => {
    return senteur && senteur.startsWith("SOLDOUT_");
  };
  const isProductSoldOut =
    product.isSoldOut || isSenteurSoldOut(selectedSenteur);

  const renderSenteurs = () => {
    if (
      product.senteurs &&
      Array.isArray(product.senteurs) &&
      product.senteurs.length > 0
    ) {
      return (
        <>
          <label
            htmlFor={`senteur-${product.id}`}
            className="text-gray-900 font-semplicita uppercase font-bold"
          >
            Choisissez une option :
          </label>
          <select
            id={`senteur-${product.id}`}
            className="ml-0 px-2 py-1 border rounded font-semplicita "
            value={selectedSenteur}
            onChange={(e) => setSelectedSenteur(e.target.value)}
          >
            {product.senteurs.map((senteur, index) => {
              const senteurKey = isSenteurSoldOut(senteur)
                ? `SOLDOUT_${product.id}_${index}_${senteur}`
                : `${product.id}_${index}_${senteur}`;

              let displayedSenteur;

              if (isSenteurSoldOut(senteur)) {
                displayedSenteur = `En rupture: ${senteur.substring(8)}`;
              } else {
                displayedSenteur = senteur;
              }

              // Vérifiez si la clé unique existe déjà pour ce produit
              if (!uniqueSenteurKeys[product.id]) {
                setUniqueSenteurKeys((prevKeys) => ({
                  ...prevKeys,
                  [product.id]: true, // Marquez la clé comme existante
                }));

                return (
                  <option
                    key={senteurKey}
                    value={isSenteurSoldOut(senteur) ? null : senteur}
                    disabled={isSenteurSoldOut(senteur)}
                  >
                    {displayedSenteur}
                  </option>
                );
              }

              return null;
            })}
          </select>
        </>
      );
    }
    return null;
  };

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const renderPictograms = () => {
    const pictograms = [];

    if (
      product.composition &&
      product.composition.includes("Agriculture Biologique")
    ) {
      pictograms.push(
        <img
          key="organic"
          src={AB}
          alt="Produit biologique"
          className="w-10 h-10 2xl:w-12 2xl:h-12  mb-4"
        />
      );
    }

    if (
      product.composition &&
      product.composition.includes("Goûtez l'Ardèche")
    ) {
      pictograms.push(
        <img
          key="ardeche"
          src={goutezlardeche}
          alt="Goûtez l'Ardèche"
          className="w-10 h-10 2xl:w-12 2xl:h-12 "
        />
      );
    }

    if (
      product.composition &&
      product.composition.includes("Nature & Progrès")
    ) {
      pictograms.push(
        <img
          key="NP"
          src={NP}
          alt="N&P"
          className="w-10 h-10 2xl:w-12 2xl:h-12 mb-4 "
        />
      );
    }

    if (product.composition && product.composition.includes("Vegan")) {
      pictograms.push(
        <img
          key="Veg"
          src={Vegan}
          alt="Vegan"
          className="w-10 h-10 2xl:w-12 2xl:h-12 "
        />
      );
    }

    return pictograms;
  };

  const images = [product.picture];
  for (let i = 2; i <= 8; i++) {
    const picture = product[`picture${i}`];
    if (picture) {
      images.push(picture);
    }
  }

  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8 mt-8 ${
        product.famille === "Bougies" ? "xl:mx-12 2xl:mx-6 mx-4" : ""
      }`}
    >
      <div className="xl:hover:scale-110 transition-transform duration-500 ">
        <div
          className={`custom-product bg-gray-100 p-4 rounded-xl shadow-xl flex flex-col overflow-y-auto transition-transform duration-1500 transform-gpu ${
            product.famille === "Bougies" ? "bougies-card" : ""
          }`}
        >
          <h1 className="text-lg font-semibold mt-2 mb-3 ">
            {product.name}{" "}
            {product.contenance ? (
              <span className="font-normal">({product.contenance})</span>
            ) : null}
          </h1>

          <div className="flex-grow"></div>

          <div className="relative flex items-center">
            <div className="flex items-center">
              <img
                onClick={() => openModal(product, renderPictograms())}
                src={images[currentImageIndex] || NoImage}
                alt={product.name}
                className={`w-5/6 object-cover rounded hover:scale-110 transition-transform duration-500 mx-auto cursor-pointer ${
                  !images[currentImageIndex] ? "max-w-[150px] h-auto" : ""
                }`}
              />

              <div className="ml-0 flex flex-col justify-center hover:scale-125 transition-transform duration-500 ">
                {renderPictograms()}
              </div>
            </div>
          </div>

          {product.senteurs &&
            Array.isArray(product.senteurs) &&
            product.senteurs.length > 1 && (
              <div className="mt-2">
                <label
                  htmlFor={`senteur-${product.id}`}
                  className="text-gray-900 font-semplicita uppercase font-bold"
                >
                  Choisissez une option :
                </label>
                <select
                  id={`senteur-${product.id}`}
                  className="ml-0 px-2 py-1 border rounded font-semplicita "
                  value={selectedSenteur}
                  onChange={(e) => setSelectedSenteur(e.target.value)}
                >
                  {product.senteurs.map((senteur, index) => {
                    const senteurKey = isSenteurSoldOut(senteur)
                      ? `SOLDOUT_${product.id}_${index}_${senteur}`
                      : `${product.id}_${index}_${senteur}`;

                    // Déclarez displayedSenteur avant de l'utiliser
                    let displayedSenteur;

                    if (isSenteurSoldOut(senteur)) {
                      displayedSenteur = `En rupture: ${senteur.substring(8)}`;
                    } else {
                      displayedSenteur = senteur;
                    }

                    return (
                      <option
                        key={senteurKey}
                        value={isSenteurSoldOut(senteur) ? null : senteur}
                        disabled={isSenteurSoldOut(senteur)}
                      >
                        {displayedSenteur}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

          <div className="flex-grow"></div>

          <button
            onClick={() => openModal(product, renderPictograms())}
            className="text-purple-600 text-xl font-semibold mt-6 my-auto hover:text-purple-800 focus:outline-none mb-6 "
          >
            En savoir plus
          </button>

          {images.length > 1 && (
            <>
              <FiChevronLeft
                className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-800 hover:text-purple-800 z-10"
                onClick={prevImage}
                style={{ top: "77%", left: "20%" }}
              />
              <FiChevronRight
                className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-800 hover:text-purple-800 z-10"
                onClick={nextImage}
                style={{ top: "77%", right: "20%" }}
              />
            </>
          )}

          <div className="flex-grow"></div>

          <div className="flex items-center mt-0">
            <p className="text-gray-800 font-semibold text-xl mr-2">
              Prix :{" "}
              {typeof product.price === "number"
                ? product.price.toFixed(2)
                : product.price}{" "}
              €
            </p>

            {isSenteurSoldOut(selectedSenteur) && (
              <p className="ml-auto text-red-500 font-semibold">En rupture</p>
            )}
          </div>

          <button
            onClick={() => {
              if (!isProductSoldOut) {
                addToCart(product, selectedSenteur); // Ajout de la senteur sélectionnée
              }
            }}
            disabled={isProductSoldOut}
            className={`${
              isProductSoldOut
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-cyan-900"
            } text-white px-4 py-2 mt-2 rounded hover:bg-purple-700`}
          >
            {isProductSoldOut ? "En rupture" : "Ajouter au panier"}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProductDescriptionModal
          product={selectedProduct}
          pictograms={selectedPictograms}
          onClose={() => setModalOpen(false)}
          onAddToCart={() => {
            if (!isSenteurSoldOut(selectedSenteur)) {
              addToCart(selectedProduct);
              setModalOpen(false);
            }
          }}
          senteursSoldOut={senteursSoldOut} // Assurez-vous de passer senteursSoldOut ici
        />
      )}
    </div>
  );
}

export default ProductCard;
