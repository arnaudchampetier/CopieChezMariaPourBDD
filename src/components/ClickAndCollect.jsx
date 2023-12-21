import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import Panier from "./Panier";
import { db } from "../firebase";
import "../App.css";

function ClicAndCollect({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const categories = [
    "Epicerie salée",
    "Epicerie sucrée",
    "Nos desserts maison (recettes de Maria)",
    "Traiteur",
    "Cave",
    "NOËL",
    "Déco & Maison",
    "Hygiène",
    "Bébé",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [selectedSubFamily, setSelectedSubFamily] = useState(null);

  const [familyList, setFamilyList] = useState([]);
  const [subFamilyList, setSubFamilyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productRef = collection(db, "Click & Collect de Chez Maria");
      let q;

      if (selectedFamily) {
        if (selectedSubFamily) {
          // Si une sous-famille est sélectionnée, filtre également par celle-ci
          q = query(
            productRef,
            where("category", "==", selectedCategory),
            where("famille", "==", selectedFamily),
            where("subFamille", "==", selectedSubFamily)
          );
        } else {
          // Sinon, filtre uniquement par la famille
          q = query(
            productRef,
            where("category", "==", selectedCategory),
            where("famille", "==", selectedFamily)
          );
        }
      } else {
        // Si aucune famille n'est sélectionnée, filtre uniquement par la catégorie
        q = query(productRef, where("category", "==", selectedCategory));
      }

      try {
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);

        // Mettez à jour la liste des familles
        if (!selectedFamily) {
          setFamilyList([
            ...new Set(productsData.map((product) => product.famille)),
          ]);
        }

        // Mettez à jour la liste des sous-familles seulement si selectedFamily change
        if (selectedFamily && !selectedSubFamily) {
          setSubFamilyList([
            ...new Set(
              productsData
                .filter((product) => product.famille === selectedFamily)
                .map((product) => product.subFamille)
            ),
          ]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedFamily, selectedSubFamily]);

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
      (product.name ?? "").toLowerCase().includes(searchTerm.toLowerCase())
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

  const addToCart = (product, selectedSenteur) => {
    // Copiez le panier actuel
    const updatedCart = [...cartItems];

    // Vérifiez si le produit avec la même senteur est déjà dans le panier
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id && item.senteur === selectedSenteur
    );

    if (existingProductIndex !== -1) {
      // Le produit avec la même senteur est déjà dans le panier, mettez à jour la quantité
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Le produit avec la même senteur n'est pas encore dans le panier, ajoutez-le
      const productToAdd = {
        ...product,
        quantity: 1,
        senteur: selectedSenteur, // Ajoutez la senteur au produit
      };
      updatedCart.push(productToAdd);
    }

    // Mettez à jour le panier global
    setCartItems(updatedCart);
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
      <div className="mb-12 flex flex-wrap justify-center items-center gap-2 xl:gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className={`mb-2 xl:mb-0 cursor-pointer font-semplicita text-base xl:text-xl uppercase hover:text-red-400 ${
              selectedCategory === category ? "font-bold" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedFamily(null);
              setSelectedSubFamily(null); // Ajoutez ceci pour réinitialiser la subFamille
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
            className={`mb-2 xl:mb-0 mr-4 cursor-pointer xl:hover:text-red-600 font-larken  xl:text-xl ${
              selectedFamily === family ? "text-purple-700 " : ""
            }`}
            onClick={() => {
              setSelectedFamily(family);
              setSelectedCategory(
                allProducts.find((product) => product.famille === family)
                  ?.category || selectedCategory
              );
              setSelectedSubFamily(null); // Ajoutez ceci pour réinitialiser la subFamille
            }}
          >
            {family}
          </div>
        ))}
      </div>
      {selectedFamily === "Bières" && (
        <div className="flex flex-wrap justify-center items-center mb-4 xl:mb-12">
          {subFamilyList.map((subFamily) => (
            <div
              key={subFamily}
              className={`mb-2 xl:mb-0 mr-4 cursor-pointer xl:hover:text-red-600 font-cinzel xl:text-xl ${
                selectedSubFamily === subFamily ? "text-purple-700 " : ""
              }`}
              onClick={() => setSelectedSubFamily(subFamily)}
            >
              {subFamily}
            </div>
          ))}
        </div>
      )}
      {selectedFamily === "Vins" && (
        <div className="flex flex-wrap justify-center items-center mb-4 xl:mb-12">
          {subFamilyList.map((subFamily) => (
            <div
              key={subFamily}
              className={`mb-2 xl:mb-0 mr-4 cursor-pointer xl:hover:text-red-600 font-cinzel xl:text-xl ${
                selectedSubFamily === subFamily ? "text-purple-700 " : ""
              }`}
              onClick={() => setSelectedSubFamily(subFamily)}
            >
              {subFamily}
            </div>
          ))}
        </div>
      )}
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
      {/* Affichage du message d'avertissement pour la catégorie "Cave" */}
      {selectedCategory === "Cave" && (
        <div className="text-yellow-600 mb-4 flex items-center justify-center font-semplicita italic md:text-xl text-lg">
          L'abus d'alcool est dangereux pour la santé, à consommer avec
          modération.
        </div>
      )}{" "}
      {selectedCategory === "Nos desserts maison (recettes de Maria)" && (
        <div className="text-yellow-600 mb-4 flex items-center xl:mx-96 justify-center font-semplicita italic md:text-xl text-lg">
          ⚠️ Nous réalisons chaque jour nous même nos desserts, issus du carnet
          de recettes de Maria. Au vu de nos petites ressources, il est
          difficile de vous proposer quotidiennement tous les desserts à la
          carte. De ce fait : n’hésitez pas à nous demander les desserts
          disponibles du jour !
        </div>
      )}{" "}
      {/* Affichage du message d'avertissement pour la famille "Bougies" */}
      {selectedFamily === "Bougies" && (
        <div className="text-yellow-600 mb-4 flex items-center justify-center font-semplicita italic md:text-xl text-lg">
          ⚠️ Nos jolies bougies partent très vite : demandez-nous si vos
          senteurs préférées sont disponibles !
        </div>
      )}
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
