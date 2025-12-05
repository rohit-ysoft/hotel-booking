import React from "react";
import Form from "../../components/reusable/layout/Form";
import { createUser } from "../../api/authApi"; // update path if needed

export default function Register() {
  // Form Fields
  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "you@example.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      placeholder: "+91 9876543210",
    },
  ];

  // Submit Handler
  const handleSubmit = async (formData) => {
    try {
      const res = await createUser(formData);
      console.log("Registration Success:", res);
      alert("User registered successfully!");
    } catch (err) {
      console.error("Registration Failed:", err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[400px] bg-white shadow-lg rounded-2xl p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Create your account
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Fill in the details to sign up.
        </p>

        {/* Reusable Form */}
        <Form
          fields={fields}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
        />

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </p>

      </div>
    </div>
  );
}
