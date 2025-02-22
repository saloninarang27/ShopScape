import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import { CartProvider } from "./Pages/CartContext"; 
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import OrderConfirmation from "./Pages/OrderConfirmation";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />  
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
