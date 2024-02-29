"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import PieceTag from "./tag-piece";
import { SecondaryButton } from "./custom-button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ProductCard2 = ({
  src,
  name,
  piece,
  price,
  delay,
}: {
  src: string;
  name: string;
  piece: string;
  price: string;
  delay: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const transition = { duration: 0.5, delay };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-4 w-fit"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={transition}
    >
      <Image
        src={src}
        width={250}
        height={200}
        alt="produce"
        // className="md:w-[160px] md:h-[240px] w-[142px] h-[195px]"
        className="max-w-full"
      />
      <div>
        <h4 className="scroll-m-20 text-2xl md:text-3xl font-extrabold tracking-tight">
          {name}
        </h4>
      </div>
      <div className="flex gap-8 mt-4">
        <p className="leading-7 text-xl [&:not(:first-child)]:mt-6">₦{price}</p>
        <PieceTag pieces={piece} />
      </div>
      <div className="w-full">
        <SecondaryButton variant="outline" className="mt-2">
          Buy Now
        </SecondaryButton>
      </div>
    </motion.div>
  );
};

const ProductCard = ({
  src,
  name,
  piece,
  price,
  delay,
}: {
  src: string;
  name: string;
  piece: string;
  price: string;
  delay: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const transition = { duration: 0.5, delay };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-2 md:gap-4 w-fit"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={transition}
    >
      <Image
        src={src}
        width={250}
        height={200}
        alt="produce"
        className="md:w-[250px] sm:w-[200px] w-[142px] fmd:h-[240px] fh-[195px]"
        // className="max-w-full"
      />
      <div>
        <h4 className="fscroll-m-20 pl-2 md:pl-8 text-lg md:text-3xl font-extrabold tracking-tight">
          {name}
        </h4>
      </div>
      <div className="flex pl-2 md:pl-8 gap-4 mt-2">
        <p className="leading-7 text-sm md:text-xl [&:not(:first-child)]:mt-6">
          ₦{price}
        </p>
        <PieceTag pieces={piece} />
      </div>
      <div className="w-full">
        <SecondaryButton
          variant="outline"
          className="mt-2 px-2 py-6 text-[14px] md:text-[16px] md:px-16 md:py-8"
        >
          Buy Now
        </SecondaryButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;
