import React from "react";
import { motion } from "framer-motion";

const ReCard = ({
  image,
  title,
  subtitle,
  description,
  onClick,
  buttonLabel = "View Details",
  footer,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 
      hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* IMAGE */}
      {image && (
        <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
          <img
            src={image}
            alt={image}
            className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>

        {subtitle && (
          <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
        )}

        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        )}

        {/* Button */}
        <button
          className="mt-3 px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white 
                     hover:bg-blue-700 transition-all w-full sm:w-auto"
        >
          {buttonLabel}
        </button>
      </div>

      {/* FOOTER */}
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t text-sm text-gray-600">
          {footer}
        </div>
      )}
    </motion.div>
  );
};

export default ReCard;
