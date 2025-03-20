"use client";

import Services from "../components/Services";
import aerial from "../../public/Tse.jpg";
import front from "../../public/Inno_Towers_pool.jpg";
import left from "../../public/Inno_Towers_left.jpg";
import pool from "../../public/Inno_Towers_carpark.jpg";
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
          Luxury Living at Your Doorstep
        </p>
        <p className={`${nunito_sans.className}`}>
          Experience the perfect blend of comfort and convenience with our premium amenities
        </p>
      </div>
      <div className="mt-12 md:mt-20 px-4 md:px-8">
        <h2 className={`${eb_garamond.className} text-3xl md:text-4xl text-center mb-12`}>
          Premium Amenities
        </h2>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className={`${nunito_sans_bold.className} text-2xl mb-4`}>Infinity Swimming Pool</h3>
              <p className={`${eb_garamond400.className} text-lg`}>
                Dive into luxury with our stunning infinity pool overlooking the cityscape. 
                Perfect for morning laps or evening relaxation, our pool area is designed 
                to provide a resort-like experience right at home.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={front} 
                alt="Inno Towers Front View" 
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image 
                src={pool} 
                alt="Inno Towers Right View" 
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="md:w-1/2">
              <h3 className={`${nunito_sans_bold.className} text-2xl mb-4`}>Secure Parking Area</h3>
              <p className={`${eb_garamond400.className} text-lg`}>
                Your {`vehicle's`} security is our priority. Our spacious parking area features 
                24/7 surveillance, well-lit spaces, and easy access to your residence. 
                Additional visitor parking is also available for your guests.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className={`${nunito_sans_bold.className} text-2xl mb-4`}>Premium Utilities</h3>
              <p className={`${eb_garamond400.className} text-lg`}>
                Experience uninterrupted comfort with our state-of-the-art utility systems. 
                Features include backup power supply, high-speed internet, and modern 
                security systems ensuring your home runs smoothly 24/7.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={left} 
                alt="Aerial View of Inno Towers" 
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`${eb_garamond.className} text-3xl md:text-4xl text-center mb-12`}>
            Additional Services
          </h2>
          <Services />
        </div>
      </div>

      <div className="my-16 px-4 md:px-8">
        <h2 className={`${eb_garamond.className} text-3xl md:text-4xl text-center mb-12`}>
          Prime Location
        </h2>
        <div className={`${eb_garamond400.className} text-lg max-w-4xl mx-auto text-center`}>
          <p className="mb-6">
            Inno Towers is strategically located in the serene and secure environs of Burma Hills, 
            offering the perfect balance of tranquility and accessibility.
          </p>
          <p>
            Enjoy proximity to major shopping centers, restaurants, healthcare facilities, and 
            educational institutions. The Burma Camp Military post ensures enhanced security, 
            while the central business district and Kotoka International Airport are just minutes away.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
