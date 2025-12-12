import React from 'react';
import Header from '../../reusable/layout/Header';
import { useNavigate } from "react-router-dom";

function Dashboardheader() {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        logo="src/assets/images/logo.svg"
        title="Hotels.com"
        mainMenu={[
          { label: "Shop travel", href: "#", icon: "▼" }
        ]}
        rightMenu={[
          { label: "List your property", href: "#" },
          { label: "Support", href: "#" },
          { label: "Trips", href: "#" },

          // 🔥 UPDATED: Sign Out → Navigate
          { 
            label: "Sign out", 
            icon: "💬", 
            onClick: () => navigate("/home/logout") 
          },
        ]}
        appButton={true}
        currency="INR"
        flag="https://flagcdn.com/w20/in.png"
      />

      {/* your dashboard pages here */}
    </div>
  );
}

export default Dashboardheader;
