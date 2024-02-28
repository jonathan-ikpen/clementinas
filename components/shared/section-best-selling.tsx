import Image from "next/image";
import ProductCard from "./card-product";

const BestSellers = () => {
  const products = [
    {
      name: "Palm Oil",
      src: "/products/palm-oil.svg",
      piece: "10 Qty +",
      price: "2,500",
    },
    {
      name: "Pumpkin Leaf",
      src: "/products/pumpkin-leaf.svg",
      piece: "10 Qty +",
      price: "1,500",
    },
    {
      name: "Edible Worm & Tapioca",
      src: "/products/edible-worm-tapioca.png",
      piece: "10 Qty +",
      price: "5,500",
    },
    {
      name: "Cray Fish",
      src: "/products/cray-fish.png",
      piece: "10 Qty +",
      price: "1,500",
    },
    {
      name: "Yam",
      src: "/products/yam.png",
      piece: "10 Qty +",
      price: "10,500",
    },
    {
      name: "Prawn",
      src: "/products/prawn.png",
      piece: "10 Qty +",
      price: "4,500",
    },
  ];
  return (
    <section className="section flex flex-col gap-16">
      <h1 className="heading-1 text-center">Best Sellers</h1>
      <div className="grid justify-items-center grid-cols-2 fmd:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} delay={index * 0.2} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
