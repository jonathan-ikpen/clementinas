"use client";
import Image from "next/image";
import ProductCard from "./card-product";
import {
  Best_SellersQuery,
  Best_SellersQueryVariables,
} from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

const SectionBestSellers = (props: {
  data: Best_SellersQuery;
  variable: Best_SellersQueryVariables;
  query: string;
}) => {
  const { data } = useTina({
    data: props.data,
    variables: props.variable,
    query: props.query,
  });
  const prod = [data.best_sellers.product];
  const products = [
    {
      name: "Palm Oil",
      src: "/products/palm-oil-2.svg",
      piece: "10 Qty +",
      price: "2,500",
      link: "https://paystack.com/buy/cle-palm-oil",
    },
    {
      name: "Pumpkin Leaf",
      src: "/products/pumpkin-leaf-2.svg",
      piece: "10 Qty +",
      price: "1,500",
      link: "https://paystack.com/buy/cle-ugwu",
    },
    {
      name: "Worm & Tapioca",
      src: "/products/edible-worm-tapioca-2.png",
      piece: "10 Qty +",
      price: "5,500",
      link: "https://paystack.com/buy/cle-edible-worm-tapioca",
    },
    {
      name: "Cray Fish",
      src: "/products/cray-fish-2.svg",
      piece: "10 Qty +",
      price: "1,500",
      link: "https://paystack.com/buy/cle-cray-fish",
    },
    {
      name: "Yam",
      src: "/products/yam-2.svg",
      piece: "10 Qty +",
      price: "10,500",
      link: "https://paystack.com/buy/cle-yam",
    },
    {
      name: "Prawn",
      src: "/products/prawn-2.svg",
      piece: "10 Qty +",
      price: "4,500",
      link: "https://paystack.com/buy/cle-prawn",
    },
  ];

  return (
    <section className="section-with-pb flex flex-col gap-16">
      <h1 className="heading-1 text-center">Best Sellers</h1>
      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* {products.map((product, index) => (
          <ProductCard key={index} delay={index * 0.2} {...product} />
        ))} */}
        {prod.map(
          (product, index) =>
            product && (
              <ProductCard
                key={index}
                delay={index * 0.2}
                src={product?.src || ""}
                name={product?.name || ""}
                piece={product?.piece || ""}
                price={product?.price || ""}
                link={product?.link || ""}
              />
            )
        )}
      </div>
    </section>
  );
};

export default SectionBestSellers;
