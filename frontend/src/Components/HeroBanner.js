import { urlFor } from "../../lib/client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  const { slug } = heroBanner;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <div className="w-full mt-6">
        <Slider {...settings}>
          {/* slide-1 */}
          <div className=" w-full h-510 mx-0 sm:h-64 flex cursor-pointer bg-slate-300">
            <img
              src={urlFor(heroBanner[0].image)}
              alt="heroBanner"
              className="absolute w-656 h-420 sm:w-72 sm:h-60 sm:ml-40"
            />

            <div className="items-center mt-20 sm:mt-24 float-right mr-36 flex flex-col">
              <h3 className="text-9xl sm:text-3xl font-extrabold text-white absolute bottom-40">
                {heroBanner[0].discount}
              </h3>
              <h2 className="text-6xl sm:text-base sm:font-bold sm:-ml-6 font-extrabold text-white">
                {heroBanner[0].highlights}
              </h2>
              <h1 className="text-9xl sm:text-3xl text-red-500 sm:z-10 font-extrabold">
                {heroBanner[0].largeText1}!
              </h1>
              <Link href="/product">
                <div
                  type="button"
                  className="bg-red-500 rounded-md flex justify-center text-white font-bold p-2 absolute bottom-14 sm:bottom-5 w-40 sm:w-32 sm:p-1"
                >
                  {heroBanner[0].buttonText}
                </div>
              </Link>
            </div>
          </div>

          {/* slide-2 */}
          <div className="relative w-full h-510 mx-0 sm:h-64 cursor-pointer bg-yellow-400">
            <img
              src={urlFor(heroBanner[1].image)}
              alt="heroBanner"
              className="absolute sm:w-72 sm:h-60 -mt-12 sm:-mt-0 sm:-ml-12"
            />
            <div className="items-center mt-28 float-right sm:mt-1 flex flex-col">
              <h3 className="text-3xl sm:text-base font-bold sm:mt-14 text-black">
                {heroBanner[1].smallText}
              </h3>
              <h2 className="text-4xl sm:hidden font-extrabold text-white mx-36">
                {heroBanner[1].highlights}
              </h2>
              <h1 className="text-8xl ml-24 sm:text-4xl sm:uppercase sm:-mr-0 sm:-mb-36 text-blue-900 font-extrabold ">
                {heroBanner[1].largeText1}!
              </h1>
              <Link href="/product">
                <button
                  type="button"
                  className="p-2 rounded-lg bg-blue-900 absolute bottom-8 sm:bottom-2 text-white font-bold w-40 sm:w-32 mb-4"
                >
                  {heroBanner[1].buttonText}
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroBanner;
