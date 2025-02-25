import { useState } from "react";

export default function Contact() {
  const email = "eeli56315@gmail.com";
  const phone = "+963 947 089 514";
  const [copied, setCopied] = useState(false);

  const copyText = (copyTextValue) => {
    navigator.clipboard
      .writeText(copyTextValue)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // إخفاء بعد 2 ثانية
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <>
      <div id="contact" className="scroll-mt-14 text-center md:text-left bg-background-800">
        <div className="pb-24 pt-20 bg-background-900">
            <h1 className="font-bold text-4xl my-2 text-primary-400 text-center">Get in Touch</h1>
          <div className="p-10 flex-col justify-center items-center md:flex-row lg:flex">
            <div>
              <p className="font-bold text-lg text-text-100 w-[80%] mb-8 text-left">
                I’d love to hear from you! Whether you have a project in mind, need a developer, or just want to say hi, feel free to reach out.
              </p>

              {/* Email */}
              <div className="flex items-center text-background-100 font-bold select-none space-x-2">
                <i className="bx bxs-envelope text-2xl text-primary-600 cursor-pointer" onClick={() => copyText(email)}></i>
                <span onClick={() => copyText(email)} className="cursor-pointer">
                  Email:{" "}
                  <a
                    className="text-background-100 font-bold ml-2 select-none hover:text-primary-100 transition-all duration-400"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center text-background-100 font-bold select-none space-x-2 mt-4">
                <i className="bx bxs-phone text-2xl text-primary-600 cursor-pointer" onClick={() => copyText(phone)}></i>
                <span onClick={() => copyText(phone)} className="cursor-pointer">
                  Phone:{" "}
                  <a
                    className="text-background-100 font-bold ml-2 select-none hover:text-primary-100 transition-all duration-400"
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </a>
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="mt-8 space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-text-600 border border-secondary-700 text-white rounded-lg focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-text-600 border border-secondary-700 text-white rounded-lg focus:outline-none" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-3 bg-text-600 border border-secondary-700 text-white rounded-lg focus:outline-none"></textarea>
                <button type="submit" className="w-full bg-secondary-700 hover:bg-secondary-800 p-3 rounded-lg text-white">
                  Send Message
                </button>
              </form>
            </div>

            {/* Copied Message */}
            <p
              className={`fixed right-10 bottom-5 z-40 bg-green-700 text-primary-100 font-bold p-2 rounded-xl shadow-[0px_0px_5px] shadow-primary-100 transition-opacity duration-500 ${
                copied ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Copied!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
