import React, { useState, useEffect } from "react";
import BasketIcon from "../assets/basket.png";
import { MdAddCircle, MdRemoveCircle, MdCancel } from "react-icons/md"; // Material Icons
import CommandePopUp from "./CommandePopUp"; // Importez le composant CommandePopup
import NoImage from "../assets/pasdimage.png";

export const calculateTotal = (cartItems) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return total.toFixed(2);
};

function Panier({ cartItems, setCartItems, updateQuantity, clearCart }) {
  const [localCartItems, setLocalCartItems] = useState([]);
  const [isCommandePopupOpen, setCommandePopupOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la popup

  // Récupérez le panier depuis le localStorage lors du chargement du composant
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if (savedCart) {
      setLocalCartItems(savedCart);
      // Mettez à jour le panier global avec le contenu du local storage ici
      setCartItems(savedCart);
    }
  }, [setCartItems]);

  // Mise à jour du panier local et sauvegarde dans le localStorage lorsque les cartItems changent
  useEffect(() => {
    setLocalCartItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Fonction pour vérifier si un produit existe déjà dans le panier
  const findProductIndex = (productId) =>
    localCartItems.findIndex((item) => item.id === productId);

  const modifyQuantity = (productId, change) => {
    const updatedCart = [...localCartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      // Le produit existe déjà dans le panier, mettez à jour la quantité
      updatedCart[productIndex].quantity += change;

      // Vérifiez si la quantité est inférieure ou égale à 0, puis retirez cette ligne du panier
      if (updatedCart[productIndex].quantity <= 0) {
        updatedCart.splice(productIndex, 1);
      }
    } else if (change > 0) {
      // Le produit n'existe pas encore dans le panier, ajoutez-le
      const productToAdd = cartItems.find((item) => item.id === productId);

      if (productToAdd) {
        productToAdd.quantity = 1;
        updatedCart.push(productToAdd);
      }
    }

    setLocalCartItems(updatedCart);
    updateQuantity(productId, updatedCart[productIndex]?.quantity || 0);
  };

  const calculateTotal = () => {
    const total = localCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return total.toFixed(2);
  };

  // ...

  const removeFromCart = (productId) => {
    const updatedCart = localCartItems.filter((item) => item.id !== productId);
    setLocalCartItems(updatedCart);

    const productToRemove = localCartItems.find(
      (item) => item.id === productId
    );
    if (productToRemove && productToRemove.quantity > 0) {
      updateQuantity(productId, 0);
    }
  };

  // Gestionnaire d'événements pour ouvrir la popup de commande
  const handleCommanderClick = () => {
    setCommandePopupOpen(true);
  };

  return (
    <div className="cart p-4 border rounded-lg shadow-md bg-blue-50">
      <h2 className="text-3xl font-larken mb-12 flex items-center">
        <img src={BasketIcon} alt="Panier" className="w-8 h-8 mr-2" />
        Votre Panier
      </h2>

      {localCartItems.length === 0 ? (
        <>
          <p>Votre panier est actuellement vide 🥲.</p>
        </>
      ) : (
        <>
          <ul className="space-y-2">
            {localCartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-light font-semplicita italic">
                      {item.name}
                      {item.senteur && ` (${item.senteur})`}
                    </span>
                    <span className="text-gray-500 ml-2">{item.price} €</span>
                  </div>
                  <img
                    src={item.picture || NoImage}
                    alt={item.name}
                    className="w-16 h-16 transform transition-transform duration-1000 hover:scale-150 rounded ml-2"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => modifyQuantity(item.id, -1)}
                    className="text-black-600 hover:text-red-800  hover:bg-red-200 focus:outline-none px-2 py-1 rounded-full"
                  >
                    <MdRemoveCircle size={32} />
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => modifyQuantity(item.id, 1)}
                    className="text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 focus:outline-none px-2 py-1 rounded-full"
                  >
                    <MdAddCircle size={32} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 focus:outline-none px-2 py-1 rounded-full"
                  >
                    <MdCancel size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-larken">
            Total : {calculateTotal()} €
          </p>
          <button
            onClick={clearCart}
            className="mt-12 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none font-larken mr-4"
          >
            Vider le Panier
          </button>
          <button
            onClick={handleCommanderClick}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none font-larken"
          >
            Commander
          </button>
        </>
      )}

      {/* Condition pour afficher la popup */}
      {isCommandePopupOpen && (
        <CommandePopUp
          cartItems={cartItems}
          setCartItems={setCartItems}
          isOpen={isCommandePopupOpen}
          onClose={() => setCommandePopupOpen(false)}
          onConfirm={(orderDetails) => {
            console.log("Commande confirmée :", orderDetails);
            setCommandePopupOpen(false);
          }}
        />
      )}
    </div>
  );
}
export default Panier;
