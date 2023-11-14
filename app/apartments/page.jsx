import { EB_Garamond, Nunito_Sans } from "next/font/google";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Apartments() {
  return (
    <section className="mt-[9.5rem]">
      <div>
        <h1
          className={`${eb_garamond.className} text-center text-[1.58rem] md:text-5xl`}
        >
          Choose an Apartment to Your Taste
        </h1>

        <p className={`${nunito_sans.className} text-center mt-4 mx-[15px]`}>
          Inno Towers Complex comprises of one and two - bedroom apartments
          ensuring the best ways to utilise the square meterage.
        </p>
      </div>
    </section>
  );
}
