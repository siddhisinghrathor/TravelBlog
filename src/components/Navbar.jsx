import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 textblack">
      <div className="text-xl font-bold">Travel Blog</div>
      <ul className="flex space-x-6">
        <li>About</li>
        <li>Explore</li>
        <li>Journal</li>
        <li>Search</li>
      </ul>
    </nav> 
  );
};

export default Navbar;
