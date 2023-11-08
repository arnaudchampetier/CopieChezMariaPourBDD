const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51NvdtyEHjHfYLKwkgHnY5HKLlmdPZleq6KAr4No0sYADe9FUrjnUCKcwIDu8A8EYZAG4ECaSvOjD1RuPOvIbpTse00Z7QFJm17"
);

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  try {
    // Extrayez le nom du titulaire de la carte et l'adresse e-mail du corps de la demande
    const { cardholderName, email, totalAmount } = req.body;
    console.log("Total amount received from front-end:", totalAmount); // Vérifiez que la valeur est correcte ici

    // Créez un PaymentIntent avec Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount, // Montant en cents (par exemple, 10,00 $)
      currency: "eur",
      payment_method: "pm_card_visa",
      billing_details: {
        name: cardholderName,
        email: email,
        // Autres informations de facturation si nécessaire
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
