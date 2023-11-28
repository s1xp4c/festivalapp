"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import data from ":/constants/heroSection.json";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-1 h-[5vh] sm:h-[30vh] md:h-[40vh] w-full z-0 rounded-lg relative">
      {data.images.map((image, index) => (
        <div
          key={index}
          className="absolute "
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            transition: "opacity 1s",
          }}
        >
          <Image
            src={image.src}
            alt={`Image ${index + 1}`}
            quality={100}
            width={500}
            height={500}
            style={{
              objectPosition: "center",
              overflow: "hidden",
              objectFit: "contain",
            }}
          />
        </div>
      ))}

      {data.images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex justify-center"
          style={{ paddingTop: "15%" }} // Text 20% from the top
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 2 }}
        >
          <div className="text-foreground text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 2 }}
              className="sm:text-5xl text-[1.2rem] font-bold drop-shadow-xl drop-shadow-purple-800 text-indigo-700/80 font-outline-2"
            >
              {image.title}
            </motion.h1>
            {/* <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 2 }}
              className="mt-1 sm:mt-4 text-[.8rem] sm:text-2xl drop-shadow-xl drop-shadow-white text-purple-800 font-outline-2"
            >
              {image.subtext}
            </motion.p> */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
