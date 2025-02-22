import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BannerCarousel from "./BannerCarousel";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import { useState } from "react";

const products = [
  { id: 1, name: "Stylish Sneakers", price: "₹2,499", image: "/images/sneakers.png" },
  { id: 2, name: "Casual T-Shirt", price: "₹999", image: "/images/tshirt.png" },
  { id: 3, name: "Trendy Backpack", price: "₹1,499", image: "/images/backpack.png" },
  { id: 4, name: "Smart Watch", price: "₹3,999", image: "/images/smartwatch.png" },
  { id: 5, name: "Elegant Handbag", price: "₹2,999", image: "/images/handbag.png" },
  { id: 6, name: "Perfume for Women", price: "₹1,899", image: "/images/perfume.png" },
  { id: 7, name: "Men's Sunglasses", price: "₹1,299", image: "/images/sunglasses.png" },
  { id: 8, name: "Wireless Earbuds", price: "₹2,999", image: "/images/earbuds.png" },
  { id: 9, name: "Sports Shoes", price: "₹3,299", image: "/images/sportsshoes.png" },
  { id: 10, name: "Classic Leather Belt", price: "₹899", image: "/images/belt.png" },
  { id: 11, name: "Fashionable Hoodie", price: "₹1,999", image: "/images/hoodie.png" },
  { id: 12, name: "Leather Wallet", price: "₹1,499", image: "/images/wallet.png" },
  { id: 13, name: "Fitness Tracker", price: "₹3,199", image: "/images/fitnesstracker.png" },
  { id: 14, name: "Designer Cap", price: "₹599", image: "/images/cap.png" },
  { id: 15, name: "Luxury Watch", price: "₹9,999", image: "/images/luxurywatch.png" },
  { id: 16, name: "Travel Duffel Bag", price: "₹3,499", image: "/images/duffelbag.png" },
  { id: 17, name: "Noise Cancelling Headphones", price: "₹7,999", image: "/images/headphones.png" },
  { id: 18, name: "Graphic Printed T-Shirt", price: "₹1,299", image: "/images/graphictee.png" },
  { id: 19, name: "Stylish Jeans", price: "₹2,299", image: "/images/jeans.png" },
  { id: 20, name: "Leather Boots", price: "₹4,299", image: "/images/boots.png" },
];

const Home = () => {
  const { addToCart } = useCart();
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold text-pink-600">ShopScape</h1>
          <p className="text-lg text-gray-500">Find the best products at amazing prices!</p>
        </div>
        <BannerCarousel />
        <br />

        <section className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 8).map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover rounded-lg" />
          <h3 className="font-semibold mt-2 text-center">{product.name}</h3>
          <p className="text-gray-600 text-center">{product.price}</p>
        </Link>
        <button
          className="bg-pink-600 text-white w-full py-2 rounded mt-2"
          onClick={() => {
            console.log("Adding to cart from HomePage");
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        </div>
      ))}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 my-6">
        <img src="/images/banner.png" alt="Discount Banner" className="w-full rounded-lg" />
      </div>
        {products.slice(8, 20).map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-40 sm:h-48 object-cover rounded-lg" />
          <h3 className="font-semibold mt-2 text-center">{product.name}</h3>
          <p className="text-gray-600 text-center">{product.price}</p>
        </Link>
        <button
          className="bg-pink-600 text-white w-full py-2 rounded mt-2"
          onClick={() => {
            console.log("Adding to cart from HomePage");
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        </div>
        ))}
        </div>
      </section>
        <div className="col-span-4 my-6">
          <img src="/images/bannerr.png" alt="Discount Banner" className="w-full rounded-lg" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
