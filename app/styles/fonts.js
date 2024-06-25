import { EB_Garamond } from "next/font/google";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

const nunito_sans_bold = Nunito_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
});

const eb_garamond400 = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export { eb_garamond, eb_garamond400, nunito_sans, nunito_sans_bold };
