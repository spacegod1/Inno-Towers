"use client";

import Image from "next/image";
import onebedroom from "@/public/studio.png";
import { Play } from "next/font/google";
import { frauncesLight } from "@/app/styles/fonts";

const play = Play({ subsets: ["latin"], weight: "400", display: "swap" });

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
        <p className={`${frauncesLight.className} text-md leading-relaxed mb-8`}>
          Step into our charming studio apartments, where style meets comfort. 
          {` You'll`} love the smart 27m² layout that makes every inch count - featuring a sleek modern bathroom 
          and an inviting entrance area. Perfect for those who appreciate thoughtful design and urban living 
          at its finest.
        </p>

        {/* Price and Availability Card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
          <h1 className={`${play.className} text-3xl mb-2`}>FROM $74,900 **</h1>
          <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            1 Unit Available
          </span>
        </div>
      </div>
    </div>
  );
}
