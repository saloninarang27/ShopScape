import React from "react";
import { useCart } from "./CartContext";  // Ensure you're using a cart context

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Destructure the function from the context

  return (
    <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
