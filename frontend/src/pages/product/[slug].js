import Cart from "../../Components/Cart";
import MayLike from "../../Components/MayLike";
import { client, urlFor } from "../../../lib/client";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ allProductsData, oneProductData }) => {
  const { name, details, image, price } = oneProductData;
  const { getQty, increaseQty, addItemToCart, itemQuantity } =
    useStateContext();
  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItemToCart(oneProductData, quantity);
  };

  return (
    <>
      <div className="flex sm:flex-col gap-8 sm:mx-7 mt-10 sm:mt-1 #324d67">
        <div>
          {/* Mobile Heading ⤵ */}

          <h1 className="text-2xl font-bold text-blue-900 mt-6 ml-3 xl:hidden lg:hidden">
            {name}
          </h1>

          <div className="w-72 h-72 bg-gray-200 rounded-lg ml-24 sm:ml-2 mt-9 sm:mt-1 flex">
            <img
              src={urlFor(image && image[imgIndex])}
              alt={name}
              className="rounded-lg"
            />
          </div>

          {/* Small product images  */}
          <div className="ml-24 flex sm:mx-3 gap-1 w-16 h-16 mt-3">
            {image.slice(0, 4).map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt="pdt"
                onMouseEnter={() => setImgIndex(i)}
                onTouchStart={() => setImgIndex(i)}
                className="cursor-pointer rounded-lg border border-black hover:transition-all ease-in-out hover:shadow-md hover:outline-1 hover:shadow-blue-900"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-900 mt-6 ml-5 sm:hidden">
            {name}
          </h1>
          <h3 className="ml-5 font-bold text-blue-900">Details:</h3>
          <p className="mx-5 text-black"> {details}</p>
          <div className="flex mx-4 my-4">
            <AiFillStar className="fill-yellow-500" />
            <AiFillStar className="fill-yellow-500" />
            <AiFillStar className="fill-yellow-500" />
            <AiFillStar className="fill-yellow-500" />
            <AiOutlineStar className="fill-yellow-300" />
            (20)
          </div>
          <h2 className="ml-5 my-8 font-semibold text-2xl">₹{price}</h2>

          <button
            type="button"
            className="w-32 h-10 ml-3 mt-3 mr-3 p-1 border-2 items-center rounded-md font-semibold border-blue-900 sm:hidden hover:bg-blue-900 hover:text-white hover:scale-95 transition-all ease-out"
            onClick={() => addItemToCart(oneProductData._id)}
          >
            ADD TO CART
          </button>

          <button
            type="button"
            className="w-36 h-10 mt-3 ml-3 p-1 items-center rounded-md text-white bg-blue-900 font-semibold sm:hidden hover:scale-95 transition-all ease-out"
          >
            BUY NOW
          </button>
        </div>
      </div>
      {/* Mobile Buttons ⤵*/}
      <div className="xl:hidden lg:hidden md:hidden flex">
        <button
          type="button"
          className="w-32 h-10 ml-8 mr-3 p-1 border-2 items-center rounded-md font-semibold border-blue-900"
          // onClick={increaseQty(_id)}
        >
          ADD TO CART
        </button>
        <button
          type="button"
          className="w-36 h-10 ml-3 p-1 items-center rounded-md text-white bg-blue-900 font-semibold"
        >
          BUY NOW
        </button>
      </div>
      <div className="flex justify-center items-center sm:mt-3 sm:mb-0 mb-2">
        <h1 className="text-3xl font-bold sm:text-lg text-blue-900">
          You May Also Like
        </h1>
      </div>

      <div className="hover:animate-none ease-in-out sm:w-10/12 sm:whitespace-pre-wrap sm:mb-8 sm:overflow-hidden flex justify-center items-center whitespace-nowrap will-change-transform animate-marquee">
        {allProductsData.slice(0, 8).map((products) => (
          <MayLike products={products} key={products._id} />
        ))}
      </div>
    </>
  );
};

//Querying the DB⤵
export const getStaticPaths = async () => {
  const query = `*[_type=='product']{
        slug{
            current
        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

//Use `getStaticProps` when fetching already retrieved data.
export const getStaticProps = async ({ params: { slug } }) => {
  const allProductsQuery = `*[_type=="product"]`;
  const allProductsData = await client.fetch(allProductsQuery);

  const oneProductQuery = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const oneProductData = await client.fetch(oneProductQuery);

  return {
    props: { allProductsData, oneProductData },
  };
};

export default ProductDetails;
