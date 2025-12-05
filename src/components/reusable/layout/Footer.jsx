import React from "react";

const Footer = ({
  companyName = "Diu Travels",
  aboutText = "Your premier destination for Diu vacation packages and hotel quotations.",
  quickLinks = [],
  contact = {},
  socialLinks = {},
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gradient-to-r from-neutral-800 to-zinc-600 text-white mt-12">
      
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* ABOUT */}
        <div>
          <h4 className="font-semibold text-lg mb-3">About {companyName}</h4>
          <p className="text-sm text-gray-200">{aboutText}</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-white hover:underline transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
          <p className="text-sm text-gray-200">
            Email: {contact.email ? contact.email : "N/A"}
          </p>
          <p className="text-sm text-gray-200">
            Phone: {contact.phone ? contact.phone : "N/A"}
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">

            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook hover:text-white"></i>
              </a>
            )}

            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter hover:text-white"></i>
              </a>
            )}

            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram hover:text-white"></i>
              </a>
            )}

            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin hover:text-white"></i>
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs py-4 bg-purple-900">
        © {year} {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
