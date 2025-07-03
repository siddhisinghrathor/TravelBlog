import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "./ui/AppleCardsCarousel/Carousel";
import { Card } from "./ui/AppleCardsCarousel/Card";

import coorgImg from "../assets/coorg.png";
import beachImg from "../assets/hampi.png";
import forestImg from "../assets/kerala.png";
import cityImg from "../assets/orissa.png";

const data = [
  { category: "Adventure", title: "Explore the Mountains", src: coorgImg },
  { category: "Relaxation", title: "Beach Getaway", src: beachImg },
  { category: "Nature", title: "Forest Trails", src: forestImg },
  { category: "City Life", title: "Urban Nights", src: cityImg },
];

export function AppleCardsCarouselDemo() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? data : data.filter((card) => card.category === filter);

  const cards = filteredData.map((card, index) => (
    <Link key={index} to={`/journey/${index + 1}`}>
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        Explore Top Destinations
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        {["All", "Adventure", "Relaxation", "Nature", "City Life"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat ? "bg-white text-black" : "bg-gray-700"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Carousel */}
      <Carousel items={cards} />
    </div>
  );
}
