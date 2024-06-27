import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function ContactForm() {
  return (
    <form>
      <div className="flex flex-col gap-8">
        {/* <label>Full Name</label> */}
        <input
          className="border-b-2 py-4 font-mono border-[#F3EEEA] focus:outline-none focus:border-[#176b87] bg-[#bc9142] placeholder-[#31363F]"
          type="text"
          placeholder="Full name"
          autoComplete="off"
        />

        {/* <label>Email</label> */}
        <input
          className="border-b-2 py-4 font-mono border-[#F3EEEA] focus:outline-none focus:border-[#176b87] bg-[#bc9142] placeholder-[#31363F]"
          type="email"
          placeholder="Email"
          autoComplete="off"
        />

        {/* <label>Message</label> */}
        <textarea
          className="border-b-2 py-8 font-mono border-[#F3EEEA] focus:outline-none focus:border-[#176b87] bg-[#bc9142] placeholder-[#31363F]"
          type="text"
          placeholder="Type message here"
          autoComplete="off"
        />
      </div>
      <button
        className={`${inter.className} bg-[black] mt-5 py-2 px-5 text-[#F3EEEA] tracking-widest text-sm`}
      >
        GET IN TOUCH
      </button>
    </form>
  );
}
