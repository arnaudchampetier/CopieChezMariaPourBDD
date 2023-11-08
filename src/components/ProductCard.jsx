import React, { useState } from "react";
import "../App.css";
import ProductDescriptionModal from "./ProductDescriptionModal"; // Importez le composant modal

function ProductCard({ product, addToCart }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8 mt-8 ">
      <div className="hover:scale-110 transition-transform duration-500">
        <div
          className={`custom-product bg-gray-100 p-4 rounded-xl shadow-xl flex flex-col overflow-y-auto transition-transform duration-1500 transform-gpu`}
        >
          <h3 className="text-lg font-semibold mt-2 mb-5">{product.name}</h3>
          <img
            src={product.picture}
            alt={product.name}
            className="w-full h-auto rounded hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={() => setModalOpen(true)}
            className="text-purple-600 text-xl font-semibold mt-2 hover:text-purple-800 focus:outline-none"
          >
            En savoir plus
          </button>
          <div className="flex-grow"></div>{" "}
          <p className="text-gray-800 font-semibold text-xl mt-4">
            Prix : {product.price} €
          </p>
          {/* Cela étendra cet espace pour pousser le bouton vers le bas */}
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
          product={product}
          onClose={() => setModalOpen(false)}
          onAddToCart={() => {
            addToCart(product);
            setModalOpen(false); // Fermez la modal après avoir ajouté au panier
          }}
        />
      )}
    </div>
  );
}

export default ProductCard;
