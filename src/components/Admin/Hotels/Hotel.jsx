import React, { useEffect, useState } from "react";
import { getAllHotels, hotelUpdate } from "../../../api/hotelApi";
import { useNavigate } from "react-router-dom";

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
    
  const navigate = useNavigate();
  // ⭐ Track which hotel is in edit mode
  const [editHotelId, setEditHotelId] = useState(null);

  // ⭐ Store editable form values
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getAllHotels();

        const hotelsArray = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        setHotels(hotelsArray);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // ⭐ Handle input change in edit mode
  const handleChange = (field, value) => {
    setEditFormData({ ...editFormData, [field]: value });
  };

  // ⭐ Save updated hotel
  const handleSave = async () => {
    try {
      const res = await hotelUpdate(editHotelId, editFormData);

      // Update list UI also
      const updatedList = hotels.map((h) =>
        h._id === editHotelId ? { ...h, ...editFormData } : h
      );

      setHotels(updatedList);
      setEditHotelId(null); // exit edit mode
      setEditFormData({});
      // alert("Hotel updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      // alert("Failed to update hotel.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen px-1" >
      <h1 className="text-3xl font-bold mb-6">Hotels List</h1>

      {hotels.length === 0 ? (
        <p className="text-gray-600">No hotels available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"

            >
              {/* IMAGE */}
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3 flex items-center justify-center" onClick={() => navigate(`/admindashboard/hoteldetails/${hotel._id}`)}>
                {hotel.images?.length > 0 ? (
                  <img
                    src={"http://localhost:4000" + hotel.images[0].url}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>

              {/* IF IN EDIT MODE */}
              {editHotelId === hotel._id ? (
                <>
                  <input
                    type="text"
                    value={editFormData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <textarea
                    value={editFormData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="text"
                    value={editFormData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="text"
                    value={editFormData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="text"
                    value={editFormData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="text"
                    value={editFormData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="number"
                    value={editFormData.pricePerNight}
                    onChange={(e) =>
                      handleChange("pricePerNight", e.target.value)
                    }
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <input
                    type="number"
                    value={editFormData.rating}
                    onChange={(e) => handleChange("rating", e.target.value)}
                    className="border p-2 w-full mb-2 rounded"
                  />

                  <select
                    value={editFormData.isActive}
                    onChange={(e) =>
                      handleChange("isActive", e.target.value === "true")
                    }
                    className="border p-2 w-full mb-2 rounded"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>

                  {/* SAVE + CANCEL BUTTON */}
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={handleSave}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditHotelId(null)}
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* NORMAL DISPLAY */}
                  <h2 className="text-xl font-semibold">{hotel.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {hotel.description}
                  </p>

                  <p className="text-gray-700 text-sm">
                    <b>Address:</b> {hotel.address}
                  </p>

                  <p className="text-gray-700 text-sm">
                    <b>City:</b> {hotel.city}
                  </p>

                  <p className="text-gray-700 text-sm">
                    <b>State:</b> {hotel.state}
                  </p>

                  <p className="text-gray-700 text-sm">
                    <b>Country:</b> {hotel.country}
                  </p>

                  <p className="text-lg font-bold mt-3">
                    ₹{hotel.pricePerNight} / night
                  </p>

                  <p className="text-yellow-500 mt-1">
                    {"⭐".repeat(hotel.rating)}
                  </p>

                  <p
                    className={`mt-3 w-fit px-3 py-1 rounded-full text-sm font-medium ${
                      hotel.isActive
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {hotel.isActive ? "Active" : "Inactive"}
                  </p>

                  {/* EDIT BUTTON */}
                  <button
                    onClick={() => {
                      setEditHotelId(hotel._id);
                      setEditFormData(hotel); // preload values
                    }}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hotel;
