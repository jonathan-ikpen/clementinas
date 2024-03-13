"use client";
import {
  JSXElementConstructor,
  ReactElement,
  ReactSVGElement,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PiPlantFill } from "react-icons/pi";
import { TbTagStarred } from "react-icons/tb";
import { MdGppGood } from "react-icons/md";
import { RiTimerFlashFill } from "react-icons/ri";

const SectionWeGuarantee = () => {
  const cards = [
    {
      index: 0,
      title: "Good Quality",
      description:
        "We guarantee top-notch quality in every bite. From farm to table, we meticulously select and inspect each product to ensure it meets our highest standards of freshness, taste, and nutritional value.",
      src: "/guarantee/tomatoe1.jpg",
      icon: <MdGppGood color="#006400" className="w-12 h-12" />,
      bgcolor: "bg-[#DFFF77]",
    },
    {
      index: 1,
      title: "Competitive Price",
      description:
        "We guarantee competitive prices without compromising on quality. Enjoy great value for your money with our affordable range of farm-fresh products.",
      src: "/guarantee/quality-food2.jpeg",
      icon: <TbTagStarred color="#222" className="w-12 h-12" />,
      bgcolor: "bg-[#FAC5C1]",
    },
    {
      index: 2,
      title: "Only Fresh",
      description:
        "We guarantee absolute freshness straight from the farm to your table. With our commitment to timely harvesting and efficient delivery, you can trust that every bite is bursting with flavor and vitality.",
      src: "/guarantee/fresh-food.gif",
      icon: <PiPlantFill color="#006400" className="w-12 h-12" />,
      bgcolor: "bg-[#B8FBB6]",
    },
    {
      index: 3,
      title: "Prompt Delivery",
      description:
        "We guarantee prompt and reliable delivery to your doorstep. Our efficient logistics ensure that your orders arrive fresh and on time, so you can enjoy the convenience of farm-fresh goodness without leaving your home.",
      src: "/guarantee/rice.jpg",
      icon: <RiTimerFlashFill color="#006400" className="w-12 h-12" />,
      bgcolor: "bg-[#f7f7f7]",
    },
  ];
  return (
    <section className="section mb-28 md:mb-60 flex flex-col gap-10">
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
  icon,
  bgcolor,
}: {
  title: string;
  description: string;
  src: string;
  delay: number;
  index: number;
  icon: ReactElement;
  bgcolor?: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

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
      variants={isMobile ? variantsMobile : variantsDesktop}
      transition={transition}
      className="flex flex-col justify-center items-center gap-4 rounded-2xl bg-white border border-transparent dark:border-white/[0.2] dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] fpx-2 pb-4 space-x-4 overflow-hidden"
    >
      <div className="w-full h-40 flex justify-center items-center">
        <div className={`w-fit p-4 rounded-full ${bgcolor}`}>
          {/* <Image
            src={src}
            width={100}
            height={100}
            alt={title}
            className="h-24 w-24 hidden"
          /> */}
          {icon}
        </div>
      </div>
      <div className="flex flex-col px-4 gap-8 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default SectionWeGuarantee;
