"use client";

import Image from "next/image";
import onebedroom from "../../../public/single.jpg";
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
    <div className="flex gap-8 flex-col lg:flex-row lg:ml-9">
      <Image
        src={onebedroom}
        alt="Plan for 1 - bedroom"
        width={600}
        height={670}
      />
      <div className="flex flex-col justify-center mx-2 lg:mx-[5rem] text-[1.3rem] leading-8">
        <p className={`${eb_garamond.className}`}>
          Compact elegance meets urban comfort in our single bedroom haven. With
          a cozy 17m² living space, a modern washroom, and a welcoming lobby,
          this is where city living feels just right. Welcome home to efficiency
          and style.
        </p>
        <h1 className={`mt-12 ${play.className}`}>FROM $99,000 **</h1>
        <small>5 available units</small>
      </div>
    </div>
  );
}
