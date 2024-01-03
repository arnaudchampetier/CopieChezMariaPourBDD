const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51NvdtyEHjHfYLKwkgHnY5HKLlmdPZleq6KAr4No0sYADe9FUrjnUCKcwIDu8A8EYZAG4ECaSvOjD1RuPOvIbpTse00Z7QFJm17"
);

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  try {
    const { cardholderName, email, totalAmount } = req.body;

    console.log("Request body:", req.body);
    console.log("Cardholder Name:", cardholderName);
    console.log("Email:", email);
    console.log("Total amount received from front-end:", totalAmount);

    // Ajout de la vérification de l'e-mail
    const cleanedEmail = email.trim(); // supprimer les espaces avant et après
    console.log("Cleaned Email:", cleanedEmail);

    if (!isValidEmail(cleanedEmail)) {
      console.error("Invalid email format");
      return res.status(400).json({ error: "Invalid email format" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "eur",
      payment_method: "pm_card_visa",
      billing_details: {
        name: cardholderName,
        email: cleanedEmail,
      },
    });

    console.log("PaymentIntent created:", paymentIntent);

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error in createPaymentIntent:", error);

    if (error.response && error.response.data) {
      console.error("Stripe Error Details:", error.response.data);
    }

    res.status(500).json({ error: error.message });
  }
});

// Fonction pour vérifier le format de l'e-mail
function isValidEmail(email) {
  // Utilisez une expression régulière simple pour vérifier le format de l'e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
