"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fraunces900, poiretOne } from "./styles/fonts";

// Array of background images
const backgroundImages = [
  "/Inno_Towers_left.jpg",
  "/Inno_Towers_kitchen.jpg",
  "/Inno_Towers_pool.jpg",
  "/Inno_Towers_bedroom.jpg",
  "/Inno_Towers_livingroom.jpg",
  // Add all your Inno_Towers_ images here
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1000); // Fade duration
    }, 5000); // Time between transitions

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="w-full h-[100dvh] relative overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex 
                ? 'opacity-80' 
                : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Inno Towers ${index + 1}`}
              fill
              className="object-cover background"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <section className="text-white text-center absolute top-[55%] left-0 gap-4 flex flex-col justify-center items-center md:left-[7%] lg:left-[14%] z-10">
          <h2
            className={`text-3xl lg:text-6xl ${fraunces900.className}`}
          >
            Experience Luxury Like Never Before
          </h2>
          <p className={`px-2 text-lg ${poiretOne.className}`}>
            We want to make it possible for more people to own their dream
            apartments in the heart of Tse Addo.
          </p>
          <Link href="/apartments">
            <button className="border uppercase tracking-widest border-white py-2 px-5 bg-[#bc9142] hover:bg-black">
              Explore
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
