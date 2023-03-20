import HeroBanner from "../Components/HeroBanner";
import BestSeller from "../Components/BestSeller";
import React from "react";
import { client } from "../../lib/client";
import SaleBanner from "../Components/SaleBanner";
import Link from "next/link";

//-----------------This is the HomePage-------------------//

const Home = ({ productData, bannerData }) => {
  return (
    <>
      {/* BODY ⤵ */}
      {/*1.  Banner section */}

      <HeroBanner heroBanner={bannerData.length && bannerData} />

      {/*2. BestSeller section */}
      <div className="text-blue-900 justify-center flex mt-10">
        <h1 className="text-3xl font-extrabold">Best Sellers of the Week</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {productData.slice(0, 6).map((product) => (
          <BestSeller product={product} key={product._id} />
        ))}

        {/* //To view all products->No need a navigation menu// */}
        <div className="flex justify-center w-40 h-40 sm:w-20 sm:h-20 opacity-80 rounded-md m-3 sm:my-12 hover:scale-125 transition-all ease-in-out bg-gray-400 hover:bg-opacity-80">
          <div className="flex justify-center items-center">
            <Link href="/product">
              <button className="bg-yellow-400 p-1.5 sm:p-1 lg:w-28 xl:w-28  rounded-md text-white">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*3. Sale Banner section */}
      <SaleBanner saleItem={bannerData.length && bannerData} />
    </>
  );
};
export const getServerSideProps = async () => {
  const productQuery = '*[_type=="product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData },
  };
};
export default Home;
