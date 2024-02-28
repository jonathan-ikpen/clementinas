import Image from "next/image";

export const CardReview = ({
  testimonial,
  image,
  name,
}: {
  testimonial: string | TrustedHTML;
  image: string;
  name: string;
}) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl bg-white border border-transparent dark:border-white/[0.2] dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-6 py-8 space-x-4 w-full">
      <div className="mb-20">
        <p
          className="paragraph-2"
          dangerouslySetInnerHTML={{ __html: testimonial }}
        ></p>
      </div>
      <div className="flex items-center gap-4 absolute !ml-0 bottom-4">
        <Image src={image} alt={""} width={40} height={40} />
        <p className="font-bold text-sm">{name}</p>
      </div>
    </div>
  );
};
