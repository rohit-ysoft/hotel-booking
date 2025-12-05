import React from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Users } from "lucide-react";

function HomeContent() {
  return (
    <div className="w-full bg-white">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative h-[90vh] w-full">
        <img
          src="src/assets/images/Slider/HomeSlider1.jpg"
          alt="Hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-bold leading-tight"
          >
            Find Your Perfect Stay
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl"
          >
            Book luxury hotels, resorts, villas & more — all in one place.
          </motion.p>
        </div>
      </section>

      {/* ------------------ SEARCH BAR ------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-4 -mt-12 relative z-20"
      >
        <div className="bg-white shadow-lg rounded-xl p-5 flex flex-col md:flex-row gap-4 items-center">

          {/* Location */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border p-3 rounded-lg">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Where to?"
              className="w-full outline-none"
            />
          </div>

          {/* Check-in */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border p-3 rounded-lg">
            <Calendar className="text-gray-500" />
            <input type="date" className="w-full outline-none" />
          </div>

          {/* Check-out */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border p-3 rounded-lg">
            <Calendar className="text-gray-500" />
            <input type="date" className="w-full outline-none" />
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border p-3 rounded-lg">
            <Users className="text-gray-500" />
            <input
              type="number"
              placeholder="Guests"
              min="1"
              className="w-full outline-none"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto">
            Search
          </button>
        </div>
      </motion.div>

      {/* ------------------ FEATURES SECTION ------------------ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2077/2077502.png"
                className="h-16 mx-auto mb-4"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                We offer unbeatable prices across top-rated hotels worldwide.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/481/481430.png"
                className="h-16 mx-auto mb-4"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">
                Safe and encrypted bookings with instant confirmation.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709790.png"
                className="h-16 mx-auto mb-4"
                alt=""
              />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our support team is available anytime to assist you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomeContent;
