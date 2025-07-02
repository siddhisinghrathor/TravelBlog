import React from "react";

const cards = [
  {
    title: "Coorg Getaway",
    description: "Experience the lush greenery and coffee plantations.",
    description: "Feel the fresh air and explore the peaks.",
    image: "https://source.unsplash.com/400x300/?mountain",
  },
  {
    title: "Beach Paradise",
    description: "Relax by the waves and soak the sun.",
    image: "https://source.unsplash.com/400x300/?beach",
  },
  {
    title: "Forest Adventure",
    description: "Get lost in the green and discover wildlife.",
    image: "https://source.unsplash.com/400x300/?forest",
  },
  {
    title: "City Lights",
    description: "Experience the hustle and nightlife of the city.",
    image: "https://source.unsplash.com/400x300/?city,night",
  },
  {
    title: "Desert Safari",
    description: "Feel the thrill of endless dunes.",
    image: "https://source.unsplash.com/400x300/?desert",
  },
  {
    title: "Snowy Wonderland",
    description: "Chill in snowy landscapes and cozy cabins.",
    image: "https://source.unsplash.com/400x300/?snow",
  },
];

const Explore = () => {
  return (
    <section className="py-10 px-5 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Explore Destinations
      </h2>

      <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide">
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
