import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/about-us/planting4.jpg";

const SectionTrainingIntro = () => {
  return (
    <section className="section-with-small-py">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="overflow-hidden h-80 flex-grow-0 flex-shrink-0 md:h-[36rem] md:flex-[30%] md:flex-shrink rounded-2xl shadow-md ">
          <Image src={Image1} alt="Training Program" className="w-full" />
        </div>
        <div className="flex flex-col justify-center flex-[50%] gap-10">
          <h2 className="heading-1">
            Clementina&apos;s Farm Training Programs
          </h2>
          <p className="paragraph-1">
            Grow your skills with us! At Clementina&apos;s Farm, we offer a
            range of training programs designed to empower aspiring farmers,
            resellers and anyone interested in sustainable agriculture. Whether
            you&apos;re a beginner or an experienced farmer, our hands-on
            workshops and expert-led courses will guide you through the latest
            techniques in organic farming, crop management, produce sourcing,
            and more. Join our community of learners and take your passion for
            agriculture to the next level. Start your journey with us today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTrainingIntro;
