import Image from "next/image";
import Image1 from "@/public/about-us/tomatoe.jpg";
import Image2 from "@/public/about-us/crab.jpg";
import Image3 from "@/public/about-us/strawberry.jpg";
import Image4 from "@/public/about-us/cherry.jpeg";

const SectionGalleryeRow = () => {
  return (
    <section className="section-with-small-py">
      <div className="container h-[800px] lg:h-[550px]  mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="row overflow-hidden flex flex-col flex-wrap gap-4">
          <div className="column flex-[50%] max-w-[50%]">
            <div className=" h-72 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={Image2}
                alt="Crabs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" h-96 mt-4 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={Image3}
                alt="Strawberries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="column flex-[50%] max-w-[50%]">
            <div className="h-96 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={Image1}
                alt="Tomatoes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-72 mt-4 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={Image4}
                alt="Cherry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center">
          <h2 className="heading-1 font-bold mb-6">
            Bringing joy and convenience through easy access to farm-fresh
            goodness
          </h2>
          <p className="paragraph-1 mb-8">
            Clementinas Farm is your revolutionary online marketplace for all
            your fresh food needs, delivering a diverse range of high-quality
            produce right to your doorstep at unbeatable prices. We bring the
            farm to you, ensuring you have everything you need without ever
            leaving the comfort of your home.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionGalleryeRow2 = () => {
  return (
    <div className="section-with-pb">
      <div className="container mx-auto px-4 grid grid-cols-2">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 overflow-hidden rounded-lg shadow-md">
            <Image
              src={Image2}
              alt="Soft Drink Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:col-span-1 overflow-hidden rounded-lg shadow-md">
            <Image
              src={Image1}
              alt="Soft Drink Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 overflow-hidden rounded-lg shadow-md">
            <Image
              src={Image3}
              alt="Soft Drink Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={Image4}
              alt="Soft Drink Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-6">
            Bringing joy and happiness through easy purchasing of soft drinks
          </h2>
          <p className="text-lg mb-8">
            Sippy is your game-changing wholesale beverage/drinks platform that
            provide delivery of a wide variety of soft drinks at unbeatable
            prices. We Bring the party to your doorstep and on your schedule
            without you ever having to leave your comfort zone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionGalleryeRow;
