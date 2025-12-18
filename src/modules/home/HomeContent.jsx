import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Users, Minus, Plus } from "lucide-react";
import { getHotelSearchLocation } from "../../api/hotelSearch"


function HomeContent() {
  const [showGuests, setShowGuests] = useState(false);
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([
    { adults: 1, children: 0, childAges: [] }
  ]);

  const totalTravellers = rooms.reduce(
    (sum, room) => sum + room.adults + room.children,
    0
  );

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      fetchLocations(query);
    }, 3000); // ⏱ 3 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, [query]);


  const fetchLocations = async (searchText = "") => {
    try {
      setLoading(true);

      const data = await getHotelSearchLocation(searchText);
       console.log("This is location data based on search =>",data);
      if (data.success) {
        setLocations(data.data);
        setShowDropdown(true);
      }
    } catch (err) {
      console.error("Failed to fetch locations", err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="w-full bg-white">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative h-[60vh] w-full">
        <img
          src="src/assets/images/Slider/Main.webp"
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
        <div className="bg-white shadow-lg mt-[-11%]  rounded-xl p-5 flex flex-col md:flex-row gap-4 items-center">

          {/* Location */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border p-3 rounded-lg">
            {/* <Search className="text-gray-500" /> */}
            {/* Input */}
            {/* <div className="flex items-center gap-3 border p-3 rounded-lg"> */}
              {/* <Search className="text-gray-500" /> */}
              <input
                type="text"
                placeholder="Where to?"
                className="w-full outline-none"
                value={query}
                onFocus={() => fetchLocations("")}
                onChange={(e) => setQuery(e.target.value)}
              />

            {/* </div> */}
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
          <div className="relative w-full md:w-1/4">
            <div
              onClick={() => setShowGuests(!showGuests)}
              className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer"
            >
              <Users className="text-gray-500" />
              <span className="text-gray-700 text-sm">
                {totalTravellers} travellers, {rooms.length} room
              </span>

            </div>

            {showGuests && (
              <div className="absolute top-14 left-0 w-80 bg-white border rounded-xl shadow-lg p-4 z-50 max-h-[420px] overflow-y-auto">

                {rooms.map((room, roomIndex) => (
                  <div key={roomIndex} className="mb-6">

                    {/* Room title */}
                    <div className="font-semibold mb-3">
                      Room {roomIndex + 1}
                    </div>

                    {/* Adults */}
                    <div className="flex justify-between mb-4">
                      <span>Adults</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            updated[roomIndex].adults = Math.max(1, room.adults - 1);
                            setRooms(updated);
                          }}
                          className="border rounded-full p-1"
                        >
                          <Minus size={16} />
                        </button>

                        <span>{room.adults}</span>

                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            updated[roomIndex].adults += 1;
                            setRooms(updated);
                          }}
                          className="border rounded-full p-1"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between mb-3">
                      <div>
                        <p>Children</p>
                        <p className="text-xs text-gray-500">Ages 0 to 17</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            const count = Math.max(0, room.children - 1);
                            updated[roomIndex].children = count;
                            updated[roomIndex].childAges =
                              updated[roomIndex].childAges.slice(0, count);
                            setRooms(updated);
                          }}
                          className="border rounded-full p-1"
                        >
                          <Minus size={16} />
                        </button>

                        <span>{room.children}</span>

                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            updated[roomIndex].children += 1;
                            updated[roomIndex].childAges.push(0);
                            setRooms(updated);
                          }}
                          className="border rounded-full p-1"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Child ages */}
                    {room.childAges.map((age, i) => (
                      <div key={i} className="mb-2">
                        <label className="text-sm font-medium">
                          Child {i + 1} age
                        </label>
                        <select
                          value={age}
                          onChange={(e) => {
                            const updated = [...rooms];
                            updated[roomIndex].childAges[i] = Number(e.target.value);
                            setRooms(updated);
                          }}
                          className="w-full border rounded-lg p-2 mt-1"
                        >
                          {Array.from({ length: 18 }, (_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}

                    {/* Remove room */}
                    {rooms.length > 1 && (
                      <button
                        onClick={() =>
                          setRooms(rooms.filter((_, i) => i !== roomIndex))
                        }
                        className="text-blue-600 text-sm mt-2"
                      >
                        Remove room
                      </button>
                    )}
                  </div>
                ))}

                {/* Add room */}
                <button
                  onClick={() =>
                    setRooms([...rooms, { adults: 1, children: 0, childAges: [] }])
                  }
                  className="text-blue-600 text-sm mb-4"
                >
                  Add another room
                </button>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-blue-600">
                    Need to book 9 or more rooms?
                  </p>
                  <button
                    onClick={() => setShowGuests(false)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>


          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full md:w-auto">
            Search
          </button>
        </div>
      </motion.div>

    </div>
  );
}

export default HomeContent;
