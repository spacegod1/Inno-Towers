"use client";

import { EB_Garamond, Nunito_Sans } from "next/font/google";
import Services from "../components/Services";
import livingRoom from "../../public/livingArea1.jpg";
import Image from "next/image";
import Maps from "../components/Maps";

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
          your residence, thus bringing convenience and comfort to your
          doorsteps.
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
            Explore the comprehensive amenities that make living at Inno Towers
            ideal, allowing you to focus on what truly matters – enjoying the
            essence of home. We provide our residents exclusive access to :
          </p>
        </div>
      </div>
      <Services />
      <div className="my-8">
        <p
          className={`${eb_garamond.className} text-[1.58rem] md:text-4xl text-center`}
        >
          A Superior Locale
        </p>
        <div className="flex flex-col md:flex-row my-6 mx-[1.2rem] md:mx-[6 rem]">
          <div className="flex flex-col gap-3 w-auto md:w-[30rem]">
            <p>
              Inno Towers is strategically located in the serene and secure
              environs of Burma Hills, a classy residential community of
              affluent individuals, beautiful houses and well demarcated road
              layouts.
            </p>
            <Image src={livingRoom} alt="image of apartment" />
          </div>
          {/* <Maps /> */}
        </div>
      </div>
    </section>
  );
}
