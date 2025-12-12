"use client";

import Services from "../components/Services";
import aerial from "../../public/Tse.jpg";
import gorundpool from "../../public/Inno_Towers_pool.jpg";
import left from "../../public/Inno_Towers_left.jpg";
import pool from "../../public/Inno_Towers_carpark.jpg";
import front from "../../public/Inno_Towers_Front.png";
import Image from "next/image";
import Footer from "../components/Footer";
import {
  frauncesLight,
  eb_garamond,
  nunito_sans_bold,
  poiretOne,
  fraunces
} from "../styles/fonts";
import { useState, useEffect } from "react";
import Tse from "../../public/Tse.jpg";
import cleaners from "../../public/cleaners.jpg";

// import Maps from "../components/Maps";

export default function Amenities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: front, title: "Inno Towers Front View", description: "Modern architectural design (Front View)" },
    { image: left, title: "Inno Towers Side View", description: "Contemporary exterior (Side View)" },
    { image: Tse, title: "24/7 Security", description: "Serene and secure environment" }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <section className="mt-[8.7rem]">
      {/* <div className="hero-bg h-[250px] md:h-[470px] text-white flex flex-col ease duration-250 gap-4 justify-center items-center text-center px-6">
        <p className={`${eb_garamond.className} text-[1.58rem] md:text-5xl`}>
          Luxury Living at Your Doorstep
        </p>
        <p className={`${nunito_sans.className}`}>
          Experience the perfect blend of comfort and convenience with our premium amenities
        </p>
      </div> */}
      
      {/* Full-width Building Showcase Carousel */}
      <div className="mt-8 md:mt-16 relative">
        {/* <h2 className={`${eb_garamond.className} text-3xl md:text-4xl text-center mb-6`}>
          Luxury Living Experience
        </h2>
         */}
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={slide.image} 
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
                  <h3 className={`${eb_garamond.className} text-white text-xl md:text-2xl`}>
                    {slide.title}
                  </h3>
                  <p className={`${frauncesLight.className} text-white/90 mt-2 font-light`}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 md:mt-14 px-4 md:px-8">
        <h2 className={`${poiretOne.className} text-3xl md:text-4xl text-center mb-12`}>
          WE OFFER THE BEST AMENITIES
        </h2>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className={`${fraunces.className} text-2xl mb-4`}>Swimming Pool</h3>
              <p className={`${frauncesLight.className} text-md`}>
                Dive into luxury with our stunning infinity pool surrounded by lush landscaping. 
                Perfect for morning laps or evening relaxation, our ground-level pool area is designed 
                to provide a resort-like experience right at home.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src={gorundpool} 
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
              <h3 className={`${fraunces.className} text-2xl mb-4`}>Secure Parking Area</h3>
              <p className={`${frauncesLight.className} text-lg`}>
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
              <h3 className={`${fraunces.className} text-2xl mb-4`}>Premium Utilities</h3>
              <p className={`${frauncesLight.className} text-lg`}>
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

        <div className="mb-16">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image 
                src={cleaners} 
                alt="Concierge and Laundry Services" 
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="md:w-1/2">
              <h3 className={`${fraunces.className} text-2xl mb-4`}>Concierge & Laundry Services</h3>
              <p className={`${frauncesLight.className} text-lg`}>
                Experience convenience with our dedicated concierge team available to assist with your daily needs. 
                Our professional staff can help with package delivery, maintenance requests, and special arrangements.
              </p>
              <p className={`${frauncesLight.className} text-lg mt-2`}>
                We also encourage our residents to take advantage of our onsite laundry services, offering professional cleaning and garment care. 
                Save time and enjoy perfectly laundered clothing without leaving the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`${eb_garamond.className} text-3xl md:text-4xl text-center mb-12`}>
            Additional Services
          </h2>
        </div>
      </div> */}

      <div className="my-16 px-4 md:px-8">
        <h2 className={`${poiretOne.className} text-3xl md:text-4xl text-center mb-12`}>
          PRIME LOCATION
        </h2>
        <div className={`${frauncesLight.className} text-lg max-w-4xl mx-auto text-center`}>
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
