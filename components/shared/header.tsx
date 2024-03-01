"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SecondaryButton } from "./custom-button";
import { cn } from "@/lib/utils";

const Header = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-6 sm:px-10 md:px-24 flex justify-between items-center py-4",
        className
      )}
    >
      <div>
        {(color === "black" || !color) && (
          <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
        )}
        {color === "white" && (
          <Image src={"/logo-white.svg"} width={100} height={100} alt="logo" />
        )}
      </div>
      <div className="">
        <SecondaryButton variant="secondary" className="w-fit">
          View Store
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Header;
