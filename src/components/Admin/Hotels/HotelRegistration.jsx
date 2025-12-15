import React from "react";
import Form from "../../reusable/layout/Form";
import { hotelRegistration } from "../../../api/hotelApi";
import { useNavigate } from "react-router-dom";
import { File } from "lucide-react";

function HotelRegistration() {

  const navigate = useNavigate();

const fields = [
  { label: "Hotel Name", name: "name", type: "text", placeholder: "Enter Hotel Name" },
  { label: "Slug", name: "slug", type: "text", placeholder: "ram-bag-palace" },
  { label: "Description", name: "description", type: "text", placeholder: "Enter Description" },
  { label: "Address", name: "address", type: "text", placeholder: "Full Address" },
  { label: "City", name: "city", type: "text" },
  { label: "State", name: "state", type: "text" },
  { label: "Country", name: "country", type: "text" },
  { label: "Rating", name: "rating", type: "number" },
  { label: "Price Per Night", name: "pricePerNight", type: "number" },
  { label: "Currency", name: "currency", type: "text" },

  // 👇 Multiple images
  { label: "Hotel Images", name: "images", type: "file", multiple: true }
];


const initialValues = {
  name: "",
  slug: "",
  description: "",
  address: "",
  city: "",
  state: "",
  country: "",
  rating: "",
  pricePerNight: "",
  currency: "",
  images: []   // 👈 array for multiple files
};


const handleSubmit = async (data) => {
  try {
    const formData = new FormData();

    // Append normal fields
    Object.keys(data).forEach((key) => {
      if (key !== "images") {
        formData.append(key, data[key]);
      }
    });

    // Append multiple images
    data.images.forEach((file) => {
      formData.append("images", file);
    });

    const response = await hotelRegistration(formData);

    if (response?.isSuccess) {
      navigate("/admindashboard/hotel");
    } else {
      alert("Hotel registration failed!");
    }
  } catch (error) {
    console.error("Error submitting hotel form:", error);
  }
};


  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Responsive Card */}
      <div className="
        w-full
        max-w-md
        sm:max-w-2xl
        md:max-w-2xl
        lg:max-w-4xl
        bg-white
        mt-6
        sm:mt-10
        p-4
        sm:p-6
        md:p-8
        rounded-xl
        shadow-lg
      ">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Hotel Registration
        </h2>

        <Form
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          buttonLabel="Submit Hotel"
        />
      </div>
    </div>
  );
}

export default HotelRegistration;
