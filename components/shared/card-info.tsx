"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import CardBadge from "./card-badge";

interface cardTypes {
  badge?: string;
  link: string;
  image?: string;
  name: string;
  description: string;
  amount: string;
  roi?: string;
  date: string;
  button: string;
}

const CardInfo = ({
  badge,
  link,
  image,
  name,
  description,
  amount,
  roi,
  date,
  button,
}: cardTypes) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div className="h-full flex flex-col justify-between gap-4 p-6 rounded-2xl shadow-md ">
      {badge && <CardBadge>{badge}</CardBadge>}
      <div>
        {image && <Image src={image} alt="Happy Investor" className="w-full" />}
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="heading-4">{name}</h3>
            <p className="text-lg md:text-xl max-w-full text-ellipsis">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-10 justify-center">
            <p className="text-5xl font-extrabold text-primary">₦{amount}</p>
            <p className="text-5xl font-light">{roi}</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <Button
            variant="outline"
            onClick={handleClick}
            className="px-8 py-6 border-[1.5px] border-black dark:border-white ftransition fduration-200 text-[16px] md:text-lg shadow-[1px_1px_rgba(0,0,0)] border-solid rounded-full font-bold leading-6 transition duration-1000 transform translate-x-0 hover:translate-y-[2px]"
          >
            {button}
          </Button>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
