import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsMessenger,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 sm:mt-12 mt-52">
        <div className="ml-5 text-lg font-semibold text-gray-600 items-center">
          <h1 className="text-gray-400 font-bold text-lg">Sitemap</h1>
          <Link href="/">
            <h2 className="hover:text-gray-300">Home</h2>
          </Link>
          <Link href="/product">
            <h2 className="hover:text-gray-300">Catalog</h2>
          </Link>
          <Link href="/about">
            <h2 className="hover:text-gray-300">About</h2>
          </Link>
          <Link href="/contact">
            <h2 className="hover:text-gray-300">Contact</h2>
          </Link>
          <div className="flex justify-end -mt-28">
            <Link href="/">
              <img
                src="/footerlogo.png"
                alt="logo"
                className="ml-6 w-40 h-32 sm:h-16 rounded-md mr-6 sm:mr-2 sm:w-20 "
              />
            </Link>
          </div>
        </div>

        <div className=" text-white flex gap-3 cursor-pointer text-xl justify-center my-5">
          <Link href="https://www.instagram.com/the_mirfan/">
            <BsInstagram />
          </Link>
          <Link href="https://twitter.com/home">
            <BsTwitter />
          </Link>
          <Link href="https://in.pinterest.com/pinterest/">
            <BsPinterest />
          </Link>
          <Link href="https://www.facebook.com/">
            <BsFacebook />
          </Link>
          <Link href="https://www.messenger.com/">
            <BsMessenger />
          </Link>
        </div>

        <div className="flex justify-center text-white">
          <p className="mb-3">
            Made with ❤ by{" "}
            <a href="https://dev-irfan.vercel.app/" className="underline">
              mIrfan
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
