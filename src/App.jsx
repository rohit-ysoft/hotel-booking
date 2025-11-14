import React from "react";
import Header from "./shared/components/header";
import Sidebar from "./shared/components/sidebar";
import Home from "./pages/DashBoard/Home";
import Footer from "./shared/components/footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Home />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
