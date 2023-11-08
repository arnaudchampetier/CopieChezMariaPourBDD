import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Votre configuration Firebase pour votre application web
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chez-maria.firebaseapp.com",
  projectId: "chez-maria",
  storageBucket: "chez-maria.appspot.com",
  messagingSenderId: "133565448797",
  appId: "1:133565448797:web:505498064091a78adf43b4",
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialisez Firestore

// Fonction pour ajouter les produits à Firestore
const addProductsToFirestore = async (products) => {
  const productsCollection = collection(db, "Click & Collect de Chez Maria");

  for (const product of products) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Le produit "${product.name}" a été ajouté à Firestore.`);
    } catch (error) {
      console.error(
        `Erreur lors de l'ajout de "${product.name}" à Firestore :`,
        error
      );
    }
  }
};

export { db, addProductsToFirestore };
