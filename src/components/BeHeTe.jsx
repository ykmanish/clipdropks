import React from "react";

const BeHeTe = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mt-10 mb-32">
      <div className="text-5xl small tracking-tight  text-[#0c0c0c]">
        Our flexible team{" "}
        <span className="inline-flex -space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://assets.lummi.ai/assets/QmZyKViuHBQKhPmBVPz9RYthcgQfQx5ZYnTTuPn6yZw414?auto=format&w=1500" // Replace with your image path or URL
              alt="Person 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://assets.lummi.ai/assets/QmZyKViuHBQKhPmBVPz9RYthcgQfQx5ZYnTTuPn6yZw414?auto=format&w=1500" // Replace with your image path or URL
              alt="Person 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://assets.lummi.ai/assets/QmZyKViuHBQKhPmBVPz9RYthcgQfQx5ZYnTTuPn6yZw414?auto=format&w=1500" // Replace with your image path or URL
              alt="Person 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://assets.lummi.ai/assets/QmZyKViuHBQKhPmBVPz9RYthcgQfQx5ZYnTTuPn6yZw414?auto=format&w=1500" // Replace with your image path or URL
              alt="Person 4"
              className="w-full h-full object-cover"
            />
          </div>
        </span>{" "}
        has a wide range of skills, which lets us look at projects from a
        complete point of view that combines creativity{" "}
        <span className="text-4xl" role="img" aria-label="art palette">
          🎨
        </span>{" "}
        and usefulness{" "}
        <span className="text-4xl" role="img" aria-label="sparkles">
          ✨
        </span>
        .
      </div>
    </div>
  );
};

export default BeHeTe;
