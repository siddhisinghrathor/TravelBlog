import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import journeyData from "../data/journeyData";
import { motion } from "framer-motion";

const JourneyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const journey = journeyData[id];

  if (!journey) {
    return (
      <div className="p-8 text-center text-red-500">
        <h1>Journey not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-white text-black rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md brightness-50"
        style={{ backgroundImage: `url(${journey.image})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-3xl text-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {journey.title}
        </motion.h1>

        <motion.p
          className="text-gray-200 whitespace-pre-line mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {journey.content}
        </motion.p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition"
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  );
};

export default JourneyDetail;
