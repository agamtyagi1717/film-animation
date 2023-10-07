import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const FilmReel = () => {
  const [scaleFactors, setScaleFactors] = useState([1.2, 1.2, 1.2, 1.2, 1.2, 1.2]);

  const updateScales = () => {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const newScaleFactors = [];
    for (let i = 1; i <= 6; i++) {
      const element = document.getElementById(`reel-img-${i}`);
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.clientHeight;

      if (elementTop > scrollY + viewportHeight || elementBottom < scrollY) {
        newScaleFactors.push(1); // Element is completely out of view
      } else {
        const middleY = scrollY + viewportHeight / 2;
        const distanceFromMiddle = Math.abs(middleY - (elementTop + elementBottom) / 2);

        // Scale factor based on distance from the middle of the viewport
        const scale = 1 + (distanceFromMiddle / (viewportHeight / 2)) * 0.4;

        newScaleFactors.push(scale);
      }
    }

    setScaleFactors(newScaleFactors);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScales);
    return () => {
      window.removeEventListener("scroll", updateScales);
    };
  }, []);

  return (
    <div style={{ perspective: "1000px" }}>
      {[image1, image2, image3, image4, image5, image6].map((image, index) => (
        <div key={index} className="reel" style={{ perspectiveOrigin: "center" }}>
          <img
            id={`reel-img-${index + 1}`}
            className="reel-img"
            src={image}
            alt={`bg-img-${index + 1}`}
            style={{
              transform: `scale(${scaleFactors[index]}) translateZ(50px)`,
              margin: "40px", // Add margin to prevent overlap
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FilmReel;
