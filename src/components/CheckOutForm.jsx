import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { calculateTotal } from "./Panier";

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe(); // Utilisez useStripe pour obtenir l'objet Stripe
  const elements = useElements(); // Utilisez useElements pour obtenir les éléments Stripe

  const totalAmount = calculateTotal(cartItems); // Use your calculation function
  console.log("montant total calculé:", totalAmount);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Obtenez les éléments du formulaire
    const cardholderNameElement = document.getElementById("cardholder-name");
    const emailElement = document.getElementById("user_email");
    console.log("Email Element VERIFICATION :", emailElement.value); // Vérifiez si emailElement est correct

    // Vérifiez si les éléments existent avant d'accéder à leurs valeurs
    if (cardholderNameElement && emailElement) {
      const cardholderName = cardholderNameElement.value;
      const email = emailElement.value;
      console.log("Cardholder Name:", cardholderName);
      console.log("Email:", email);
      // Convertissez le montant en centimes
      const totalAmountInEuros = calculateTotal(cartItems); // Utilisez votre propre méthode pour obtenir le montant total
      const totalAmountInCents = Math.round(totalAmountInEuros * 100);

      try {
        const response = await fetch(
          "https://us-central1-chez-maria.cloudfunctions.net/createPaymentIntent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cardholderName,
              email,
              totalAmount: totalAmountInCents,
              // Les données à envoyer, le cas échéant
            }),
          }
        );

        if (!response.ok) {
          console.log("Error while fetching clientSecret");
          throw new Error("Erreur lors de la récupération du clientSecret");
        }

        const { clientSecret } = await response.json();

        // Créez un élément Stripe avec l'objet Stripe initialisé
        const cardElement = elements.getElement(CardElement);

        // Confirmez le paiement avec le clientSecret
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: cardholderName,
              email: email,
              // Vous pouvez ajouter des détails de facturation si nécessaire
            },
          },
        });

        if (result.error) {
          console.log("Payment error:", result.error);
        } else {
          console.log("Payment succeeded");
        }
      } catch (error) {
        console.log("CheckoutForm error:", error);
      }
    } else {
      console.log(
        "Cardholder name and/or email elements not found in the DOM."
      );
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return <p>Aucun article dans le panier.</p>;
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full max-w-md mx-auto h-auto bg-gray-200 rounded-lg px-8 md:py-8 py-12 font-larken border-red-800 border-solid border-2"
    >
      <div className="w-full pt-1 pb-1">
        <div className="bg-indigo-500 text-white overflow-hidden rounded-full md:w-12 md:h-12 w-10 h-10 -mt-16 mx-auto shadow-lg flex justify-center items-center">
          <i className="mdi mdi-credit-card-outline text-xl"></i>
        </div>
      </div>
      <div className="mb-2">
        <h1 className="text-center font-bold md:text-xl text-lg uppercase">
          Paiement sécurisé{" "}
        </h1>
      </div>
      <div className="mb-3 flex -mx-2">
        <div className="px-2">
          <label for="type1" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-indigo-500"
              name="type"
              id="type1"
              checked
            />
            <img
              src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
              className="md:h-8 h-6 ml-3"
              alt="Card Type 1"
            />
          </label>
        </div>
      </div>
      <div className="mb-4 ">
        <label className="block  text-black text-lg  mb-2">
          Informations de la carte :{" "}
        </label>
        <div className="mb-4 ">
          <input
            className="md:px-12 px-4 py-2 rounded-lg  max-w-full "
            type="text"
            id="cardholder-name"
            name="cardholder-name"
            placeholder="Nom du titulaire de la carte"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="md:px-12 px-4 py-2 rounded-lg  max-w-full  "
            type="email"
            id="user_email"
            name="email"
            placeholder="Adresse e-mail"
            required
          />
        </div>

        <div className="bg-white p-2 rounded shadow appearance-none border-red-800 border-solid border-2 ">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "14px",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-gray-800 hover-bg-blue-700 text-white  py-2 px-4 rounded-lg"
          type="submit"
        >
          Valider
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;