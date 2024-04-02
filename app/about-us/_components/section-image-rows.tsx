import Image from "next/image";
import Image1 from "@/public/about-us/africans-farming.jpg";
import Image2 from "@/public/about-us/no-farmers-no-food-2.jpg";
import Image3 from "@/public/about-us/green-land.jpg";
import Image4 from "@/public/about-us/clementina-award-1.jpg";

const SectionImageRows = () => {
  return (
    <section className="section-with-small-py">
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 align-middle gap-20 md:items-stretch">
          <div className="overflow-hidden rounded-2xl shadow-md flex-shrink-0">
            <Image
              src={Image2}
              alt="Crabs"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-10 justify-between">
            <h2 className="heading-1">Our Story</h2>
            <p className="paragraph-1">
              Our journey began in 2020, driven by a passion for good food and
              shared moments. As avid food enthusiasts, we&apos;ve experienced
              the frustration of not having access to quality ingredients when
              we need them most. Whether it&apos;s a spontaneous dinner with
              friends or a special family gathering, the lack of fresh produce
              can put a damper on the occasion.
            </p>
            <p className="paragraph-1">
              Determined to solve this problem, we set out to create
              Clementina&apos;s Farm – a place where you can easily access a
              wide range of farm-fresh products to elevate every meal and
              celebration.
            </p>
            <p className="paragraph-1">
              From vibrant fruits and vegetables to premium meats and pantry
              essentials, we&apos;re here to ensure that you never have to
              compromise on quality or taste.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-20 md:items-stretch">
          <div className="flex flex-col gap-10 justify-between">
            <h2 className="heading-1">Our Mision</h2>
            <p className="paragraph-1">
              Clementinasfarm was built on the fresh food lifestyle, hence our
              pursuit for more on healthy foodstuffs. We source locally directly
              from farmers to both resellers and consumers, practicing a
              sustainable and healthy way to deliver fresh foodstuffs.
            </p>
            <p className="paragraph-1">
              With advanced methods of packaging and preservation, we have
              delivered across countries and within the country for 4 years and
              counting. Our aim is to bring the farm closer to consumers,
              including training for upcoming farmers. Along the line, we
              continue to learn, benefiting both consumers and farmers.
            </p>
            <p className="paragraph-1">
              We also offer various investment schemes where passive farmers
              become part of the growing community at Clementinasfarm. Our
              success story reflects our commitment to quality and
              sustainability. 😊😊
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md flex-shrink-0">
            <Image
              src={Image4}
              alt="Crabs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionImageRows2 = () => {
  return (
    <section className="section-with-small-py">
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 align-middle gap-20">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src={Image2}
              alt="Crabs"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="heading-2">Our Story</h2>
            <p className="paragraph-2">
              Our journey began in 2020, driven by a passion for good food and
              shared moments. As avid food enthusiasts, we&apos;ve experienced
              the frustration of not having access to quality ingredients when
              we need them most. Whether it&apos;s a spontaneous dinner with
              friends or a special family gathering, the lack of fresh produce
              can put a damper on the occasion. Determined to solve this
              problem, we set out to create Clementina&apos;s Farm – a place
              where you can easily access a wide range of farm-fresh products to
              elevate every meal and celebration. From vibrant fruits and
              vegetables to premium meats and pantry essentials, we&apos;re here
              to ensure that you never have to compromise on quality or taste.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:mt-20 md:grid-cols-2 gap-20">
          <div>
            <h2 className="heading-2">Our Mision</h2>
            <p className="paragraph-2">
              Clementinasfarm was built on the fresh thing&apos;s only
              lifestyle, hence our pursuit for more on healthy foodstuffs,
              locally sourced directly from farmers to both resellers and
              consumers ,we try to practice a sustainable and healthy way to
              deliver fresh foodstuffs to our clients and resellers ,with
              advanced methods of packaging and preservation ,we have delivered
              across countries and within the country, 4 years and counting ,we
              tend to bring the farm closer to consumers, Training of upcoming
              farmers and also we learning more along the line ,at the end of
              the day both consumers and we the farmers are beneficiaries
              Including our various investments schemes where we have passive
              farmers who are also a part of the growing community
              (clementinasfarm)and our success story 😊😊
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src={Image4}
              alt="Crabs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImageRows;
