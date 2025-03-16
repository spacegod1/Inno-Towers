"use client";

import Image from "next/image";
import onebedroom from "../../../public/studio.png";
import { Play } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function SingleRoom() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:flex lg:gap-8 lg:flex-row">
      {/* Image Container */}
      <div className="mb-8 lg:mb-0 lg:flex-1">
        <Image
          src={onebedroom}
          alt="Plan for 1 - bedroom"
          width={1400}
          className="w-full h-auto object-contain shadow-lg rounded-lg"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto text-center lg:text-left lg:flex-1 lg:max-w-none lg:mx-[5rem]">
        <p className={`${eb_garamond.className} text-xl leading-relaxed mb-8`}>
          Step into our charming studio apartments, where style meets comfort. 
          {` You'll`} love the smart 27m² layout that makes every inch count - featuring a sleek modern bathroom 
          and an inviting entrance area. Perfect for those who appreciate thoughtful design and urban living 
          at its finest.
        </p>

        {/* Price and Availability Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
          <h1 className={`${play.className} text-3xl mb-2`}>FROM $59,000 **</h1>
          <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
            3 available units
          </span>
        </div>
      </div>
    </div>
  );
}
