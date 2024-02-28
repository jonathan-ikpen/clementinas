import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import HeroSection from "@/components/shared/section-hero";
import SectionWeOffer from "@/components/shared/section-we-offer";
import BestSellers from "@/components/shared/section-best-selling";
import SectionWeGuarantee from "@/components/shared/section-we-guarantee";
import SectionCustomerReviews from "@/components/shared/section-customer-reviews";
import SectionFaq from "@/components/shared/section-faq";
import SectionCta from "@/components/shared/section-cta";

import FloatingNav from "@/components/ui/floating-navbar";
import SectionNewsletter from "@/components/shared/section-newsletter";
import InstagramEmbeds from "@/components/shared/section-instagram-embed";

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
      <HeroSection />
      <SectionWeOffer />
      <BestSellers />
      <SectionWeGuarantee />
      <SectionCustomerReviews />
      <SectionFaq />
      <SectionCta />
    </main>
  );
}
