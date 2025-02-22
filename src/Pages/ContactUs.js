import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Get in Touch</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Have questions or need support? Reach out to us, and we'll be happy to help!
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-600">Contact Information</h2>
          <p className="text-gray-700 mt-3">📧 Email: support@shopscape.com</p>
          <p className="text-gray-700">📞 Phone: +91 98765 43210</p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-600">Send Us a Message</h2>
          <form className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4 h-32"></textarea>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
