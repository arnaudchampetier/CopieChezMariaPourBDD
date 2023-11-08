import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import Panier from "./Panier";
import { db } from "../firebase"; // Importez db depuis votre fichier firebase.js

function ClicAndCollect({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Epicerie sucrée");

  const categories = [
    "Epicerie sucrée",
    "Nos desserts maison (recettes de Maria)",
    "Epicerie salée",
    "Cave",
    "Hygiène",
    "Traiteur",
    "Déco & Maison",
    "Bébé",
  ];

  useEffect(() => {
    // Utilisez un effet secondaire pour charger les produits lorsque Firebase est prêt
    const fetchProductsByCategory = async () => {
      const productRef = collection(db, "Click & Collect de Chez Maria");
      const q = query(productRef, where("category", "==", selectedCategory));

      try {
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]); // Assurez-vous que db est passé comme prop

  const addToCart = (product) => {
    // Mettez à jour le panier en utilisant la fonction reçue en prop
    const updatedCartItems = [...cartItems];
    const productIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      updatedCartItems[productIndex].quantity += 1;
    } else {
      const newCartItem = { ...product, quantity: 1 };
      updatedCartItems.push(newCartItem);
    }

    // Mettez à jour le panier dans le stockage local
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    setCartItems(updatedCartItems);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className=" mx-auto px-4 py-4 bg-red-200">
      <h1 className="font-larken text-4xl mb-8 ">
        Nos produits en Click & Collect
      </h1>
      <h2 className="text-3xl font-light mb-4 font-larken ">
        {selectedCategory}
      </h2>
      <div className="mb-4">
        <label
          htmlFor="categorySelect"
          className="mr-2 font-semplicita text-3xl"
        >
          Sélectionnez une catégorie :
        </label>
        <select
          id="categorySelect"
          className="text-lg md:text-2xl font-semplicita px-2 py-2 rounded-lg shadow-xl bg-red-50"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
              className="font-semplicita text-xl"
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap -mx-4  font-semplicita ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Panier
        cartItems={cartItems}
        setCartItems={setCartItems}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />{" "}
    </div>
  );
}

export default ClicAndCollect;
