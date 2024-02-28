"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWeGuarantee = () => {
  const cards = [
    {
      index: 0,
      title: "Quality",
      description: "We guarantee the best quality",
      src: "/quality.png",
    },
    {
      index: 1,
      title: "Price",
      description: "We guarantee the best price",
      src: "/price.png",
    },
    {
      index: 2,
      title: "Fresh",
      description: "We guarantee fresh fruits",
      src: "/support.png",
    },
    {
      index: 3,
      title: "Delivery",
      description: "We guarantee the best delivery",
      src: "/delivery.png",
    },
    {
      index: 4,
      title: "Return",
      description: "We guarantee the best return",
      src: "/return.png",
    },
  ];
  return (
    <section className="section mb-28 md:mb-60 flex flex-col gap-16">
      <h1 className="heading-1 text-center">We Guarantee</h1>
      {/* <p className="paragraph-1"></p> */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card delay={index * 0.2} key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  src,
  delay,
  index,
}: {
  title: string;
  description: string;
  src: string;
  delay: number;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const variantsDesktop = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const variantsMobile = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
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
      ref={ref}
      animate={controls}
      initial="hidden"
      //   variants={variants}
      variants={window.innerWidth < 768 ? variantsMobile : variantsDesktop}
      transition={transition}
      className="flex flex-col justify-center items-center gap-4 rounded-2xl bg-white border border-transparent dark:border-white/[0.2] dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-4 space-x-4"
    >
      <Image src={src} width={100} height={100} alt={title} />
      <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SectionWeGuarantee;
