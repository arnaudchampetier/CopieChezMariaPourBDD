import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import Panier from "./Panier";
import { db } from "../firebase";
import "../App.css";

function ClicAndCollect({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Epicerie sucrée");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [familyList, setFamilyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const categories = [
    "Bébé",
    "Cave",
    "Déco & Maison",
    "Epicerie salée",
    "Epicerie sucrée",
    "Hygiène",
    "Nos desserts maison (recettes de Maria)",
    "Traiteur",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const productRef = collection(db, "Click & Collect de Chez Maria");
      let q;

      if (selectedFamily) {
        q = query(
          productRef,
          where("category", "==", selectedCategory),
          where("famille", "==", selectedFamily)
        );
      } else {
        q = query(productRef, where("category", "==", selectedCategory));
      }

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

    fetchProducts();
  }, [selectedCategory, selectedFamily]);

  useEffect(() => {
    // Mettez à jour la liste des familles lorsque la catégorie sélectionnée change
    if (!selectedFamily) {
      setFamilyList([...new Set(products.map((product) => product.famille))]);
    }
  }, [products, selectedCategory, selectedFamily]);

  useEffect(() => {
    // Stocker une copie de tous les produits non filtrés
    const fetchAllProducts = async () => {
      const productRef = collection(db, "Click & Collect de Chez Maria");

      try {
        const querySnapshot = await getDocs(productRef);
        const allProductsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(allProductsData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de tous les produits:",
          error
        );
      }
    };

    fetchAllProducts();
  }, [selectedCategory]);

  useEffect(() => {
    // Filtrer les produits en fonction de la recherche globale
    const globalFilteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Si aucun terme de recherche, utilisez les produits filtrés par catégorie ou famille
    const finalProducts = searchTerm ? globalFilteredProducts : products;

    // Mettez à jour la catégorie et la famille en fonction du premier produit trouvé
    if (finalProducts.length > 0) {
      setSelectedCategory(finalProducts[0].category);
      setSelectedFamily(finalProducts[0].famille);
    }

    setProducts(finalProducts);
  }, [searchTerm, allProducts, products]);

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
    <div className="mx-auto px-4 py-4 bg-red-100 " id="boutique">
      <h1 className="font-semplicita uppercase text-4xl mb-12 flex items-center justify-center animate-pulse cursor-pointer ">
        Nos produits en Click & Collect
      </h1>
      <div className="mb-12 flex flex-wrap justify-center items-center gap-2 xl:gap-8">
        {categories.map((category) => (
          <div
            key={category}
            className={`mb-2 xl:mb-0 cursor-pointer font-semplicita text-base xl:text-xl uppercase hover:text-red-400 ${
              selectedCategory === category ? "font-bold" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedFamily(null);
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4 xl:mb-12">
        {familyList.map((family) => (
          <div
            key={family}
            className={`mb-2 xl:mb-0 mr-4 cursor-pointer xl:hover:text-red-600 font-larken xl:text-xl ${
              selectedFamily === family ? "text-purple-700 " : ""
            }`}
            onClick={() => {
              setSelectedFamily(family);
              setSelectedCategory(
                allProducts.find((product) => product.famille === family)
                  ?.category || selectedCategory
              );
            }}
          >
            {family}
          </div>
        ))}
      </div>

      {/* Barre de recherche globale */}
      <div className="mb-4 flex items-center justify-center">
        <label htmlFor="search" className="mr-2 font-semplicita text-xl">
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

      {/* Affichage des produits filtrés */}
      <div className="flex flex-wrap -mx-4 font-semplicita ">
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
      />
    </div>
  );
}

export default ClicAndCollect;
