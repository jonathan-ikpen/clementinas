import Image from "next/image";
import ProductCard from "./card-product";
import client from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const SectionBestSellers = async () => {
  const response = await client.queries.best_sellersConnection();
  const bestSellersData =
    response.data.best_sellersConnection.edges?.map((edge) => edge?.node) || [];

  return (
    <section className="section-with-pb flex flex-col gap-16">
      <h1 className="heading-1 text-center">Best Sellers</h1>
      <div
        className="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10"
        // data-tina-field={tinaField(bestSellersData)}
      >
        {bestSellersData.map(
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
