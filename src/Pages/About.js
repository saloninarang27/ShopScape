import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">About ShopScape</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">ShopScape</span>, your ultimate shopping destination.
          We are dedicated to providing high-quality products with seamless shopping experiences.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-600">Our Mission</h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-3">
            To make online shopping effortless and enjoyable with a wide range of trendy products,
            fast delivery, and excellent customer support.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-600">Why Choose Us?</h2>
          <ul className="text-gray-700 mt-3 space-y-2 max-w-xl mx-auto">
            <li>✔ High-Quality Products</li>
            <li>✔ Fast & Secure Delivery</li>
            <li>✔ 24/7 Customer Support</li>
            <li>✔ Hassle-Free Returns</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
