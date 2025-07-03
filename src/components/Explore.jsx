import React from "react";
import coorgImg from "../assets/coorg.png";
import beachImg from "../assets/hampi.png";
import forestImg from "../assets/kerala.png";
import cityImg from "../assets/orissa.png";
import desertImg from "../assets/rajesthan.png";
import snowImg from "../assets/shimla.png";

const cards = [
  {
    title: "Coorg Getaway",
    description: "Feel the fresh air and explore the peaks.",
    image: coorgImg,
  },
  {
    title: "Beach Paradise",
    description: "Relax by the waves and soak the sun.",
    image: beachImg,
  },
  {
    title: "Forest Adventure",
    description: "Get lost in the green and discover wildlife.",
    image: forestImg,
  },
  {
    title: "City Lights",
    description: "Experience the hustle and nightlife of the city.",
    image: cityImg,
  },
  {
    title: "Desert Safari",
    description: "Feel the thrill of endless dunes.",
    image: desertImg,
  },
  {
    title: "Snowy Wonderland",
    description: "Chill in snowy landscapes and cozy cabins.",
    image: snowImg,
  },
];

const Explore = () => {
  return (
    <section className="py-10 px-5 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Explore Destinations
      </h2>

      <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory no-scrollbar px-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[250px] snap-start bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
