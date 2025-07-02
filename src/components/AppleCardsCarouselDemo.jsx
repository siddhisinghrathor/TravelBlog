import React from "react";
import { Carousel } from "./ui/AppleCardsCarousel/Carousel";
import { Card } from "./ui/AppleCardsCarousel/Card";

const data = [
  {
    category: "Adventure",
    title: "Explore the Mountains",
    src: "https://source.unsplash.com/400x300/?mountain",
  },
  {
    category: "Relaxation",
    title: "Beach Getaway",
    src: "https://source.unsplash.com/400x300/?beach",
  },
  {
    category: "Nature",
    title: "Forest Trails",
    src: "https://source.unsplash.com/400x300/?forest",
  },
  {
    category: "City Life",
    title: "Urban Nights",
    src: "https://source.unsplash.com/400x300/?city",
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} layout={false} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white mb-10">
        Explore Top Destinations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
