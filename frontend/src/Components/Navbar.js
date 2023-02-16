import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const { showCart, setShowCart, totalCartQuantity } = useStateContext();
  return (
    <>
      <div className="h-20 w-full flex  justify-between items-center sm:hidden">
        <Link href="/">
          <img
            src="/logo.png"
            alt="logo"
            className="ml-6 sm:ml-1 w-32 h-32 sm:h-14 rounded-md"
          />
        </Link>

        <div className="w-4/6 sm:mr-6 justify-end flex items-center">
          <input
            type="text"
            value="setSearch"
            readOnly
            className="absolute p-2 bg-gray-200 w-4/6 sm:w-44 rounded-md"
          />
          <HiSearch className="relative mr-2 p-1 text-white cursor-pointer w-6 h-6 rounded-full bg-blue-900" />
        </div>

        <IoPersonSharp className="text-3xl cursor-pointer text-gray-700" />

        <h2 className="mr-4">
          <div className="justify-center items-center ">
            <div className="relative rounded-full bg-red-600 -mb-5 z-10 text-center align-middle text-white font-bold ml-5">
              {totalCartQuantity}
            </div>

            <HiOutlineShoppingBag
              onClick={() => setShowCart(true)}
              fontSize={40}
              className="relative cursor-pointer text-gray-700"
            />
          </div>
        </h2>
      </div>

      <div className="flex mb-2 justify-center sm:hidden cursor-pointer font-bold text-blue-900">
        <Link href="/">
          <h1 className="mx-2 hover:scale-110">Home</h1>
        </Link>

        <Link href="/product">
          <h1 className="mx-2 hover:scale-110">Catalog</h1>
        </Link>

        <Link href="/contact">
          <h1 className="mx-2 hover:scale-110">Contact</h1>
        </Link>
        <Link href="/about">
          <h1 className="mx-2 hover:scale-110">About</h1>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
