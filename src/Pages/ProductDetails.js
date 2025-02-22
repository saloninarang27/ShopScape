import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";  

const products = [
  { id: 1, name: "Stylish Sneakers", price: "₹2,499", category: "Footwear", description: "A light shoe that has a top made of cloth and a bottom made of rubber, worn esp. for sports",image: "/images/sneakers.png" },
  { id: 2, name: "Casual T-Shirt", price: "₹999", category: "Clothing", description:"A lightweight linen tshirts, chambray tshirts, and the timeless button-down Oxford.", image: "/images/tshirt.png" },
  { id: 3, name: "Trendy Backpack", price: "₹1,499", category: "Accessories", description:"A bag with straps that go over your shoulders, so that you can carry things on your back when you are walking or climbing.",  image: "/images/backpack.png" },
  { id: 4, name: "Smart Watch", price: "₹3,999", category: "Electronics", description:" A portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.",  image: "/images/smartwatch.png" },
  { id: 5, name: "Elegant Handbag", price: "₹2,999", category: "Bags", description:"A bag of leather, fabric, plastic, or the like, held in the hand or carried by means of a handle or strap, commonly used for holding money, personal grooming items, small purchases, etc",  image: "/images/handbag.png" },
  { id: 6, name: "Perfume for Women", price: "₹1,899", category: "Beauty", description:"Think of what the smells you favour remind you of, add words that describe textures, colours, even musical instruments or tempos",  image: "/images/perfume.png" },
  { id: 7, name: "Men's Sunglasses", price: "₹1,299", category: "Accessories", description:"A form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.",  image: "/images/sunglasses.png" },
  { id: 8, name: "Wireless Earbuds", price: "₹2,999", category: "Electronics", description:"Small loudspeaker held or worn close to the listener's ear or within the outer ear.",  image: "/images/earbuds.png" },
  { id: 9, name: "Sports Shoes", price: "₹3,299", category: "Footwear", description:"Hug your feet with soft leather and cushiony insoles",  image: "/images/sportsshoes.png" },
  { id: 10, name: "Classic Leather Belt", price: "₹899", category: "Accessories", description:"A flexible band or strap, typically made of leather worn around the natural waist or near it ",  image: "/images/belt.png" },
  { id: 11, name: "Fashionable Hoodie", price: "₹1,999", category: "Clothing", description:"Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",  image: "/images/hoodie.png" },
  { id: 12, name: "Leather Wallet", price: "₹1,499", category: "Accessories", description:"A flat case or pouch, often used to carry small personal items such as physical currency, debit cards, and credit cards",  image: "/images/wallet.png" },
  { id: 13, name: "Fitness Tracker", price: "₹3,199", category: "Electronics", description:"An application that can be downloaded on any mobile device and used anywhere to get fit. ",  image: "/images/fitnesstracker.png" },
  { id: 14, name: "Designer Cap", price: "₹599", category: "Accessories", description:"Fits snugly on the head, Can have a visor, and Often associated with specific profession or teams",  image: "/images/cap.png" },
  { id: 15, name: "Luxury Watch", price: "₹9,999", category: "Electronics", description:"A portable timekeeping device worn on the wrist, allowing individuals to conveniently check the time throughout the day",  image: "/images/luxurywatch.png" },
  { id: 16, name: "Travel Duffel Bag", price: "₹3,499", category: "Bags", description:"A lightweight, flexible container meant for carrying things",  image: "/images/duffelbag.png" },
  { id: 17, name: "Noise Cancelling Headphones", price: "₹7,999", category: "Electronics", description:"Accurate reproduction of frequencies across the audible spectrum, from deep bass to high treble",  image: "/images/headphones.png" },
  { id: 18, name: "Graphic Printed T-Shirt", price: "₹1,299", category: "Clothing", description:"Get Your Swag On", image: "/images/graphictee.png" },
  { id: 19, name: "Stylish Jeans", price: "₹2,299", category: "Clothing", description:"Denim is a love that never fades",  image: "/images/jeans.png" },
  { id: 20, name: "Leather Boots", price: "₹4,299", category: "Footwear", description:"Fashion Feet, So Neat!",  image: "/images/boots.png" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();  // Using custom hook
  const product = products.find((item) => item.id === parseInt(id)); // Ensure ID is parsed correctly
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center text-red-600 font-bold text-xl mt-10">Product Not Found!</h2>;
  }

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={product.image} alt={product.name} className="w-80 h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 pl-6">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-pink-500 text-sm mt-1">Category: {product.category}</p>
            <p className="text-gray-700 text-sm mt-1">Description: {product.description}</p>
            <p className="text-xl text-pink-600 font-semibold mt-2">{product.price}</p>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Quantity</label>
              <div className="flex items-center mt-1">
                <button
                  className="bg-gray-300 px-3 py-1 rounded-l"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-10 text-center border-gray-300 border"
                />
                <button
                  className="bg-gray-300 px-3 py-1 rounded-r"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
                onClick={() => addToCart({ ...product, quantity })}
              >
                Add to Cart
              </button>
              <button
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
                onClick={() => navigate("/")}
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
