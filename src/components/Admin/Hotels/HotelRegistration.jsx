import React from "react";
import Form from "../../reusable/layout/Form";
import {hotelRegistration} from "../../../api/hotelApi"
import { i, nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

function HotelRegistration() {
    const fields = [
        { label: "Hotel Name", name: "name", type: "text", placeholder: "Enter Hotel Name" },
        { label: "Slug", name: "slug", type: "text", placeholder: "ram-bag-palace" },
        { label: "Description", name: "description", type: "text", placeholder: "Enter Description" },
        { label: "Address", name: "address", type: "text", placeholder: "Full Address" },
        { label: "City", name: "city", type: "text" },
        { label: "State", name: "state", type: "text" },
        { label: "Country", name: "country", type: "text" },
        { label: "Rating", name: "rating", type: "number" },
        { label: "Price Per Night", name: "pricePerNight", type: "nmber" },
        { label: "Currency", name: "currency", type: "text" }
    ];

  const navigate = useNavigate();

    // Initial values (Prefilled Example Data)
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
        currency: ""
    };


    // Submit Handler
    const handleSubmit = async (data) => {
        try {
            console.log("Hotel Form Submitted:", data);

            // Call API to register hotel

            const response = await hotelRegistration({
                name: data.name,
                slug: data.slug,
                description: data.description,
                address: data.address,
                city: data.city,
                state: data.state,
                country: data.country,
                rating: data.rating,
                pricePerNight: data.pricePerNight,
                currency: data.currency
            })

            if (response.isSuccess === true) {
                navigate("/admindashboard/hotel");
            } else {
                alert("Hotel registration failed!");
            }

        } catch (error) {
            console.error("Error submitting hotel form:", error);

        }
    }

    return (
        <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-white mt-10">
            <h2 className="text-2xl font-bold mb-4  text-center">Hotel Registration</h2>

            <Form
                fields={fields}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel="Submit Hotel"
            />
        </div>
    )

}

export default HotelRegistration;