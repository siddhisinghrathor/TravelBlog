import React from "react";
export const Carousel = ({ items }) => {
  return (
    <div className="relative w-full flex justify-center items-center space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {items}
    </div>
  );
};
