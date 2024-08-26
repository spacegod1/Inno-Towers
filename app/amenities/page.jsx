"use client";

import Services from "../components/Services";
import aerial from "../../public/Tse.jpg";
import Image from "next/image";
import Footer from "../components/Footer";
import {
  eb_garamond400,
  eb_garamond,
  nunito_sans,
  nunito_sans_bold,
} from "../styles/fonts";

// import Maps from "../components/Maps";

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
          <p className={`mt-3 text-[1.1rem] ${eb_garamond400.className}`}>
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
        <div
          className={`${eb_garamond400.className} text-[1.2rem] flex flex-col pl-0 md:pl-6 gap-16 md:flex-row mt-8 mb-11 mx-[1.2rem] md:mx-[6rem]`}
        >
          <div className="flex flex-col gap-3 w-auto md:w-[36rem]">
            <p>
              Inno Towers is strategically located in the serene and secure
              environs of Burma Hills, a classy residential community of
              affluent individuals, beautiful houses and well demarcated road
              layouts.
            </p>
            <Image src={aerial} alt="aerial view of Tse Addo" />
          </div>
          <div className="w-auto md:w-[36rem]">
            <p className="mb-8">
              We assure our residents that Inno Towers is situated in one of the
              most secure places in Accra, as it is in close proximity to the
              Burma Camp Military post of the Ghana Armed Forces. Residents
              would benefit from well installed security measures and regular
              police patrols. The quality of roads, proximity to renowned malls,
              the Kotoka International Airport, and the central business
              district makes it most preferred.
            </p>
            <p>
              Along the main roads, residents have access to a range of
              amenities such as bars, restaurants, grocery stores, pharmacies,
              clothing boutiques, and beauty shops. The neighborhood also offers
              excellent educational institutions, healthcare facilities,
              churches, banks, and even a university, Zenith College.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
