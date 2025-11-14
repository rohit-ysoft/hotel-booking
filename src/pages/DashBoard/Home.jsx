import React from "react";


const Home = () => {
  const hotels = [
    {
      name: "Oceanview",
      subtitle: "Oceanview Paradise",
      rating: 4.9,
      tag: "5-Star",
      price: "₹3900",
      satisfaction: "104%",
      reviews: 312,
      facilities: ["Beachfront", "5-Star Service", "Private Pool"],
      color: "bg-cyan-500",
    },
    {
      name: "Luxury Suites",
      subtitle: "Luxury Suites Diu",
      rating: 4.85,
      tag: "Premium Suite",
      price: "₹3900",
      satisfaction: "99%",
      reviews: 298,
      facilities: ["Suite Rooms", "Spa", "Restaurant"],
      color: "bg-amber-400",
    },
      {
      name: "Luxury Suites",
      subtitle: "Luxury Suites Diu",
      rating: 4.85,
      tag: "Premium Suite",
      price: "₹3900",
      satisfaction: "99%",
      reviews: 298,
      facilities: ["Suite Rooms", "Spa", "Restaurant"],
      color: "bg-indigo-400",
    },
      {
      name: "Luxury Suites",
      subtitle: "Luxury Suites Diu",
      rating: 4.85,
      tag: "Premium Suite",
      price: "₹3900",
      satisfaction: "99%",
      reviews: 298,
      facilities: ["Suite Rooms", "Spa", "Restaurant"],
      color: "bg-fuchsia-400",
    },
  ];

  return (
    <>
    
    <div className="px-4 md:px-8 py-8 mt-2">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Discover the Best Hotels 
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Book your dream vacation with exclusive rates.
      </p>
      <div className="flex justify-center mb-8">
        <button className="bg-purple-700 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-800">
          Get My Quotation
        </button>
      </div>

      <div className="grid md:grid-cols-[250px_1fr] gap-6">
        {/* Filters */}
        <aside className="bg-white rounded-xl shadow p-4 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Sort By</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="radio" name="sort" defaultChecked /> Top Rated</li>
              <li><input type="radio" name="sort" /> Price: Low to High</li>
              <li><input type="radio" name="sort" /> Price: High to Low</li>
              <li><input type="radio" name="sort" /> Most Reviewed</li>
              
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Budget (₹0–5K)</li>
              <li><input type="checkbox" /> Moderate (₹5K–10K)</li>
              <li><input type="checkbox" /> Premium (₹10K+)</li>
            </ul>
          </div>

           <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> 4.5+ Stars</li>
              <li><input type="checkbox" /> 4.0+ Stars</li>
              <li><input type="checkbox" /> 3.5+ Stars</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Luxury</li>
              <li><input type="checkbox" /> Premium</li>
              <li><input type="checkbox" /> Standard</li>
              <li><input type="checkbox" /> Budget</li>

            </ul>
          </div>

             <div>
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Free WiFi</li>
              <li><input type="checkbox" /> Parking</li>
              <li><input type="checkbox" /> Swimming Pool</li>
              <li><input type="checkbox" /> Spa & Wellness</li>

            </ul>
          </div>
          
        </aside>
        

        {/* Hotels */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Hotels</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {hotels.map((h, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${h.color} text-white`}>
                <div className="p-6 h-40 flex flex-col justify-center text-center text-2xl font-semibold">
                  {h.name}
                </div>
                <div className="bg-white text-gray-800 p-4">
                  <h3 className="font-bold">{h.subtitle}</h3>
                  <p className="text-sm text-gray-500 mt-1">Facilities:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {h.facilities.map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-purple-700">{h.price}</p>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-linear-to-r from-teal-600 to-cyan-600 text-white text-center py-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-2">Ready to Plan Your Diu Getaway?</h3>
        <p className="mb-4">Get a personalized quotation tailored to your preferences.</p>
        <button className="bg-purple-800 px-6 py-2 rounded-lg hover:bg-purple-900">
          Get My Hotel Quotation
        </button>
      </div>
    </div>
    </>

  );
};

export default Home;
