import React from "react";
import { motion } from "framer-motion";

export const Card = ({ card, index }) => {
  return (
    <motion.div
      key={index}
      className="relative rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl animate-borderGlow"></div>

      {/* Card Content */}
      <div className="relative z-10 bg-gray-800 rounded-xl shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{card.title}</h3>
          <p className="text-sm text-gray-300">{card.category}</p>
        </div>
        <div className="relative rounded-xl overflow-hidden group animate-borderGlow border-2 border-yellow-400">
          {/* Card Content */}
          <div className="relative z-10 bg-gray-800 rounded-xl shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img
              src={card.src}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.category}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
