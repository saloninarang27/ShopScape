import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalAmount = cart.reduce((sum, item) => {
    const numericPrice = Number(item.price.replace(/[₹,]/g, "")); 
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty. <Link to="/" className="text-pink-600">Continue shopping</Link>.
          </p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              {cart.map((item) => {
                const numericPrice = Number(item.price.replace(/[₹,]/g, "")); 
                return (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center sm:justify-between border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover" />
                    <h3 className="font-semibold text-center sm:text-left sm:flex-1 sm:ml-4">{item.name}</h3>
                    <p className="text-pink-700 font-medium">₹{numericPrice.toLocaleString()}</p>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="px-3 py-1 bg-pink-300 rounded-lg"
                      >-</button>
                      <span className="mx-3">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="px-3 py-1 bg-pink-300 rounded-lg"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline mt-2 sm:mt-0"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-right">
              <h2 className="text-xl font-bold">Total: ₹{totalAmount.toLocaleString()}</h2>
            </div>
            <div className="mt-6 text-right">
              <button onClick={() => navigate("/orderconfirmation")} className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
