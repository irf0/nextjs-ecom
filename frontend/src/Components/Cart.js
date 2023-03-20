import { urlFor } from "../../lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {
    setShowCart,
    cartItems,
    getQty,
    increaseQty,
    decreaseQty,
    totalCartQuantity,
  } = useStateContext();
  const ref = useRef();

  const decQty = (id) => {
    decreaseQty(id);
  };

  return (
    <div>
      <div
        ref={ref}
        className="absolute z-10 h-full w-656 sm:w-275 bg-gray-100 top-2 right-0 rounded-tl-md rounded-bl-md transition-all ease-out animate-slide-in duration-500 backdrop-blur-lg sm:animate-none sm:transition-all sm:ease-out"
      >
        <AiFillCloseCircle
          onClick={() => setShowCart(false)}
          className="m-4 cursor-pointer text-2xl text-blue-900"
        />
        {totalCartQuantity < 1 ? (
          <div className="flex justify-between items-center flex-col my-32">
            <AiOutlineShoppingCart
              fontSize={40}
              className="sm:text-3xl text-gray-600"
            />

            <h1 className="text-black text-lg font-semibold">
              Your Cart is Empty !
            </h1>
            <Link href="/product">
              <button
                type="button"
                className="bg-blue-900 p-2 rounded-lg text-white mt-2"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex justify-center">
              <h1 className="font-bold">({totalCartQuantity} items)</h1>
            </div>
            {cartItems.map((item) => (
              <div className="relative" key={item._id}>
                <div className="flex">
                  <Image
                    key={item._id}
                    src={urlFor(item?.image)}
                    alt={item.name}
                    className="rounded-lg bg-gray-200 w-32 h-32 sm:h-20 sm:w-20 mx-3 my-2"
                  />
                  <div>
                    <h1 className="text-blue-900 text-xl font-bold">
                      {item.name}
                    </h1>
                    <div className="flex items-center my-4">
                      <h3 className="font-bold text-blue-900">Quantity:</h3>

                      <button
                        type="button"
                        onClick={() => decQty(item._id)}
                        disabled={getQty(item._id) == 1}
                        className="p-2 mx-2 w-8 h-8 rounded-full text-white bg-blue-900 hover:scale-95 transition-all ease-out"
                      >
                        <HiMinus />
                      </button>

                      <span className="font-semibold flex justify-center items-center">
                        {getQty(item._id)}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQty(item._id)}
                        className="p-2 mx-2 w-8 h-8 rounded-full text-white bg-blue-900 hover:scale-95 transition-all ease-out"
                      >
                        <HiPlus />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-blue-900">
                        Price: ₹{item.price * getQty(item._id)}
                      </h3>
                      <MdDelete
                        onClick={() => onRemove(item)}
                        fontSize={20}
                        className="text-red-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center absolute bottom-20 text-xl font-bold mx-7 sm:mx-2">
          <h1 className="ml-5">Subtotal : </h1>
          <h1 className="ml-24">
            {cartItems.reduce((total, cartItem) => {
              const product = cartItems.find((item) => item.id === cartItem.id);
              return total + (product?.price || 0) * cartItem.quantity;
            }, 0)}
          </h1>
        </div>
        <div className="flex flex-col absolute bottom-8 w-4/5 mx-7 ">
          <button
            type="button"
            className="bg-blue-900 text-white p-2 rounded-md"
            onClick={""}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
