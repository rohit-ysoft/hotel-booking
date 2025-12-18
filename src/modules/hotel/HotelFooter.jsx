import React from 'react'
import Footer from '../../components/reusable/layout/Footer'

function HotelFooter() {
  return (
    <div>
  
      <Footer
        companyName="Diu Travels"
        aboutText="We help you find the best hotels and tour packages in Diu."
        quickLinks={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: "Hotels", href: "/hotels" },
          { label: "Contact", href: "/contact" },
        ]}
        contact={{
          email: "info@diutravels.com",
          phone: "+91-9876543210",
        }}
        socialLinks={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        }}
      />
    </div>
  )
}

export default HotelFooter

