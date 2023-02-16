import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag, HiSearch } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { useStateContext } from "../context/StateContext";

const MobileNavbar = () => {
  const { qty, totalQuantities, showCart, setShowCart } = useStateContext();
  return (
    <div className="xl:hidden lg:hidden md:hidden">
      <div className="w-full flex justify-between items-center ">
        <IoPersonSharp className="text-3xl ml-3 text-gray-700" />
        <Link href="/">
          <img src="/logo.png" alt="logo" className="sm:h-20 rounded-md" />
        </Link>

        <h2 className="mr-4">
          <div className="justify-center items-center">
            <div className="relative rounded-full bg-red-600 -mb-5 z-10 text-center align-middle text-white font-bold ml-5">
              {totalQuantities}
            </div>

            <HiOutlineShoppingBag
              onClick={() => setShowCart(true)}
              fontSize={40}
              className="relative text-gray-600"
            />
          </div>
        </h2>
      </div>
      <div className="flex justify-center font-bold text-blue-900">
        <button>
          <Link href="/">
            <h1 className="mx-2 ">Home</h1>
          </Link>
        </button>

        <button>
          <Link href="/allproduct">
            <h1 className="mx-2">Catalog</h1>
          </Link>
        </button>
        <button>
          <Link href="/contact">
            <h1 className="mx-2">Contact</h1>
          </Link>
        </button>
        <button>
          <Link href="/about">
            <h1 className="mx-2">About</h1>
          </Link>
        </button>
      </div>

      <div className="w-full sm:mr-6 justify-end flex items-center pb-6 mt-4">
        <input
          type="text"
          value="setSearch"
          readOnly
          className="absolute p-2 bg-gray-200 sm:w-95vw rounded-md mx-2"
        />
        <HiSearch className="relative mr-3 p-1 text-white w-6 h-6 rounded-full bg-blue-900" />
      </div>
    </div>
  );
};

export default MobileNavbar;
