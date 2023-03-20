import { urlFor } from "../../lib/client";
import Link from "next/link";
import React from "react";

const MayLike = ({ products }) => {
  const { name, price, image, slug } = products;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="w-40 h-40 sm:w-20 sm:h-20 rounded-md m-3 sm:my-12 hover:scale-125 transition-all ease-in-out cursor-pointer">
          <img
            src={urlFor(image && image[0])}
            alt="product"
            className="rounded-lg drop-shadow-lg bg-gray-200"
          />
          <h1>{name}</h1>
          <p className="font-bold">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default MayLike;
