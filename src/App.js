import "./App.css";
import FilmReel from "./components/FilmReel";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateColor = (index) => {
    const totalHeight = document.body.scrollHeight;
    const sectionHeight = totalHeight / 4;

    const scrollPosition = scrollY + window.innerHeight / 2;
    const sectionIndex = Math.floor(scrollPosition / sectionHeight);

    if (index === sectionIndex) {
      return "white";
    } else {
      return "transparent";
    }
  };

  return (
    <div className="App">
      <FilmReel />
      <div className="text">
        <motion.h1
          style={{
            color: calculateColor(0),
            transition: "color 0.3s ease-in-out",
          }}
        >
          WEBSITES
        </motion.h1>
        <motion.h1
          style={{
            color: calculateColor(1),
            transition: "color 0.3s ease-in-out",
          }}
        >
          BRANDING
        </motion.h1>
        <motion.h1
          style={{
            color: calculateColor(2),
            transition: "color 0.3s ease-in-out",
          }}
        >
          PRODUCT
        </motion.h1>
        <motion.h1
          style={{
            color: calculateColor(3),
            transition: "color 0.3s ease-in-out",
          }}
        >
          CONTENT
        </motion.h1>
      </div>
    </div>
  );
}

export default App;
