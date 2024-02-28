import React from "react";
import { SecondaryButton } from "./custom-button";

export default function SectionNewsletter() {
  return (
    <section className="section">
      <div className="bg-[#9f4e03] p-10 md:p-24 rounded-[30px] ">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className=" text-white px-10 md:px-32">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-center text-white">
              Gain access to exclusive deals
            </h1>
            <p className="text-[14px] md:text-[16px] mt-4 text-center">
              Stay fresh with our exclusive deals and latest arrivals. Join our
              mailing list today!
            </p>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const NewsletterForm = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:bg-white px-4 py-2 rounded-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-4 outline-none bg-white rounded-full border-2 border-black dark:border-white sm:border-none sm:outline-none text-lg"
      />
      <button className="bg-accent border-2 border-black dark:border-white text-lg shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] border-solid font-extrabold leading-6 transition duration-1000 transform translate-x-0 hover:translate-y-[2px] sm:px-4 sm:py-2 px-8 py-4 rounded-full">
        Subscribe
      </button>
    </div>
  );
};
