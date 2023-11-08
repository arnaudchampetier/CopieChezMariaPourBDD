const functions = require("firebase-functions");

exports.simpleFunction = functions.https.onRequest((req, res) => {
  res.status(200).send("Fonction Firebase simple en cours d'exécution !");
});
