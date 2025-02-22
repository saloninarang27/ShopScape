import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">ShopScape</h1>
        <Link to="/cart" className="relative text-pink-700 lg:order-last">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <ul className="hidden lg:flex space-x-6 text-pink-700">
          <li><Link to="/" className="hover:text-pink-800">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-800">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-800">Contact Us</Link></li>
        </ul>
        <button
          className="lg:hidden text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-md p-4 absolute w-full left-0 top-16 z-10">
          <Link to="/" className="py-2 text-pink-600 font-medium hover:text-pink-800" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="py-2 text-pink-600 font-medium hover:text-pink-800" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="py-2 text-pink-600 font-medium hover:text-pink-800" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
