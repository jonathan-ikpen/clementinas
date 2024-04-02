import SectionGalleryeRow from "./_components/section-gallery-row";
import SectionLargeTexts from "./_components/section-large-texts";
import SectionImageRows from "./_components/section-image-rows";
import SectionCta from "@/components/shared/section-cta";

export default function AboutUs() {
  return (
    <main>
      <SectionGalleryeRow />
      <SectionLargeTexts />
      <SectionImageRows />
      <SectionCta />
    </main>
  );
}
