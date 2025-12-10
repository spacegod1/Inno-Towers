"use client";

import Image from "next/image";
import twobedroom from "@/public/double.jpg";
import typeA from "@/public/Type-A.png";
import typeB from "@/public/Type-B.png";
import typeC from "@/public/Type-C.png";
import { Play } from "next/font/google";
import { frauncesLight,fraunces } from "@/app/styles/fonts";
import ImageModal from '../ImageModal';
import { useState } from "react";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });

export default function DoubleRoom() {
  const [expandedType, setExpandedType] = useState("A");
  const [isOverviewModalOpen, setIsOverviewModalOpen] = useState(false);

  const apartments = [
    {
      type: "A",
      title: "Cozy Urban Suite",
      size: "85m²",
      bedrooms: 2,
      bathrooms: 3,
      price: "$164,900",
      image: typeA,
      description: "Perfect for modern professionals and small families. This thoughtfully designed layout maximizes space utilization with an open-concept living area that flows seamlessly into the dining space. Features include a master bedroom with en-suite bathroom, a second bedroom with dedicated bathroom, and ample storage throughout.",
      features: ["Open-concept living & dining", "Two en-suite bedrooms", "Modern kitchen with island", "Spacious balcony", "Built-in wardrobes", "Visitors' washroom"]
    },
    {
      type: "B",
      title: "Premium Family Layout",
      size: "95m²",
      bedrooms: 2,
      bathrooms: 3,
      price: "$194,900",
      image: typeB,
      description: "Designed with families in mind, this generous layout offers more living space and separation between living and sleeping areas. The expansive living room is perfect for entertaining, while the large master suite provides a private retreat. Enhanced storage solutions and a spacious balcony complete this premium offering.",
      features: ["Expansive living area", "Large master suite", "Separate dining area", "Premium finishes", "Extra storage spaces"]
    },
    {
      type: "C",
      title: "Executive Suite",
      size: "110m²",
      bedrooms: 2,
      bathrooms: 3,
      price: "$220,500",
      image: typeC,
      description: "The pinnacle of luxury two-bedroom living. This executive layout features generous proportions throughout, with a grand living area perfect for both relaxation and entertainment. The master bedroom resembles a private suite with walk-in closet and luxurious bathroom. High-end finishes and attention to detail make this the ultimate choice.",
      features: ["Grand living & entertainment area", "Master suite with walk-in closet", "Luxury bathrooms", "Premium kitchen appliances", "Large private terrace"]
    }
  ];

  const toggleType = (type) => {
    setExpandedType(expandedType === type ? null : type);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row lg:gap-8">
        
        {/* LEFT: Floor Overview (Sticky on desktop) */}
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 cursor-pointer group"
              onClick={() => setIsOverviewModalOpen(true)}
            >
              <Image
                src={twobedroom}
                alt="Full Floor Layout Overview"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#bc9142] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Full Floor Layout
              </div>
              {/* Click to zoom indicator */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Click to zoom
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className={`${frauncesLight.className} text-lg leading-relaxed text-gray-700`}>
                This floor features three distinct two-bedroom layouts, each designed to cater to different lifestyles and preferences.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Apartment Variants (Accordion) */}
        <div className="lg:w-3/5 space-y-4">
          {apartments.map((apt) => {
            const isExpanded = expandedType === apt.type;
            
            return (
              <div
                key={apt.type}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-[#bc9142]' 
                    : 'border-gray-200 hover:border-[#bc9142]/50'
                }`}
              >
                {/* Apartment Header (Always Visible) */}
                <button
                  onClick={() => toggleType(apt.type)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#bc9142] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-md">
                        {apt.type}
                      </span>
                      <div>
                        <h3 className={`${fraunces.className} text-lg font-semibold text-gray-900`}>
                          {apt.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {apt.size} • {apt.bedrooms} Beds • {apt.bathrooms} Baths
                        </p>
                      </div>
                    </div>
                    <p className={`${play.className} text-2xl md:text-3xl text-black font-bold mt-2`}>
                      FROM {apt.price}
                    </p>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className={`ml-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-[#bc9142]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    {/* Floor Plan Image */}
                    <div className="mt-6 mb-6 rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={apt.image}
                        alt={`${apt.title} Floor Plan`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Description */}
                    <p className={`${frauncesLight.className} text-base leading-relaxed text-gray-700 mb-6`}>
                      {apt.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 text-gray-900">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {apt.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-[#bc9142] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className={`${frauncesLight.className} text-gray-700`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Availability Badge */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        1 Unit Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Overview Image Modal */}
      <ImageModal
        isOpen={isOverviewModalOpen}
        onClose={() => setIsOverviewModalOpen(false)}
        imageSrc={twobedroom.src}
        alt="Full Floor Layout Overview"
      />
    </div>
  );
}

