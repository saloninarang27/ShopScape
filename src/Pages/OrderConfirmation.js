import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useCart } from "./CartContext"; 

const OrderConfirmation = () => {
  const cartContext = useCart(); 

  useEffect(() => {
    if (cartContext && cartContext.setCart) {
      cartContext.setCart([]); 
    }
  }, [cartContext]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-green-600">🎉 Order Placed Successfully!</h2>
          <p className="mt-4 text-pink-700">We've sent you an email with the Order details.</p>
          <p className="mt-4 text-pink-700">Thank you for shopping with us. Your order has been confirmed.</p>

          <div className="mt-6">
            <Link to="/" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
