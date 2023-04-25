import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import jewlery from "../../ShareModule/img/jewelryCover.jpg";
import Electronics from "../../ShareModule/img/electronicsCover.webp";
import MenFashion from "../../ShareModule/img/menDressCover.jpg";
import WomenFashion from "../../ShareModule/img/WomenDressCover.webp";

const items = [
  {
    id: 1,
    title: "jewelery",
    image: jewlery,
    name: "jewelery",
    about:
      "Check out these jewelery & accessories ecommerce store designs to inspire the look and feel of your next online business venture.",
  },
  {
    id: 2,
    title: "Electronics",
    image: Electronics,
    name: "Electronics",
    about:
      "Check out these Electronics & accessories ecommerce store designs to inspire the look and feel of your next online business venture.",
  },
  {
    id: 3,
    title: `men's clothing`,
    image: MenFashion,
    name: `men's clothing`,
    about: `Check out thes emen's clothing & accessories ecommerce store designs to inspire the look and feel of your next online business venture.`,
  },
  {
    id: 4,
    title: `women's clothing`,
    image: WomenFashion,
    name: `women's clothing`,
    about: `Check out these women's clothing & accessories ecommerce store designs to inspire the look and feel of your next online business venture.`,
  },
];

export const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // Define an interval of 2 seconds
    const intervalId = setInterval(() => {
      // Increment the currentIndex by 1
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleSliderChange = (event, newValue) => {
    setCurrentIndex(newValue);
  };
  return (
    <>
      <Slider
        value={currentIndex}
        sx={{ display: "none" }}
        min={0}
        max={items.length - 1}
        onChange={handleSliderChange}
        aria-label="Continuous slider"
      />
      <Box sx={{ position: "relative" }}>
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          style={{ width: "98.8vw", height: "89.8vh" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "6%",
            backgroundColor: "#fff",
            p: 3,
            maxWidth: "600px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "10px",
          }}
        >
          <h1 style={{ color: "#21263c", textTransform: "cap" }}>
            {items[currentIndex].title}
          </h1>
          <h2 style={{ fontFamily: "serif" }}>{items[currentIndex].about}</h2>
          <Button variant="contained" color="success">
            Explore Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SliderComponent;
