import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const PortFolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      videoLink: "https://www.youtube.com/watch?v=pWbMrx5rVBE",
      sourceCodeLink: "https://github.com/mongodb/mongo",
      description: "MongoDB is a popular NoSQL database known for its flexibility and scalability."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE",
      sourceCodeLink: "https://github.com/expressjs/express",
      description: "Express is a fast, unopinionated, minimalist web framework for Node.js."
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      videoLink: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      sourceCodeLink: "https://github.com/facebook/react",
      description: "ReactJS is a JavaScript library for building user interfaces, developed by Facebook."
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node.js",
      videoLink: "https://www.youtube.com/watch?v=ENrzD9HAZK4",
      sourceCodeLink: "https://github.com/nodejs/node",
      description: "Node.js is an open-source, cross-platform JavaScript runtime environment."
    },
  ];

  const openVideo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={name}
                className="w-full h-32 md:h-40 object-contain"
              />
              <div className="p-4">
                <div className="font-bold text-lg md:text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm md:text-base mb-4">{description}</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => openVideo(videoLink)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 md:px-4 py-1.5 md:py-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Watch Video
                  </button>
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 md:px-4 py-1.5 md:py-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
