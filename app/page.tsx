import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import HeroSection from "@/components/shared/section-hero";
import SectionWeOffer from "@/components/shared/section-we-offer";
import SectionBestSellers from "@/components/shared/section-best-selling";
import SectionWeGuarantee from "@/components/shared/section-we-guarantee";
import SectionCustomerReviews from "@/components/shared/section-customer-reviews";
import SectionFaq from "@/components/shared/section-faq";
import SectionCta from "@/components/shared/section-cta";
import SectionCategory from "@/components/shared/section-categories";

import AnnouncementBar from "@/components/shared/announcement-bar";
import FloatingNav from "@/components/ui/floating-navbar";
import SectionNewsletter from "@/components/shared/section-newsletter";
import InstagramEmbeds from "@/components/shared/section-instagram-embed";
import client from "@/tina/__generated__/client";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectionWeOffer />
      <SectionBestSellers />
      <SectionCategory />
      <SectionWeGuarantee />
      <SectionCustomerReviews />
      <SectionFaq />
      <SectionCta />
    </main>
  );
}
