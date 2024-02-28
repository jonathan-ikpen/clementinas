import { ReactElement } from "react";
import Link from "next/link";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function Socials() {
  const socials = [
    {
      href: "https://www.instagram.com/clementinas_farm",
      icon: (
        <RiInstagramFill
          size="25px"
          fill="#fff"
          stroke="#fff"
          className="text-white"
        />
      ),
    },
    {
      href: "https://wa.me/2347032821022",
      icon: (
        <RiWhatsappFill
          size="25px"
          fill="#fff"
          stroke="#fff"
          className="text-white"
        />
      ),
    },
  ];

  return (
    <div className="text-[#a09fa7] flex gap-8">
      {socials.map((social) => (
        <Social key={social.href} href={social.href} icon={social.icon} />
      ))}
    </div>
  );
}

const Social = ({ href, icon }: { href: string; icon: ReactElement }) => {
  return (
    <Link href={href} className="bg-[#292929] p-2 rounded-full">
      {icon}
    </Link>
  );
};
