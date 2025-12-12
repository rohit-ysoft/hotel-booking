import React from "react";
import { createHotelFacility } from "../../../../api/hotelFacilityApi"; 
import Form from "../../../reusable/layout/Form";
import { useParams } from "react-router-dom";

function HotelFacilityRegistration() {
  const { hotelId } = useParams();

  const fields = [
    {
      label: "Facility Name",
      name: "name",
      type: "text",
      placeholder: "Free WiFi / Swimming Pool",
      required: true,
    },
    {
      label: "Icon (URL or Icon Name)",
      name: "icon",
      type: "text",
      placeholder: "wifi / https://icon.png",
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
      placeholder: "Short description...",
    },

    // ⭐ Select Dropdown
    {
      label: "Category",
      name: "category",
      type: "select",
      options: [
        { value: "POPULAR", label: "Popular" },
        { value: "ROOM", label: "Room Feature" },
        { value: "SAFETY", label: "Safety" },
        { value: "DINING", label: "Dining" },
        { value: "GENERAL", label: "General" },
        { value: "OTHER", label: "Other" },
      ],
    },

    {
      label: "Is Paid?",
      name: "isPaid",
      type: "checkbox",
    },
    {
      label: "Price (If Paid)",
      name: "price",
      type: "number",
      placeholder: "Enter Price",
    },

    {
      label: "Active Facility?",
      name: "isActive",
      type: "checkbox",
      defaultChecked: true,
    },

    // ⭐ ADD MULTIPLE IMAGE UPLOAD
    {
      label: "Facility Images",
      name: "images",
      type: "file",
      multiple: true,
      accept: "image/*"
    },
  ];

  const initialValues = {
    hotelId: hotelId,
    name: "",
    icon: "",
    description: "",
    category: "POPULAR",
    isPaid: false,
    price: 0,
    isActive: true,
    images: [], // ⭐ added for storing files
  };

  // ⭐ Submitting With FormData
  const handleSubmit = async (formData) => {
    try {
      const fd = new FormData();

      // Append simple text fields
      Object.keys(formData).forEach((key) => {
        if (key !== "images") {
          fd.append(key, formData[key]);
        }
      });

      // ⭐ Append multiple images
      if (formData.images && formData.images.length > 0) {
        formData.images.forEach((file) => {
          fd.append("images", file);
        });
      }

      console.log("Final FormData:", formData);

      const res = await createHotelFacility(fd); // send formdata
      console.log("Facility Created Successfully!", res);

      alert("Hotel facility added successfully!");

    } catch (err) {
      console.error(err);
      alert("Error creating facility");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
        Add Hotel Facility
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-5 sm:p-8 border border-gray-100">
        <Form
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          buttonLabel="Create Facility"
        />
      </div>
    </div>
  );
}

export default HotelFacilityRegistration;
