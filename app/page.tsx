import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import HeroSection from "@/components/shared/section-hero";
import SectionWeOffer from "@/components/shared/section-we-offer";
import BestSellers from "@/components/shared/section-best-selling";
import InstagramEmbeds from "@/components/shared/section-instagram-embed";
import SectionWeGuarantee from "@/components/shared/section-we-guarantee";
import SectionCustomerReviews from "@/components/shared/section-customer-reviews";
import SectionFaq from "@/components/shared/section-faq";
import SectionNewsletter from "@/components/shared/section-newsletter";
import SectionCta from "@/components/shared/section-cta";

export default function Home() {
  const navItems = [
    {
      name: "About Us",
      link: "/about-us",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Store",
      link: "/store",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Help Center",
      link: "/contact-us",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <SectionWeOffer />
      <BestSellers />
      {/* <InstagramEmbeds /> */}
      <SectionWeGuarantee />
      <SectionCustomerReviews />
      <SectionFaq />
      {/* <SectionNewsletter /> */}
      <SectionCta />
    </main>
  );
}
