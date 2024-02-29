import Image from "next/image";
import { SecondaryButton } from "./custom-button";

const SectionWeOffer = () => {
  return (
    <section className="section flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex justify-center items-center md:justify-start md:items-start">
        <Image
          src="/fruit1.gif"
          width={400}
          height={400}
          alt="fruit"
          className="w-[250px] md:w-[400px]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-16">
        <h1 className="heading-1">
          we offer a wide range of foodstuffs
          <Image
            src="/fruit6.png"
            width={70}
            height={70}
            alt="fruit"
            className="inline-block w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]"
          />
        </h1>
        <div className="paragraph-1">
          <p>
            From fresh fruits to crisp veggies to poultry to fishery, we&apos;ve
            got your cravings covered with our wide range of farm goodies.
            Whether you&apos;re after juicy strawberries or crunchy carrots,
            we&apos;ve got something for everyone.
          </p>
          <p className="mt-10">
            So, take a peek at our selection and fill your basket with the
            freshest picks straight from our fields.
          </p>
        </div>
        <div className="sm:w-fit w-full">
          <SecondaryButton variant="secondary" className="w-full">
            Explore our Shop
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default SectionWeOffer;
