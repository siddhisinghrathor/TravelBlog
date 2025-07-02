import React from "react";
import heroImage from "../assets/hero.png";
import { div } from "framer-motion/client";

const Hero = () => {
    return (
      <div>
        <section
          className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-animate"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          {/* ✅ TEXT CONTENT */}
          <h1 className="text-5xl font-bold mb-2 fade-in-up">
            The Great Outdoors
          </h1>
          <p
            className="text-lg mb-6 fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            Wander often. Wonder always.
          </p>
          <button
            className="border border-white px-6 py-2 rounded hover:scale-105 transition transform hover:bg-white hover:text-black fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            ▶ Play Video
          </button>

          {/* ✅ BLACK OVERLAY WITH ANIMATION */}
          <div className="absolute inset-0 bg-black opacity-60 -z-10 pulse-overlay"></div>
        </section>
      </div>
    );
};

export default Hero;
