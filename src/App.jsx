import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import JourneyDetail from "./components/JourneyDetail";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AppleCardsCarouselDemo />
                <Journal />
                <Footer />
              </>
            }
          />
          <Route path="/journey/:id" element={<JourneyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
