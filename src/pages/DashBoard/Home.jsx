import Footer from "../../components/common/Hotel/HotelFooter";
import HomeContent from "../../components/common/Home/HomeContent";
import Header from "../../components/reusable/layout/Header";
import HomeSlider from "../../components/common/Home/HomeSlider";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "../../components/common/Auth/Login";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const mainMenu = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const rightMenu = [
    {
      label: "Sign in",
      onClick: () => setShowLogin(true), // opens popup
    },
  ];

  return (
    <>
      <Header
        title="TravelSite"
        mainMenu={mainMenu}
        rightMenu={rightMenu}
        appButton={true}
        currency="INR"
        flag="https://flagcdn.com/w20/in.png"
      />

      <Outlet />

      <HomeContent />
      <HomeSlider />
      <Footer />

      {/* ⭐ LOGIN POPUP MODAL ⭐ */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl relative w-[380px]">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-lg font-bold"
            >
              ✖
            </button>

            {/* Login Component */}
            <Login isPopup={true} closePopup={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
}
