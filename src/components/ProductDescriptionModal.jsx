import React from "react";
import { MdCancel } from "react-icons/md";

function ProductDescriptionModal({ product, onClose, onAddToCart }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-gray-200 opacity-95 p-4 rounded-lg shadow-xl  md:w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-1/2 md:mx-3 mx-5 sm:h-4/5 2xl:h-3/4 flex flex-col relative ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 focus:outline-none"
        >
          <MdCancel size={24} />
        </button>
        <div className="w-full h-1/2 flex justify-center items-center">
          <img
            src={product.picture}
            alt={product.name}
            className="w-1/4 h-auto rounded mt-8 mb-8 hover:scale-150 transition-transform duration-1000"
          />
        </div>
        <div className="mx-8">
          <h3 className="text-lg font-semibold mb-8">{product.name}</h3>
          <p className="text-gray-600 text-lg mb-2 overflow-y-auto">
            {product.description}
          </p>
        </div>
        <div className="flex-grow"></div>{" "}
        <button
          onClick={onAddToCart}
          className="bg-cyan-900 text-white px-4 py-2 mt-2 rounded hover:bg-purple-700 w-1/4 mx-auto"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductDescriptionModal;
