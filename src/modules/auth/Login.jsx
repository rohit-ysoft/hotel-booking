import React, { useState } from "react";
import { loginSuccess } from "../../redux/slices";
import Form from "../../components/reusable/layout/Form";
import { loginUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";
import Register from "../../components/common/Auth/Register";   // ⭐ Import Register component
import { useDispatch } from "react-redux";

export default function Login({ isPopup = false, closePopup }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openRegister, setOpenRegister] = useState(false);  // ⭐ Modal state
  const dispatch = useDispatch();
  const fields = [
    { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
    { label: "Password", name: "password", type: "password", placeholder: "••••••••" },
    { label: "Remember Me", name: "remember", type: "checkbox" },
  ];

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("User login Submitted Data =>", data);
    try {
      setLoading(true);
      setErrorMsg("");
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log("Login Response for Login User =>", response);

      const Newdata = await response;

      dispatch(
        loginSuccess({
          user: Newdata.user,
          token: Newdata.token,
        })
      );

      // Optional: persist login
      localStorage.setItem("token", Newdata.token);
      localStorage.setItem("user", JSON.stringify(Newdata.user));
      if (response.isSuccess === true) {
        //  setIsAuthenticated(true);

        if (closePopup) closePopup();
        if (response.role == 'SUPERADMIN' || response.role == 'ADMIN') {
          console.log("Login Response First condition role =>", response.role);

          navigate("/admindashboard");
        }
        else if (response.role == 'USER') {
          console.log("Login Response Second condition role =>", response.role);

          navigate("/hoteldashboard");
        }
      } else {
        setErrorMsg("Invalid login attempt!");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* MAIN LOGIN UI */}
      <div
        className={`${isPopup ? "" : "flex items-center justify-center min-h-screen bg-gray-50"
          }`}
      >
        <div
          className={`${isPopup
            ? "w-full bg-transparent shadow-none p-0"
            : "w-[400px] bg-white shadow-lg rounded-2xl p-8"
            }`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
            Sign in to Hotel Booking
          </h2>

          <p className="text-gray-500 text-center mb-6">
            Enter your email and password to access your account.
          </p>

          {errorMsg && (
            <p className="mb-4 text-red-600 text-center text-sm">{errorMsg}</p>
          )}

          {/* ⭐ Updated: Link triggers modal instead of routing */}
          <Form
            fields={fields}
            initialValues={{
              email: "jiteshchoudhary123@yopmail.com",
              password: "Jitesh123@",
              remember: false,
            }}
            onSubmit={handleSubmit}
            buttonLabel="Sign In"
            linkLabel="Don't have an account? Sign up"
            linkPath="#"                // not using route
            onLinkClick={() => setOpenRegister(true)}  // ⭐ OPEN POPUP
          />

          {loading && (
            <p className="mt-3 text-center text-purple-600">Signing in...</p>
          )}
        </div>
      </div>

      {/* ⭐ REGISTER POPUP MODAL */}
      {openRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[450px] relative">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 text-xl"
              onClick={() => setOpenRegister(false)}
            >
              ✖
            </button>

            {/* Load Register Component */}
            <Register isPopup={true} closePopup={() => setOpenRegister(false)} />
          </div>
        </div>
      )}
    </>
  );
}
