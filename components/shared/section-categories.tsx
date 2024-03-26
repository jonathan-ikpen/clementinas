"use client";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SectionCategory = () => {
  return (
    <section className="section-with-pb rounded-md flex flex-col gap-16 md:gap-40 antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="heading-1 text-center max-w-4xl !text-white">
        We Sell All Types of Foodstuffs
      </h1>
      <div className="flex flex-col gap-20">
        <CategoryContainer direction="left" />
        <CategoryContainer direction="right" />
      </div>
    </section>
  );
};

const CategoryContainer = ({
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  const category = [
    {
      name: "Oils",
      src: "/categories/palm-oil.webp",
      link: "",
    },
    {
      name: "Vegetables",
      src: "/categories/tomatoe1.jpg",
      link: "",
    },
    {
      name: "Grains",
      src: "/categories/grains.jpg",
      link: "",
    },
    {
      name: "Tubers",
      src: "/categories/tuber2.jpg",
      link: "",
    },
    {
      name: "Fruits",
      src: "/categories/cherry.jpeg",
      link: "",
    },
    {
      name: "Meat",
      src: "/categories/snail.jpg",
      link: "",
    },
    {
      name: "Poultry",
      src: "/categories/crab.jpg",
      link: "",
    },
    {
      name: "Others",
      src: "/categories/palm.jpg",
      link: "",
    },
  ];

  return (
    <div
      className="scroller relative z-20 max-w-full overflow-hidden"
      ref={containerRef}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-20 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {category.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </ul>
    </div>
  );
};

const CategoryCard = ({
  src,
  name,
  link,
}: {
  src: string;
  name: string;
  link: string;
}) => {
  return (
    <li className="w-[300px] max-w-full h-[12rem] md:h-[18rem] relative overflow-hidden rounded-2xl border border-b-0 flex-shrink-0 border-black md:w-[450px] fbrand-shadow">
      <div
        aria-hidden="true"
        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
      ></div>
      <Image
        src={src}
        width={250}
        height={200}
        alt="produce"
        className="w-full filter brightness-50 fbackdrop-blur-sm"
      />
      <div className="w-full absolute flex flex-col justify-center items-center gap-4 top-1/4 fright-40">
        <div>
          <h4 className="fscroll text-white text-2xl md:text-5xl font-extrabold tracking-tight">
            {name}
          </h4>
        </div>

        <div className="text-white py-2 px-4 border border-white rounded-2xl w-fit">
          <Link href={link}>Shop now</Link>
        </div>
      </div>
    </li>
  );
};

export default SectionCategory;
