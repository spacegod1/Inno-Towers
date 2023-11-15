import { Montserrat } from "next/font/google";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <div
      className={`bg-black text-white mt-10 p-4 flex items-center justify-between ${montserrat.className}`}
    >
      <div className="text-[#bc9142] flex gap-4">
        <Link href="https://www.instagram.com/innotowers/" target="_blank">
          <CiInstagram size={27} />
        </Link>{" "}
        <Link
          href="https://web.facebook.com/profile.php?id=100094473633385"
          target="_blank"
        >
          <CiFacebook size={27} />
        </Link>
      </div>
      <small>© 2023 Inno Towers Apartments</small>
    </div>
  );
}
