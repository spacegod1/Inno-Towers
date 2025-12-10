"use client";

import Image from "next/image";
import pent1 from "@/public/Pent1.jpg";
import pent2 from "@/public/Pent2.jpg";
import PentLiving from "@/public/Inno_Towers_livingroom.jpg";
import PentBedroom from "@/public/Inno_Towers_bedroom.jpg";
import PentKitchen from "@/public/Inno_Towers_kitchen.jpg";
import { Play } from "next/font/google";
import { frauncesLight, fraunces } from "@/app/styles/fonts";
import { useState } from "react";
import ImageModal from '../ImageModal';

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });

export default function PentHouse() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const galleryImages = [
    { image: PentLiving, title: "Luxury Living Space" },
    { image: PentBedroom, title: "Master Bedroom" },
    { image: PentKitchen, title: "Designer Kitchen" }
    // { image: pent2, title: "Rooftop Terrace" }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className={`${fraunces.className} text-3xl md:text-4xl font-semibold mb-4`}>
          Two Floors of Unparalleled Luxury
        </h2>
        <p className={`${frauncesLight.className} text-lg text-gray-700`}>
          Experience the pinnacle of sophisticated living with our exclusive duplex penthouse
        </p>
      </div>

      {/* Dual Floor Split View */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        
        {/* 4TH FLOOR */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div 
            className="relative cursor-pointer group bg-gradient-to-br from-gray-50 to-gray-100 p-2"
            onClick={() => openModal(pent1.src)}
          >
            <Image
              src={pent1}
              alt="4th Floor Plan"
              width={700}
              height={500}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#bc9142] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Main Area
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Click to zoom
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-3">
              {[
                'Master bedroom with en-suite',
                'Spacious living & dining area',
                'Modern gourmet kitchen',
                'Guest bedroom',
                'Guest bathroom',
                'Private balcony'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#bc9142] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`${frauncesLight.className} text-gray-700`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5TH FLOOR */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div 
            className="relative cursor-pointer group bg-gradient-to-br from-gray-50 to-gray-100 p-2"
            onClick={() => openModal(pent2.src)}
          >
            <Image
              src={pent2}
              alt="5th Floor Plan"
              width={700}
              height={500}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#bc9142] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Top Floor
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Click to zoom
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-3">
              {[
                'Exclusive rooftop terrace',
                'Panoramic city views',
                'Outdoor entertainment area',
                'Sky lounge space',
                'Perfect for gatherings',
                'Burma Hills vistas'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#bc9142] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`${frauncesLight.className} text-gray-700`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="mb-12">
        <h3 className={`${frauncesLight.className} text-2xl font-semibold text-center mb-6`}>
          Penthouse Gallery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {galleryImages.map((item, idx) => (
            <div 
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openModal(item.image.src)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description & Price */}
      <div className="max-w-3xl mx-auto">
        <p className={`${frauncesLight.className} text-lg leading-relaxed text-center mb-8 text-gray-700`}>
          The crown jewel of Inno Towers. This spectacular two-story penthouse offers an unparalleled 
          lifestyle with generous living spaces spread across two floors. The 4th floor features refined 
          living quarters, while the 5th floor provides your own private sky retreat with breathtaking 
          panoramic views of Burma Hills. Perfect for those who demand nothing but the extraordinary.
        </p>

        {/* Price and Availability Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
          <h1 className={`${play.className} text-4xl mb-3 text-black`}>FROM $500,000 **</h1>
          <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            1 Unit Available
          </span>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
        alt="Penthouse View"
      />
    </div>
  );
}
