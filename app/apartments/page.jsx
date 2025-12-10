import { frauncesLight, niconne, poiretOne } from "../styles/fonts";

export default function Apartments() {
  return (
    <section className="mt-[9.5rem]">
      <div>
        <h1
          className={`${poiretOne.className} text-center text-[1.25rem] md:text-4xl`}
        >
          CHOOSE AN APARTMENT TO YOUR TASTE
        </h1>

        <p className={`${frauncesLight.className} text-center mt-1 mx-[5px]`}>
          Inno Towers Complex comprises of one and two - bedroom apartments
          ensuring the best ways to utilise the square meterage.
        </p>
      </div>
    </section>
  );
}
