import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getHotelById } from "../../../api/hotelApi"; // your secure API function

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const data = await getHotelById(id);
        console.log("Fetched Hotel Data in Hotel Details =>", data);
        setHotel(data?.data || data);

      } catch (error) {
        console.error("Failed to load hotel", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading) return <p className="p-5 text-lg">Loading...</p>;
  if (!hotel) return <p className="p-5 text-red-500">Hotel not found</p>;

  return (
    <div className="p-6 pl-3 bg-gray-100 min-h-screen ">

      {/* -------- HEADER -------- */}
      <div className="bg-white rounded-xl p-5 shadow-md w-150/148  ">
        <div className="flex justify-between items-start  ">

          {/* Hotel Info */}
          <div>
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <div className="flex items-center gap-2 mt-1 text-gray-700">
              <span>{hotel.address}, {hotel.city}</span>
              <span className="text-green-500">● {hotel.rating} ⭐</span>
              <span className="text-blue-600 underline cursor-pointer">{hotel.reviewsCount || 0} Reviews</span>
            </div>
          </div>

          {/* Price & Button */}
          <div className="text-right">
            <p className="line-through text-gray-400 text-sm">₹ {hotel.oldPrice || hotel.pricePerNight + 5000}</p>
            <p className="text-2xl font-bold text-orange-600">₹ {hotel.pricePerNight}</p>
            <p className="text-xs text-gray-500">per night</p>

            <button className="mt-2 bg-orange-500 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-600">
              Select Room
            </button>
          </div>
        </div>

        {/* -------- IMAGES -------- */}
        <div className="grid grid-cols-4 gap-3 mt-5">

          {/* Main Image */}
          <div className="col-span-2 h-64">
            <img
              src={`http://localhost:4000${hotel.images?.[0]?.url}`}
              className="w-full h-full object-cover rounded-lg"
              alt="main"
            />
          </div>

          {/* 3 Small Images */}
          {hotel.images?.slice(1, 4).map((img, i) => (
            <div key={i} className="h-32">
              <img
                src={`http://localhost:4000${img.url}`}
                className="w-full h-full object-cover rounded-lg"
                alt={`img-${i}`}
              />
            </div>
          ))}

          {/* + More Photos */}
          <div className="relative h-32 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
            <span className="absolute text-white font-bold text-xl bg-black/50 px-3 py-1 rounded">
              +{hotel.images?.length - 4} Photos
            </span>
          </div>

        </div>
      </div>

      {/* -------- AMENITIES -------- */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-6 w-150/148">
        <h2 className="text-xl font-semibold mb-3">Popular Amenities</h2>
        <button className="bg-teal-700 ms-[1100px]  text-amber-50 px-2 py-2 rounded-2xl"  onClick={() => navigate(`add-facility/${id}`)}>Register Facility</button>
     
        <Outlet />

        <button className="text-orange-600 mt-3">View All Amenities</button>
      </div>

      {/* -------- LOCATION -------- */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-6 w-150/148">
        <h2 className="text-xl font-semibold mb-3">Location</h2>
        <button className="bg-gray-800 text-white px-5 py-2 rounded-lg">
          View Location
        </button>
      </div>

    </div>
  );
};

export default HotelDetails;
