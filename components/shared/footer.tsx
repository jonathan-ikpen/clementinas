import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="py-28 md:py-40 px-6 sm:px-10 md:px-24 bg-black text-white flex flex-col gap-20 justify-between md:flex-row">
      <div className="text-[14px] text-[#a09fa7] flex flex-col gap-4">
        <Image src={"/logo-white.svg"} width={130} height={130} alt="logo" />
        <p className="mt-4">Copyright © 2024 Clementinas Farm</p>
        <p>All rights reserved</p>
      </div>
      <div className="text-[16px] flex flex-col gap-6">
        <h4 className="text-white font-extrabold">Company</h4>
        <div className="text-[#a09fa7] flex flex-col gap-4">
          <Link href="/about-us">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/store">Store</Link>
          <Link href="/ebook">E-book</Link>
          <Link href="/training">Training</Link>
          <Link href="/investment">Investment</Link>
        </div>
      </div>
      <div className="text-[16px] flex flex-col gap-6">
        <h4 className="text-white font-extrabold">Socials</h4>
        <Socials />
      </div>
    </footer>
  );
}
