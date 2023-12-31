import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

function ProductDescriptionModal({
  product,
  pictograms,
  onClose,
  onAddToCart,
  handleSenteurChange,
  senteursSoldOut,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSenteur, setSelectedSenteur] = useState(null);

  const images = [];

  if (product.picture) {
    images.push(product.picture);
  }
  for (let i = 1; i <= 8; i++) {
    const picture = product[`picture${i}`];
    if (picture) {
      images.push(picture);
    }
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : (prevIndex - 1) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (product.senteurs && product.senteurs.length > 0) {
      const availableSenteurs = product.senteurs.filter(
        (senteur) => !senteursSoldOut?.includes(senteur)
      );
      setSelectedSenteur(
        availableSenteurs.length > 0 ? availableSenteurs[0] : null
      );
    }
  }, [senteursSoldOut, product.senteurs]);

  const isProductSoldOut =
    product.isSoldOut || senteursSoldOut?.includes(selectedSenteur);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-yellow-100 opacity-95 p-4 rounded-lg shadow-xl md:w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-1/2 md:mx-3 mx-5  2xl:h-3/4 h-[500px] flex flex-col relative md:mt-32">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-red-600 hover:text-red-800 focus:outline-none cursor-pointer z-50"
          style={{ cursor: "pointer" }}
        >
          <MdCancel size={30} />
        </button>
        <div className="w-full h-1/2 flex flex-col justify-center items-center relative">
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            className="w-1/3 h-auto rounded mt-8 mb-9 hover:scale-125 transition-transform duration-1000"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none"
                style={{ top: "50%", left: "20%" }}
              >
                {"<"}
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none"
                style={{ top: "50%", right: "20%" }}
              >
                {">"}
              </button>
            </>
          )}
        </div>
        <div className="mx-8 overflow-y-auto">
          {pictograms && pictograms.length > 0 && (
            <h2 className="font-larken text-2xl items-center justify-center flex mb-4">
              Label(s) qualité:
            </h2>
          )}
          <div className="flex items-center justify-center hover:scale-125 transition-transform duration-1000 mx-auto space-x-4">
            {pictograms}
          </div>
          <h3 className="text-lg font-semibold mb-8 mt-8">
            {product.name} {selectedSenteur ? `(${selectedSenteur})` : ""}
          </h3>
          {product.senteurs && product.senteurs.length > 1 && (
            <div className="mt-4">
              <label
                htmlFor={`senteur-${product.id}`}
                className="text-gray-900 font-semplicita uppercase font-bold"
              >
                Choisissez une option :
              </label>
              <select
                id={`senteur-${product.id}`}
                className="ml-2 px-2 py-1 border font-larken rounded mb-4"
                value={selectedSenteur || ""}
                onChange={(e) => setSelectedSenteur(e.target.value)}
              >
                {product.senteurs.map((senteur) => (
                  <option
                    key={senteur}
                    value={senteur}
                    disabled={senteur.startsWith("SOLDOUT_")}
                  >
                    {senteur.startsWith("SOLDOUT_")
                      ? `En rupture: ${senteur.substring(8)}`
                      : senteur}
                  </option>
                ))}
              </select>
            </div>
          )}
          <p className="text-gray-600 text-lg mb-2 overflow-y-auto">
            {product.description}
          </p>
        </div>
        <div className="flex-grow"></div>
        <button
          onClick={onAddToCart}
          disabled={isProductSoldOut}
          className={`${
            isProductSoldOut ? "bg-gray-300 cursor-not-allowed" : "bg-cyan-900"
          } text-white px-4 py-2 mt-2 rounded hover:bg-purple-700 md:w-1/4 mx-auto`}
        >
          {isProductSoldOut ? "En rupture" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

export default ProductDescriptionModal;
