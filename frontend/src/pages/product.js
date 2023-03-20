import { client, urlFor } from "../../lib/client";
import Link from "next/link";
import React from "react";

const AllProduct = ({ productData }) => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center flex-wrap">
          {productData.map((product) => (
            <Link href={`/product/${product.slug.current}`}>
              <div
                key={product._id}
                className="mb-4 w-40 h-40 sm:w-20 sm:h-20 rounded-md m-3 sm:my-14 hover:scale-125 transition-all ease-in-out"
              >
                <img
                  src={urlFor(product.image[0])}
                  alt="product"
                  className="rounded-lg drop-shadow-lg bg-gray-200 cursor-pointer"
                />
                <h1>{product.name}</h1>
                <p className="font-bold">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProduct;

export const getServerSideProps = async () => {
  const productQuery = '*[_type=="product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData },
  };
};
