import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importez les icônes de flèches de react-icons
import "../App.css";
import ProductDescriptionModal from "./ProductDescriptionModal";
import goutezlardeche from "../assets/goutezmoica.png";
import AB from "../assets/Agriculture-biologique.svg.png";

function ProductCard({ product, addToCart }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPictograms, setSelectedPictograms] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product, pictograms) => {
    setSelectedProduct(product);
    setSelectedPictograms(pictograms);
    setModalOpen(true);
  };

  const nextImage = () => {
    if (product.picture2) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }
  };

  const prevImage = () => {
    if (product.picture2) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
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
          className="w-12 h-12  mb-4"
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
          className="w-12 h-12 "
        />
      );
    }

    return pictograms;
  };

  const images = [product.picture];

  if (product.picture2) {
    images.push(product.picture2);
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8 mt-8 ">
      <div className="hover:scale-110 transition-transform duration-500">
        <div
          className={`custom-product bg-gray-100 p-4 rounded-xl shadow-xl flex flex-col overflow-y-auto transition-transform duration-1500 transform-gpu`}
        >
          <h3 className="text-lg font-semibold mt-2 mb-5">
            {product.name}{" "}
            {product.contenance ? (
              <span className="font-normal">({product.contenance})</span>
            ) : null}
          </h3>

          <div className="flex-grow"></div>

          <div className="relative flex items-center">
            {images.length > 1 && (
              <>
                <FiChevronLeft
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-800 hover:text-purple-800"
                  onClick={prevImage}
                />
                <FiChevronRight
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-800 hover:text-purple-800"
                  onClick={nextImage}
                />
              </>
            )}

            <div className="flex items-center">
              {" "}
              {/* Utilise la classe 'flex' ici */}
              <img
                onClick={() => openModal(product, renderPictograms())}
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-auto max-w-full rounded hover:scale-110 transition-transform duration-500 mx-auto cursor-pointer"
                style={{ width: "80%" }}
              />
              <div className="ml-0 flex flex-col justify-center hover:scale-125 transition-transform duration-500 ">
                {" "}
                {/* Utilise la classe 'flex-col' ici */}
                {renderPictograms()}
              </div>
            </div>
          </div>

          <button
            onClick={() => openModal(product, renderPictograms())}
            className="text-purple-600 text-xl font-semibold mt-6 hover:text-purple-800 focus:outline-none "
          >
            En savoir plus
          </button>

          <div className="flex-grow"></div>
          <div className="flex items-center mt-4">
            <p className="text-gray-800 font-semibold text-xl mr-2">
              Prix : {product.price} €
            </p>
            {product.isSoldOut && (
              <p className="ml-auto text-red-500 font-semibold">En rupture</p>
            )}
          </div>

          <button
            onClick={() => {
              if (!product.isSoldOut) {
                addToCart(product);
              }
            }}
            disabled={product.isSoldOut}
            className={`${
              product.isSoldOut
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-cyan-900"
            } text-white px-4 py-2 mt-2 rounded hover:bg-purple-700`}
          >
            {product.isSoldOut ? "En rupture" : "Ajouter au panier"}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProductDescriptionModal
          product={selectedProduct}
          pictograms={selectedPictograms}
          onClose={() => setModalOpen(false)}
          onAddToCart={() => {
            addToCart(selectedProduct);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default ProductCard;
