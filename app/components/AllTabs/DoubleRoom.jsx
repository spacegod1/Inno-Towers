"use client";

import Image from "next/image";
import twobedroom from "@/public/double.jpg";
import typeA from "@/public/Type-A.jpg";
import typeB from "@/public/Type-B.png";
import typeC from "@/public/Type-C.png";
import { Play } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import ImageModal from '../ImageModal';
import { useState } from "react";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function DoubleRoom() {
  const [currentLayout, setCurrentLayout] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const layouts = [
    { image: twobedroom, title: "Full Floor Layout Overview" },
    { image: typeA, title: "Type A - Cozy Urban Suite" },
    { image: typeB, title: "Type B - Premium Family Layout" },
    { image: typeC, title: "Type C - Executive Suite" }
  ];

  const nextLayout = () => {
    setCurrentLayout((prev) => 
      prev === layouts.length - 1 ? 0 : prev + 1
    );
  };

  const prevLayout = () => {
    setCurrentLayout((prev) => 
      prev === 0 ? layouts.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative mb-2">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
          <div className="relative">
            <div 
              className="md:cursor-default"
              onClick={() => window.innerWidth < 768 && setIsModalOpen(true)}
            >
              <Image
                src={layouts[currentLayout].image}
                alt={`Two Bedroom ${layouts[currentLayout].title}`}
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

          {/* Layout Indicator (desktop only) */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm hidden md:block">
            {layouts[currentLayout].title}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevLayout}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/50 text-white w-8 h-8 
            lg:w-12 lg:h-12 rounded-full transition-all flex items-center justify-center border border-white/30 text-sm lg:text-base"
          >
            ←
          </button>
          <button
            onClick={nextLayout}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/50 text-white w-8 h-8 
            lg:w-12 lg:h-12 rounded-full transition-all flex items-center justify-center border border-white/30 text-sm lg:text-base"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {layouts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLayout(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentLayout === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Title Below Image */}
      <div className="text-center mb-8 md:hidden">
        <h3 className={`${eb_garamond.className} text-lg font-semibold`}>
          {layouts[currentLayout].title}
        </h3>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={layouts[currentLayout].image.src}
        alt={`Two Bedroom ${layouts[currentLayout].title}`}
      />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${eb_garamond.className} text-xl leading-relaxed mb-8`}>
          Discover our collection of thoughtfully designed two-bedroom residences. 
          Choose from our Cozy Urban Suite with its smart space utilization, our Premium Family Layout 
          offering generous living areas, or our Executive Suite that perfectly balances luxury and comfort. 
          Each layout features two en-suite bedrooms and modern living spaces, designed to complement 
          your lifestyle whether {`you're`} working from home or entertaining guests.
        </p>

        {/* Price and Availability Cards */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg mb-2">Cozy Urban Suite</h2>
            <h1 className={`${play.className} text-3xl mb-2`}>FROM $149,000 **</h1>
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
              3 available units
            </span>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg mb-2">Executive Suite</h2>
            <h1 className={`${play.className} text-3xl mb-2`}>FROM $179,000 **</h1>
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
              4 available units
            </span>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg mb-2">Premium Family Layout</h2>
            <h1 className={`${play.className} text-3xl mb-2`}>FROM $189,000 **</h1>
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
              4 available units
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
