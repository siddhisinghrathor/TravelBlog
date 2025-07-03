import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; // ✅ Ensure it's lowercase and no trailing space

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      {/* Background Image */}
      <motion.img
        src={heroImg}
        alt="Travel Blog Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          Your Next Journey Awaits
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover beautiful destinations and make memories for a lifetime.
        </p>
        <Link
          to="/explore"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Explore Now
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
