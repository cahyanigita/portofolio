import Footer from "./footer";
import LandingPage from "../features/landing-page";
import Navbar from "./navbar";
import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <LandingPage />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
