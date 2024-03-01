import Image from "next/image";
import { SecondaryButton } from "./custom-button";

export default function SectionCta() {
  return (
    <section className="section pb-28 md:pb-60">
      <div className="fbg-[#9f4e03] fbg-[#CC6606] bg-primary p-10 md:p-24 rounded-[30px] ">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-10">
          <div className="">
            <Image
              src={"/logo-tint-green.svg"}
              width={200}
              height={200}
              alt="logo text-accent"
              className="w-[100px] md:w-[200px]"
            />
          </div>
          <div className=" text-white md:px-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl text-center text-white">
              New Hot Stocks Available Now!
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <SecondaryButton
              variant="outline"
              className="w-fit md:py-10 md:px-20 fbg-accent mt-0 mb-0"
            >
              Start shoping
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
