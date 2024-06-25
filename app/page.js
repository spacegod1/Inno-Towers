import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Abril_Fatface } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <div className="w-full h-[100dvh] background -z-10">
        <section className="text-white text-center absolute top-[55%] left-0 gap-4 flex flex-col justify-center items-center md:left-[7%] lg:left-[14%]">
          <h2
            className={`text-3xl lg:text-6xl font-black ${abril_fatface.className}`}
          >
            Experience Luxury Like Never Before
          </h2>
          <p className={`px-2 ${montserrat.className}`}>
            We want to make it possible for more people to own their dream
            apartments in the heart of Tse Addo.
          </p>
          <Link href="/apartments">
            <button className="border uppercase tracking-widest border-white py-2 px-5 bg-[#bc9142] hover:bg-black">
              Explore
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
