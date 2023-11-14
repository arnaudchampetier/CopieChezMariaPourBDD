import React, { useState } from "react";
import "../App.css";
import ProductDescriptionModal from "./ProductDescriptionModal";
import goutezlardeche from "../assets/LOGO-GOUTEZ-LARDECHE_RVB.png";
import AB from "../assets/Agriculture-biologique.svg.png";

function ProductCard({ product, addToCart }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPictograms, setSelectedPictograms] = useState([]);

  const openModal = (product, pictograms) => {
    setSelectedProduct(product);
    setSelectedPictograms(pictograms);
    setModalOpen(true);
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
          className="w-12 h-12 mr-2"
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
          className="w-16 h-16"
        />
      );
    }

    return pictograms;
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8 mt-8 ">
      <div className="hover:scale-110 transition-transform duration-500">
        <div
          className={`custom-product bg-gray-100 p-4 rounded-xl shadow-xl flex flex-col overflow-y-auto transition-transform duration-1500 transform-gpu`}
        >
          <h3 className="text-lg font-semibold mt-2 mb-5">{product.name}</h3>
          <div className="flex">
            <img
              onClick={() => openModal(product, renderPictograms())}
              src={product.picture}
              alt={product.name}
              className="w-full h-auto max-w-full rounded hover:scale-110 transition-transform duration-500 mx-auto cursor-pointer"
              style={{ width: "80%" }}
            />
            {renderPictograms().length > 0 && (
              <div className="flex flex-col my-auto hover:scale-125 transition-transform duration-500">
                {renderPictograms()}
              </div>
            )}
          </div>

          <button
            onClick={() => openModal(product, renderPictograms())}
            className="text-purple-600 text-xl font-semibold mt-2 hover:text-purple-800 focus:outline-none"
          >
            En savoir plus
          </button>

          <div className="flex-grow"></div>
          <div className="flex items-center mt-4">
            <p className="text-gray-800 font-semibold text-xl mr-2">
              Prix : {product.price} €
            </p>
          </div>

          <button
            onClick={() => {
              addToCart(product);
            }}
            className="bg-cyan-900 text-white px-4 py-2 mt-2 rounded hover:bg-purple-700"
          >
            Ajouter au panier
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
