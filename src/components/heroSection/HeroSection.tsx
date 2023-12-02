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
    <div className="relative w-full h-[20vh] overflow-hidden mt-0 rounded-lg">
      {data.images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <Image
            src={image.src}
            alt={`Image ${index + 1}`}
            fill
            style={{ objectFit: "cover", borderRadius: "" }}
          />
        </motion.div>
      ))}

      {data.images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex justify-center"
          style={{ paddingTop: "15%" }}
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
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 2 }}
              className="mt-1 sm:mt-4 text-[.8rem] sm:text-2xl drop-shadow-xl drop-shadow-white text-purple-800 font-outline-2"
            >
              {image.subtext}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
