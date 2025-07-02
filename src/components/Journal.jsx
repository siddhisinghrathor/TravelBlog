import React from "react";

const Journal = () => {
  const posts = [
    {
      date: "May 30, 2017",
      title: "An Unforgettable",
      description:
        "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
    },
    {
      date: "May 28, 2017",
      title: "Symphonies in Steel",
      description:
        "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
    },
  ];

  return (
    <section className="py-12 text-center text-white">
      <h2 className="text-3xl mb-4">The Journal</h2>
      <p className="mb-8">
        Our favorite stories about public lands and outdoor experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded text-left">
            <div className="h-40 bg-gray-600 mb-4">Image Here</div>
            <p className="text-sm">{post.date}</p>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journal;
