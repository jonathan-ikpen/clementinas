"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export const LayoutGridDemo = () => {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.2885-15/427496893_373009209010800_7894232957127627971_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4zOTB4NjkzLnNkciJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Ee4GmvpJoAAAX8ajMZ_&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMzQ3NzU1MzAwMjUyNDY0Mg%3D%3D.2-ccb7-5&oh=00_AfASyoNr_Wjpq_TMtkRMmqID2bdMFkWY45UVJeI5e1Yt8w&oe=65DCDF4B&_nc_sid=10d13b",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.2885-15/425636518_2594896024020668_287931668348131157_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4zOTJ4NjkzLnNkciJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=JTxXp96r_fcAX9Pfv_V&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI5ODEwMDAzNjY5ODg1MjM5Nw%3D%3D.2-ccb7-5&oh=00_AfCGHEuFI03p1GuSFfjKTVSZwXatGMCbSlz6ueFf5oLqBg&oe=65DC2A2B&_nc_sid=10d13b",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.2885-15/424431910_764689228910282_6544056674695872818_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkciJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=UuzlYI5628cAX8RQfMP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI5MjIxNTQ2MTM1NTMyMDYxMDExODEwMzUyMDk1NzU3NjU%3D.2-ccb7-5&oh=00_AfCVacJySpiFKqZhX5U_Z5uGrBRRhvid0P4NnSzMOxbIsg&oe=65DC7C76&_nc_sid=10d13b",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://scontent.cdninstagram.com/v/t51.2885-15/357155287_1200877907273209_6976201531828799123_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4MTI4MC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=c6iE2-NHZQEAX_Cmjzu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEzNjAxMjE4ODY3MzQwNjc5OQ%3D%3D.2-ccb7-5&oh=00_AfC_GB_6aZfr1OV5HUUY2fLVv1Snw9Cm3oHOWFccyWIpgA&oe=65DC7C43&_nc_sid=10d13b",
  },
];
