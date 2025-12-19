import React from "react";
import { Building2 } from "lucide-react"; // optional icon library

function HotelSearch({
  city = "New York",
  checkIn = "Wed, 4 Feb",
  checkOut = "Thu, 5 Feb",
  travellers = 3,
  rooms = 1,
}) {
  return (
    <div className="max-w-md mt-12 w-72 ms-30" >
      <div className="flex items-center gap-4 rounded-xl border bg-amber-100 border-blue-400 p-4 shadow-sm hover:shadow-md transition">
        
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
          <Building2 className="h-6 w-6 text-blue-600" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-gray-900">
            Stays in {city}
          </h3>

          <p className="text-sm text-gray-600">
            {checkIn} – {checkOut}
          </p>

          <p className="text-sm text-gray-600">
            {travellers} travellers · {rooms} room
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
