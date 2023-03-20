import { urlFor } from "../../lib/client";
import Link from "next/link";
import React from "react";

const SaleBanner = ({ saleItem }) => {
  console.log(saleItem[2]);
  const { image } = saleItem[2];
  return (
    <div className="flex justify-center">
      <div className="w-10/12 sm:basis-10/12 h-340 sm:h-36 sm:mt-6 mt-16 rounded-lg items-center justify-center flex bg-red-500">
        <div className="flex flex-col">
          <h1 className="uppercase text-6xl sm:text-base font-extrabold text-white">
            {saleItem[2].saleTime}
          </h1>
          <h1 className="uppercase text-6xl sm:text-base font-extrabold text-white">
            {saleItem[2].discount} OFF
          </h1>
          <Link href={`/product`}>
            <button
              type="button"
              className="bg-white mt-10 sm:text-sm sm:p-1 sm:rounded-md rounded-lg p-3 text-red-500 font-extrabold text-3xl"
            >
              {saleItem[1].buttonText}
            </button>
          </Link>
        </div>

        <img
          src={urlFor(saleItem[2].image)}
          alt="sale"
          className="ml-10 sm:ml-0 sm:w-48 sm:h-36"
        />
      </div>
    </div>
  );
};

export default SaleBanner;
