import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-purple-800 to-pink-600 text-white mt-12">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">About Diu Travels</h4>
          <p className="text-sm text-gray-200">
            Your premier destination for Diu vacation packages and hotel quotations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li>Home</li>
            <li>Packages</li>
            <li>Hotels</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p className="text-sm">Email: info@diutravels.com</p>
          <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-3 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-purple-900">
        © 2024 Diu Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
