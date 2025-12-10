import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { eb_garamond, frauncesLight } from "../styles/fonts";
import { CiMobile3, CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="mt-[8.7rem] md:mt-[10rem] ">
      <div className="static md:relative z-0 h-[27rem] pt-[20rem] md:pt-[3rem] flex flex-col gap-5 md:gap-[7rem] md:flex-row justify-center bg-[#F3EEEA]">
        <div className="static md:relative z-0 md:z-10 h-[20rem] w-auto md:w-[25rem] text-center md:text-left px-4">
          <h2
            className={`inline text-[1.58rem] md:text-4xl ${eb_garamond.className}`}
          >
            Always Ready to Assist You
          </h2>
          <p className={`${frauncesLight.className} text-[1.2rem] mt-5`}>
            Whether you want a property viewing session or just want general
            information, our sales representatives are happy to assist you.
          </p>
          <p className={`${frauncesLight.className} text-[1.2rem] mt-4`}>
            We have very attractive discount offers open to early buyers who
            wish to secure apartment units before our full completion. Visit our
            social pages for more information.
          </p>
        </div>
        <div className="static md:relative h-[28rem] w-auto px-4 py-6 md:w-[37rem] z-0 md:z-20 bg-[#bc9142]">
          <ContactForm />
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-3 justify-center mt-[20rem] md:mt-[8.5rem] md:flex-row relative z-20 ${frauncesLight.className}`}
      >
        <CiLocationArrow1 size={20} className="text-[#bc9142] ml-0 md:ml-3" />
        <p>Wilshire K. Rd, Burma Camp</p> {"   "}
        <CiMobile3 size={20} className="text-[#bc9142] ml-0 md:ml-3" />
        <p>+ (301) 919-9051 / + 233 50 2265 977</p> {"   "}
        <AiOutlineMail size={20} className="text-[#bc9142] ml-0 md:ml-3" />
        <p>info@innotowers@gmail.com</p>
      </div>
      <div className="mt-[2.5rem] md:mt-[5rem] relative z-20">
        <Footer />
      </div>
    </section>
  );
}
