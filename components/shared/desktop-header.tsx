"use client";
import Image from "next/image";
import { SecondaryButton } from "./custom-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DesktopHeader = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "hidden px-5 sm:px-10 md:px-24 md:flex justify-between items-center py-4",
        className
      )}
    >
      <Link href="/">
        {(color === "black" || !color) && (
          <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
        )}
        {color === "white" && (
          <Image src={"/logo-white.svg"} width={100} height={100} alt="logo" />
        )}
      </Link>
      <div className="">
        <SecondaryButton variant="secondary" className="w-fit">
          View Store
        </SecondaryButton>
      </div>
    </div>
  );
};

export default DesktopHeader;
