import React, { useState } from "react";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";

import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

Modal.setAppElement("#root");
const stripePromise = loadStripe(
  "pk_test_51NvdtyEHjHfYLKwkLqH4JYzaylemNbWmg81l5gi5CdfFlqH5VMMpBaUFSr4h4HO6m537tW6g3fgDU7r8NGm6WoWU00Vd3kEnMc"
);

function CommandePopUp({ isOpen, onClose, onConfirm, cartItems }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleConfirm = () => {
    const orderDetails = {
      paymentMethod,
      pickupDate,
      pickupTime,
    };
    onConfirm(orderDetails);
  };

  // Calculer le total de la commande
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Commande"
      className="modal md:w-2/3 w-5/6 h-4/5 mt-6 mx-auto rounded-lg shadow-md bg-white p-6 text-center font-larken overflow-y-auto  "
      overlayClassName="overlay fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-75 "
    >
      {" "}
      {/* Ajoutez cette div pour activer le défilement */}
      <MdCancel
        size={30}
        className="text-2xl  top-6 left-4 cursor-pointer"
        onClick={isOpen ? onClose : undefined}
      />
      <h2 className="text-2xl font-larken mb-4">Commande</h2>
      <div className="mb-4 bg-gray-200 px-4 py-4">
        <h3 className="text-xl font-larken mb-2 ">
          Récapitulatif de votre commande :
        </h3>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mb-2 font-semplicita"
          >
            <span>
              {item.name} {item.senteur && `(Senteur: ${item.senteur})`}{" "}
              (Quantité: {item.quantity})
            </span>
            <span>{item.price * item.quantity} €</span>
          </div>
        ))}

        <div className="font-bold mt-2">Total : {total.toFixed(2)} €</div>
      </div>
      <div className="mb-4">
        <label className="text-lg">
          Choisissez un mode de paiement :
          <div className="flex items-center">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="mr-2"
            />
            Payer en ligne
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="inStore"
              checked={paymentMethod === "inStore"}
              onChange={() => setPaymentMethod("inStore")}
              className="mr-2"
            />
            Payer en magasin
          </div>
        </label>
      </div>
      {paymentMethod === "online" && (
        <Elements stripe={stripePromise}>
          <CheckOutForm cartItems={cartItems} />
        </Elements>
      )}
      {paymentMethod === "inStore" && (
        <>
          <div className="mb-4">
            <label className="text-lg">
              Date de retrait :
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="block w-full p-2 mt-2 border rounded-lg"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="text-lg">
              Heure de retrait :
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="block w-full p-2 mt-2 border rounded-lg"
              />
            </label>
          </div>
        </>
      )}
      <button
        onClick={handleConfirm}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover-bg-blue-600 focus:outline-none font-larken mt-14"
      >
        Confirmer la commande
      </button>
    </Modal>
  );
}

export default CommandePopUp;
