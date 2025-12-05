import React from 'react'
import Header from '../../reusable/layout/Header'

function Dashboardheader() {
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
          { label: "Sign in", icon: "💬", href: "#" },
        ]}
        appButton={true}
        currency="INR"
        flag="https://flagcdn.com/w20/in.png"
      />

      {/* your pages here */}
    </div>
  )
}

export default Dashboardheader
