import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ProductDetails() {
  const { productId } = useParams(); // Obtenez le paramètre productId de l'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching product with ID:", productId);

    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "Click & Collect de Chez Maria", productId);

      try {
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          const productData = docSnap.data();
          console.log("Product data:", productData);
          setProduct(productData);
        } else {
          console.log("Aucun document trouvé !");
        }
      } catch (error) {
        console.log("Erreur lors de la récupération du produit:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <img src={product.picture} alt={product.name} className="mt-4 w-full" />
      <p className="text-gray-700 mt-2">{product.composition}</p>
      <p className="text-gray-700 mt-2">Contenance: {product.contenance}</p>
      <p className="text-green-600 text-xl font-semibold mt-2">
        {product.price} €
      </p>
    </div>
  );
}

export default ProductDetails;
