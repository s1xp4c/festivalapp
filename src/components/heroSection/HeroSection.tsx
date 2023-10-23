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
    <div className="relative h-96 w-full overflow-hidden">
      {data.images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={`Image ${index + 1}`}
          width={1024}
          height={384}
          quality={100}
          sizes="(max-width: 1024px) 100vw"
          style={{
            position: "absolute",
            inset: "0",
            opacity: currentImageIndex === index ? 1 : 0,
            transition: "opacity 1s",
          }}
        />
      ))}

      {data.images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center align-middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 4 }}
        >
          <div className="text-white text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 4 }}
              className="text-5xl font-bold"
            >
              {image.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 4 }}
              className="mt-4 text-2xl"
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
