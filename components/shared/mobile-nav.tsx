"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import Socials from "./socials";
import Image from "next/image";
import { SecondaryButton } from "./custom-button";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function MobileHeaderNav() {
  const [isMobileNavClicked, setIsMobileNavClicked] = useState(false);

  const handleClick = () => {
    setIsMobileNavClicked((prev) => !prev);
  };

  return (
    <div
      className={
        isMobileNavClicked
          ? "bg-black w-[100vw] h-screen p-7 sm:px-10 md:px-24 fixed top-0 bottom-0 right-0 left-0 z-50  flex flex-col gap-10 fjustify-between"
          : ""
      }
    >
      <div
        className={cn(
          "px-7 py-4 sm:px-10 md:px-24 flex md:hidden justify-between items-center",
          isMobileNavClicked && "!px-0"
        )}
      >
        <Link href="/">
          <Image
            src={isMobileNavClicked ? "/logo-white.svg" : "/logo.svg"}
            width={80}
            height={80}
            alt="logo"
          />
        </Link>
        <div className={cn("w-fit")} onClick={handleClick}>
          {!isMobileNavClicked && (
            <RxHamburgerMenu
              fill={"#121212"}
              stroke={"#121212"}
              className={`text-black`}
              size="40"
            />
          )}
          {isMobileNavClicked && (
            <MdClose
              fill={"#fff"}
              stroke={"#fff"}
              className={`text-white`}
              size="40"
            />
          )}
        </div>
      </div>
      <div
        className={`${
          !isMobileNavClicked ? "hidden" : "flex flex-col gap-20"
        } `}
      >
        <div className="flex flex-col gap-8">
          <div className="text-[#fff] flex flex-col gap-8">
            <Link href="/ebook">About Us</Link>
            <Link href="/ebook">Contact Us</Link>
            <Link href="/ebook">E-Book</Link>
            <Link href="/ebook">Training</Link>
            <Socials />
          </div>
        </div>
        <div>
          <div className="w-full mb-40">
            <SecondaryButton variant="secondary">Shop Now</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
