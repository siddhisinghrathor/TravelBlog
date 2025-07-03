import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import keralaImg from "../assets/kerala.png";
import beachImg from "../assets/orissa.png";
import cityImg from "../assets/hampi.png";

const posts = [
  {
    id: 1,
    title: "Wonders of Kerala Backwaters",
    description:
      "Sail through the serene backwaters of Kerala and experience lush green landscapes, houseboats, and rich culture.",
    image: keralaImg,
    date: "July 3, 2025",
  },
  {
    id: 2,
    title: "Escape to the Beaches of Goa",
    description:
      "Golden sands, vibrant nightlife, and breathtaking sunsets await you in Goa’s tropical paradise.",
    image: beachImg,
    date: "June 25, 2025",
  },
  {
    id: 3,
    title: "Exploring Bangalore: Garden City Vibes",
    description:
      "Dive into the city of gardens, cafes, and rich history while enjoying the best of urban and nature.",
    image: cityImg,
    date: "June 18, 2025",
  },
];

const Journal = () => {
  const navigate = useNavigate();

  const handleCardClick = (postId) => {
    navigate(`/journey/${postId}`); // Navigate to journey detail page
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Travel Journals to Inspire Your Next Adventure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500"
              onClick={() => handleCardClick(post.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover bg-black"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.description}</p>
                <p className="text-gray-500 text-xs mt-3">{post.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
