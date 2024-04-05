import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/about-us/africans-farming.jpg";

const SectionIntro = () => {
  return (
    <section className="section-with-small-py">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="overflow-hidden fh-80 flex-grow-0 flex-shrink-0 h-full md:flex-[30%] md:flex-shrink rounded-2xl shadow-md ">
          <Image
            src={Image1}
            alt="Happy Investor"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center flex-[50%] gap-10">
          <h2 className="heading-2">
            Invest in Clementina&apos;s Farm and Secure Your Financial Growth
          </h2>
          <p className="paragraph-1">
            Join us in cultivating a greener, healthier future. At
            Clementina&apos;s Farm, we&apos;re passionate about sustainable
            agriculture and committed to bringing fresh, nutritious food to
            communities around the world. Partner with us to support innovative
            farming practices, promote food security, and make a positive impact
            on the environment. Together, let&apos;s sow the seeds of success
            and harvest a brighter tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
