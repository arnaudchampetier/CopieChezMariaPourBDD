import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import Panier from "./Panier";
import { db } from "../firebase"; // Importez db depuis votre fichier firebase.js
import "../App.css";

function ClicAndCollect({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Epicerie sucrée");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
        console.log("Products:", productsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProductsByCategory();
    setSelectedFamily(null); // Réinitialise la famille sélectionnée
  }, [selectedCategory]);

  const uniqueFamilies = [
    ...new Set(products.map((product) => product.famille)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesFamily = !selectedFamily || product.famille === selectedFamily;
    const matchesSearchTerm =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesFamily && matchesSearchTerm;
  });

  const addToCart = (product) => {
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
    <div className="mx-auto px-4 py-4 bg-red-200" id="boutique">
      <h1 className="font-larken text-4xl mb-8 ">
        Nos produits en Click & Collect
      </h1>
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
      <div className="mb-4">
        <label
          htmlFor="search"
          className="mr-2 font-semplicita text-xl"
          placeholder="Recherchez un produit"
        >
          Recherchez un produit :
        </label>
        <input
          type="text"
          id="search"
          className="text-lg md:text-2xl font-semplicita px-2 py-2 rounded-lg shadow-xl bg-red-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {uniqueFamilies.length > 0 && (
        <div className="mb-4 flex flex-wrap max-w-full space-x-4 space-y-4 mx-auto">
          {uniqueFamilies.map((family) => (
            <button
              key={family}
              className={`text-lg md:text-2xl font-larken px-4 py-2 rounded-lg shadow-xl bg-red-50 ${
                selectedFamily === family ? " font-bold" : ""
              }  m-0 flex-none`}
              onClick={() =>
                setSelectedFamily(family === selectedFamily ? null : family)
              }
            >
              {family}
            </button>
          ))}
        </div>
      )}
      {selectedCategory === "Nos desserts maison (recettes de Maria)" && (
        <div className="w-full">
          <p className="text-gray-800 bg-yellow-200 p-4 rounded-lg shadow-xl font-light font-semplicita italic mb-4 text-xl md:w-2/3 h-full">
            ⚠️ Nous réalisons chaque jour nous-même nos desserts, issus du
            carnet de recettes de Maria. Au vu de nos petites ressources, il est
            difficile de vous proposer quotidiennement tous les desserts à la
            carte. De ce fait : n’hésitez pas à nous demander les desserts
            disponibles du jour !
          </p>
        </div>
      )}
      {selectedCategory === "Déco & Maison" && (
        <div className="w-full">
          <p className="text-gray-800 bg-yellow-200 p-4 rounded-lg shadow-xl font-light font-semplicita italic mb-4 text-xl md:w-2/3 h-full">
            ⚠️ Nos jolies bougies partent très vite : demandez-nous si vos
            senteurs préférées sont disponibles !
          </p>
        </div>
      )}
      <div className="flex flex-wrap -mx-4 font-semplicita">
        {filteredProducts.map((product) => (
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
      />
    </div>
  );
}

export default ClicAndCollect;
