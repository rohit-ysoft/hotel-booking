import React from "react";
import Form from "../../reusable/layout/Form";
import { createUser } from "../../../api/authApi";

export default function Register({ isPopup = false, closePopup }) {

  const fields = [
    { label: "Full Name", name: "fullName", type: "text", placeholder: "John Doe" },
    { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
    { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
    { label: "Phone Number", name: "phone", type: "text", placeholder: "+91 9876543210" },
  ];

  const handleSubmit = async (formData) => {
    try {
      const res = await createUser(formData);
      alert("User registered successfully!");

      if (closePopup) closePopup();   // ⭐ Auto-close popup on success
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <div className={`${isPopup ? "" : "flex items-center justify-center min-h-screen bg-gray-50"}`}>
      <div className={`${isPopup ? "" : "w-[400px] bg-white shadow-lg rounded-2xl p-8"}`}>

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Create your account
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Fill in the details to sign up.
        </p>

        <Form
          fields={fields}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
          buttonLabel="Create Account"
        />

      </div>
    </div>
  );
}
