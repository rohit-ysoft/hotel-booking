import React, { useState } from "react";
import Form from "../../components/reusable/form";
import { loginUser } from "../../api/authApi"; // <-- update path based on your project
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fields = [
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
      label: "Remember Me",
      name: "remember",
      type: "checkbox",
    },
  ];


  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();


  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg("");

      // Call Login API
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });

      console.log("Login Success:", response);


      // Check success
      if (response.isSuccess === true) {
        console.log("User logged in successfully!", response.isSuccess);
        // Save token if required
        // localStorage.setItem("token", response.token);
        setIsAuthenticated(true);
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        setErrorMsg("Invalid login attempt!");
      }
      // You can store token or redirect here
      // localStorage.setItem("token", response.token);

    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[400px] bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Sign in to Diu Travels
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Enter your email and password to access your account.
        </p>

        {/* Error Message */}
        {errorMsg && (
          <p className="mb-4 text-red-600 text-center text-sm">
            {errorMsg}
          </p>
        )}

        {/* Reusable Form */}
        <Form
          fields={fields}
          initialValues={{ email: "rohitsaini123@yopmail.com", password: "Rohit@123", remember: false }}
          onSubmit={handleSubmit}
        />

        {/* Loading Indicator */}
        {loading && (
          <p className="mt-3 text-center text-purple-600">Signing in...</p>
        )}

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
