const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")();

const stripe = require("stripe")(
  "sk_test_51NvdtyEHjHfYLKwkgHnY5HKLlmdPZleq6KAr4No0sYADe9FUrjnUCKcwIDu8A8EYZAG4ECaSvOjD1RuPOvIbpTse00Z7QFJm17"
);

admin.initializeApp();

exports.simpleFunction = functions.https.onRequest((req, res) => {
  res.status(200).send("Fonction Firebase simple en cours d'exécution !");
});

exports.createPaymentIntent = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Utilisez `async` ici

    // Extrayez le nom du titulaire de la carte et l'adresse e-mail du corps de la demande
    const { totalAmount, cardholderName, email } = req.body;

    try {
      // Créez un PaymentIntent avec Stripe
      const customer = await stripe.customers.create({
        email: email,
      });
      const paymentIntent = await stripe.paymentIntents.create({
        customer: customer.id,
        amount: totalAmount, // Montant en cents (par exemple, 10,00 $)
        currency: "eur",
        description: `Commande de ${cardholderName}`, // Description de la commande
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.log("Error:", error); // Ajoutez ce log pour les erreurs

      res.status(500).json({ error: error.message });
    }
  });
});
