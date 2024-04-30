import CardInfo from "@/components/shared/card-info";
import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/about-us/training-1.jpg";
import Image2 from "@/public/about-us/training-2.jpg";

const SectionTrainingCategories = () => {
  const programs = [
    {
      badge: "virtual",
      name: "Foodstuff Business Training",
      description: "A-Z on Foodstuff business, Exporting and Importing",
      image: "",
      // image: "/about-us/training-2.jpg",
      link: "https://wa.link/ph0ihp",
      amount: "85k",
      roi: "Absolute Starters",
      button: "Learn More",
      date: "May 10, 2024",
    },
    {
      badge: "virtual",
      name: "Foodstuff Business Marketing and Growth Training Masterclass",
      description:
        "☘ Branding, Packaging and Social Media Marketing Pricing and Basic Record Keeping Tools ☘ Accessing the International Market/Food Export☘ Business Operation and Funding ☘ Food Safety and Storage Processes",
      image: "",
      // image: "/about-us/training-1.jpg",
      link: "https://wa.link/ph0ihp",
      amount: "200k",
      roi: "Masterclass",
      button: "Learn More",
      date: "June, 2024",
    },
  ];
  return (
    <section className="section-with-small-py flex flex-col gap-20">
      <h2 className="heading-2">Check Our Training Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {programs.map((program, i) => (
          <div className="h-full" key={i}>
            <CardInfo {...program} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTrainingCategories;
