import { Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-[40px] w-auto"
              src="/bd-logo.png"
              alt="BlueDiamond Logo"
            />
            <h1 className="logo-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-tight">
              Blue<span className="text-blue-400">Diamond</span>
            </h1>
          </div>
          <p className="text-sm m-1">Your trusted partner for all services.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Dubai, United Arab Emirates</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@bluediamond.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-white hover:text-blue-400">
              Cleaning
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Disinfection
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Painting
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Transportation
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Home Renovation
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Gardening
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Electrical Services
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Pest Control
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
        © 2024 BlueDiamond. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
