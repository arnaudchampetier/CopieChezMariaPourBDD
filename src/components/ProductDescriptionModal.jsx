import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

function ProductDescriptionModal({
  product,
  pictograms,
  onClose,
  onAddToCart,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (product.picture2 ? 1 : 0) : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (product.picture2 ? 1 : 0) ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-gray-200 opacity-95 p-4 rounded-lg shadow-xl md:w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-1/2 md:mx-3 mx-5 sm:h-4/5 2xl:h-3/4 flex flex-col relative  ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 focus:outline-none"
        >
          <MdCancel size={24} />
        </button>
        <div className="w-full h-1/2 flex flex-col justify-center items-center relative">
          <img
            src={currentImageIndex === 0 ? product.picture : product.picture2}
            alt={product.name}
            className="w-1/4 h-auto rounded mt-8 mb-9 hover:scale-150 transition-transform duration-1000"
          />
          {product.picture2 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {"<"}
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {">"}
              </button>
            </>
          )}
        </div>
        <div className="mx-8">
          {pictograms && pictograms.length > 0 && (
            <h2 className="font-larken text-2xl items-center justify-center flex mb-4">
              Label(s) qualité:
            </h2>
          )}
          <div className="flex items-center justify-center hover:scale-125 transition-transform duration-1000 mx-auto space-x-4">
            {pictograms}
          </div>

          <h3 className="text-lg font-semibold mb-8 mt-8">{product.name}</h3>

          <p className="text-gray-600 text-lg mb-2 overflow-y-auto">
            {product.description}
          </p>
        </div>
        <div className="flex-grow"></div>{" "}
        <button
          onClick={onAddToCart}
          disabled={product.isSoldOut}
          className={`${
            product.isSoldOut ? "bg-gray-300 cursor-not-allowed" : "bg-cyan-900"
          } text-white px-4 py-2 mt-2 rounded hover:bg-purple-700 w-1/4 mx-auto`}
        >
          {product.isSoldOut ? "En rupture" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

export default ProductDescriptionModal;
