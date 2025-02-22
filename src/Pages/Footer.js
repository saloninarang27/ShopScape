import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="space-y-2">
        <h1 className="text-4xl font-bold text-pink-600">ShopScape</h1><br></br>
        <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-pink-700">New Delhi</p>
          <p className="text-pink-700">📞 +91 13569876540</p>
          <p className="text-pink-700">⏰ 8 AM - 8 PM</p>
          <h3 className="font-semibold text-lg">Follow us</h3>
          <div className="flex space-x-3 text-pink-700 text-xl">
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg">About</h3>
          <ul className="space-y-1 text-pink-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">My Account</h3>
          <ul className="space-y-1 text-pink-600">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Install App</h3>
          <p className="text-gray-600">From App Store or Google Play</p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="flex items-center bg-pink-500 text-white px-4 py-2 rounded">
              <FaApple className="mr-2" /> App Store
            </a>
            <a href="#" className="flex items-center bg-pink-500 text-white px-4 py-2 rounded">
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
          </div>
          <h3 className="font-semibold text-lg">Secured Payment Gateways</h3>
          <div className="grid grid-cols-2 gap-4 mt-3 text-pink-600 text-xl">
            <div className="flex items-center space-x-2">
              <FaCcVisa /> <span>Visa</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCcMastercard /> <span>MasterCard</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCreditCard /> <span>Maestro</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCcAmex /> <span>American Express</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-pink-600 text-sm">
        © 2025, <span className="font-bold">ShopScape</span> | Saloni
      </div>
    </footer>
  );
};

export default Footer;
