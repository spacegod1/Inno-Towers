"use client";

import Image from "next/image";
import pent1 from "../../../public/Pent1.jpg";
import pent2 from "../../../public/Pent2.jpg";
import { Play } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { useState } from "react";
import ImageModal from '../ImageModal';

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function PentHouse() {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const floors = [
    { image: pent1, title: "4th Floor - Main Living Area" },
    { image: pent2, title: "5th Floor - Private Rooftop Terrace" }
  ];

  const nextFloor = () => {
    setCurrentFloor((prev) => (prev === 1 ? 0 : 1));
  };

  const prevFloor = () => {
    setCurrentFloor((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative mb-8">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
          <div className="relative">
            <div 
              className="md:cursor-default"
              onClick={() => window.innerWidth < 768 && setIsModalOpen(true)}
            >
              <Image
                src={floors[currentFloor].image}
                alt={`Penthouse ${floors[currentFloor].title}`}
                width={1400}
                height={1000}
                className="w-full h-full object-contain max-h-[800px]"
                priority
              />
              {/* Mobile tap indicator */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm md:hidden flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Tap to zoom
              </div>
            </div>
          </div>
          
          {/* Floor Indicator */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm hidden md:block">
            {floors[currentFloor].title}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevFloor}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/50 text-white w-8 h-8 
            lg:w-12 lg:h-12 rounded-full transition-all flex items-center justify-center border border-white/30 text-sm lg:text-base"
          >
            ←
          </button>
          <button
            onClick={nextFloor}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/50 text-white w-8 h-8 
            lg:w-12 lg:h-12 rounded-full transition-all flex items-center justify-center border border-white/30 text-sm lg:text-base"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentFloor(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentFloor === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={floors[currentFloor].image.src}
        alt={`Penthouse ${floors[currentFloor].title}`}
      />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${eb_garamond.className} text-xl leading-relaxed mb-8`}>
          Experience the pinnacle of luxury living in our stunning two-story penthouse. 
          The 4th floor welcomes you with a magnificent master suite, elegant living spaces, 
          and a gourmet kitchen. Ascend to your private 5th-floor retreat, featuring an 
          exclusive rooftop terrace with breathtaking views of Burma Hills, perfect for 
          entertaining or peaceful relaxation under the stars.
        </p>

        {/* Price and Availability Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
          <h1 className={`${play.className} text-3xl mb-2`}>FROM $500,000 **</h1>
          <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
            1 available unit
          </span>
        </div>
      </div>
    </div>
  );
}
