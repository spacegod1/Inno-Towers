"use client";

import Image from "next/image";
import twobedroom from "../../../public/double.jpg";
import { Play } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function DoubleRoom() {
  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Image Container */}
      <div className="mb-8">
        <Image
          src={twobedroom}
          alt="Plan for 2 - bedroom"
          width={1400}
          className="w-full h-auto object-contain shadow-lg rounded-lg"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${eb_garamond.className} text-xl leading-relaxed mb-8`}>
          Our two-bedroom apartments come in two thoughtfully designed layouts to match your needs. 
          Type A offers a more spacious setting with a standalone kitchen - perfect for those who love 
          to cook and entertain. Type B features a smart, compact design that makes excellent use of 
          space while maintaining all the comforts of a two-bedroom home. Both options include two 
          cozy en-suite bedrooms and modern living spaces that adapt perfectly to your lifestyle, 
          whether {`you're`} working from home or enjoying family time.
        </p>

        {/* Price and Availability Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg mb-2">Type A - Spacious Layout</h2>
            <h1 className={`${play.className} text-3xl mb-2`}>FROM $189,000 **</h1>
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
              3 available units
            </span>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg mb-2">Type B - Compact Layout</h2>
            <h1 className={`${play.className} text-3xl mb-2`}>FROM $149,000 **</h1>
            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
              5 available units
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
