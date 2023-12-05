"use client";

import { EB_Garamond, Nunito_Sans } from "next/font/google";
import Services from "../components/Services";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
});

const nunito_sans_bold = Nunito_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Amenities() {
  return (
    <section className="mt-[8.7rem]">
      <div className="hero-bg h-[250px] md:h-[470px] text-white flex flex-col ease duration-250 gap-4 justify-center items-center text-center px-6">
        <p className={`${eb_garamond.className} text-[1.58rem] md:text-5xl`}>
          You Can Have It All Here
        </p>
        <p className={`${nunito_sans.className}`}>
          Our commitment to exceptional living extends beyond the confines of
          your residence, thus bringing convienience and comfort to your
          fingertips.
        </p>
      </div>
      <div className="mt-7 md:mt-[80px] mx-8 flex flex-col gap-7 md:flex-row">
        <hr className="w-[96%] md:w-[250px] mt-5 gold_color"></hr>
        <div className="md:mr-[14rem] md:ml-5">
          <h3
            className={`${nunito_sans_bold.className} text-2xl text-[#383838]`}
          >
            Facilities & Services
          </h3>
          <p className="mt-3">
            Explore the comprehensive amenities that make life in Inno Towers
            Complex seamless, allowing you to focus on what truly matters –
            enjoying the essence of home.{" "}
          </p>
        </div>
      </div>
      <Services />
    </section>
  );
}
