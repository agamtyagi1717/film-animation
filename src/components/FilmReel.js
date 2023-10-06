import React from "react";

const FilmReel = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="reel">
          <img
            className={`reel-img img-${index + 1}`}
            src={require(`../assets/image${index + 1}.jpg`)}
            alt="bg-img"
          />
        </div>
      ))}
    </div>
  );
};

export default FilmReel;
