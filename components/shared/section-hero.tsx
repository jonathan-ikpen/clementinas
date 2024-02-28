import Image from "next/image";
import { SecondaryButton } from "./custom-button";

const Hero = () => {
  return (
    <section className="flex flex-col md:gap-8 md:pt-32 px-7 sm:px-10 md:px-24 pt-20 relative">
      <Heading1 className="hidden sm:flex" />
      <Heading2 className="flex sm:hidden md:hidden lg:hidden" />
      <div className="mt-8 md:mt-0 max-w-3xl text-[21px]">
        <p className="paragraph-1">
          Explore a farm-fresh paradise. From crisp veggies to juicy fruits,
          we&apos;ve got the flavors you crave. Sit tight, unwind, and savor the
          freshness.
        </p>
      </div>
      <div className="sm:w-fit w-full">
        <SecondaryButton variant="secondary">Shop Now</SecondaryButton>
      </div>
      <FloatingFruits />
    </section>
  );
};

const Heading1 = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} leading-10 flex flex-col md:gap-8`}>
      <div className="flex items-center flex-wrap">
        <h1 className="scroll-m-20 text-6xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          Fresh
        </h1>
        <Image
          src="/R.gif"
          width={100}
          height={100}
          alt="R"
          className="mx-6 rounded-full h-[50px] w-[100px] md:h-[70px] md:w-[150px] lg:h-[100px] lg:w-[200px]"
        />
        <h1 className="scroll-m-20 text-6xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          from Our Farm
        </h1>
      </div>
      <div className="flex items-center flex-wrap">
        <h1 className="scroll-m-20 text-6xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          to Your Table
        </h1>
        <Image
          src="/eat1.gif"
          width={100}
          height={100}
          alt="R"
          className="mx-6 rounded-full h-[50px] w-[100px] md:h-[70px] md:w-[150px] lg:h-[100px] lg:w-[200px]"
        />
      </div>
    </div>
  );
};

const Heading2 = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} leading-10 flex flex-col md:gap-8`}>
      <div className="flex items-center flex-wrap">
        <h1 className="scroll-m-20 text-7xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          Fresh
        </h1>
        <Image
          src="/R.gif"
          width={100}
          height={100}
          alt="R"
          className="mx-6 rounded-full h-[50px] w-[100px] md:h-[70px] md:w-[150px] lg:h-[100px] lg:w-[200px]"
        />
        <h1 className="scroll-m-20 text-7xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          for You to
        </h1>
      </div>
      <div className="flex items-center flex-wrap">
        <h1 className="scroll-m-20 text-7xl text-black font-extrabold tracking-tight md:text-8xl lg:text-9xl">
          Enjoy
        </h1>
        <Image
          src="/eat1.gif"
          width={100}
          height={100}
          alt="R"
          className="mx-6 rounded-full h-[50px] w-[100px] md:h-[70px] md:w-[150px] lg:h-[100px] lg:w-[200px]"
        />
      </div>
    </div>
  );
};

const FloatingFruits = () => {
  return (
    <div className="absolute -bottom-40 !right-32 hidden md:block">
      <Image src="/fruit3.gif" width={300} height={300} alt="" />
    </div>
  );
};

export default Hero;
