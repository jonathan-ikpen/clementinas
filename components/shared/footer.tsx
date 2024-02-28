import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  const socials = [
    {
      href: "https://www.instagram.com/clementinas_farm",
      icon: (
        <RiInstagramFill fill="#fff" stroke="#fff" className="text-white" />
      ),
    },
    {
      href: "https://wa.me/2347032821022",
      icon: <RiWhatsappFill fill="#fff" stroke="#fff" className="text-white" />,
    },
  ];
  return (
    <footer className="py-28 md:py-40 px-10 md:px-24 bg-black text-white flex flex-col gap-20 justify-between md:flex-row">
      <div className="text-[14px] text-[#a09fa7] flex flex-col gap-4">
        <Image src={"/logo-white.svg"} width={130} height={130} alt="logo" />
        <p className="mt-4">Copyright © 2024 Clementinas Farm</p>
        <p>All rights reserved</p>
      </div>
      <div className="text-[16px] flex flex-col gap-6">
        <h4 className="text-white font-extrabold">Company</h4>
        <div className="text-[#a09fa7] flex flex-col gap-4">
          <Link href="">About Us</Link>
          <Link href="">Contact Us</Link>
          <Link href="">Store</Link>
          <Link href="">E-book</Link>
          <Link href="">Training</Link>
          <Link href="">Investment</Link>
        </div>
      </div>
      <div className="text-[16px] flex flex-col gap-6">
        <h4 className="text-white font-extrabold">Socials</h4>
        <div className="text-[#a09fa7] flex gap-4">
          {socials.map((social) => (
            <Social key={social.href} href={social.href} icon={social.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
}

const Social = ({ href, icon }: { href: string; icon: ReactElement }) => {
  return (
    <Link href={href} className="bg-[#292929] p-2 rounded-full">
      {icon}
    </Link>
  );
};
