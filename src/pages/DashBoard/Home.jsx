import Footer from "../../components/common/Hotel/HotelFooter";
import HomeContent from "../../components/common/Home/HomeContent";
import Header from "../../components/reusable/layout/Header";
import HomeSlider from "../../components/common/Home/HomeSlider";
// import Logo from "../../assets/images/Slider/Logo.png";

export default function Home() {
  const mainMenu = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const rightMenu = [
    { label: "Login", href: "/login" },
  ];

  return (
    <>
      <Header
        // logo={Logo}
        title="TravelSite"
        mainMenu={mainMenu}
        rightMenu={rightMenu}
        appButton={true}
        currency="INR"
        flag="https://flagcdn.com/w20/in.png"
      />
        <HomeContent />
        <HomeSlider />
        <Footer />
    </>
  );
}
