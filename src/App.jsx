import React from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white  min-h-screen">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Explore Section with Animated Stacked Cards */}
      <AppleCardsCarouselDemo />

      {/* Journal / Blog Posts Section */}
      <Journal />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
