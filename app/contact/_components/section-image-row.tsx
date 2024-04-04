import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/about-us/contact-us-3.jpg";
import Image2 from "@/public/about-us/farmer-girl.jpg";
import { SecondaryButton } from "@/components/shared/custom-button";
import { FaWhatsapp } from "react-icons/fa";

import React from "react";

const SectionImageRow = () => {
  return (
    <section className="section-with-small-py">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="overflow-hidden h-80 flex-grow-0 flex-shrink-0 md:h-full md:flex-[30%] md:flex-shrink rounded-2xl shadow-md ">
          <Image src={Image2} alt="Crabs" className="w-full" />
        </div>
        <div className="flex flex-col justify-center flex-[50%] gap-10">
          <h2 className="heading-1">We are here for you</h2>
          <p className="paragraph-1">
            Have a question, suggestion, or just want to say hello? We&apos;d
            love to hear from you! Feel free to reach out to our friendly team
            via phone, email, or whatsapp below. We&apos;re here to assist you
            with any inquiries about our products, services, investments or
            partnership opportunities. Let&apos;s connect and cultivate
            something amazing together!
          </p>
          <p className="paragraph-1">
            Email us at:{" "}
            <Link
              href={"mailto:clementinas.group@gmail.com"}
              className=" font-extrabold italic hover:underline"
            >
              clementinas.group@gmail.com
            </Link>
          </p>

          <p className="paragraph-1">Call us on</p>
          <Link href={"tel:+2347032821022"} className="heading-3 -mt-4">
            +234 703 282 1022
          </Link>
          <div className="sm:w-fit w-full">
            <SecondaryButton variant="secondary">
              <FaWhatsapp />
              &nbsp;Chat us on Whatsapp
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImageRow;
