import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

const Layout = ({ children }) => {
  const { showCart, setShowCart } = useStateContext();
  return (
    <>
      <Head>
        <title>Techtopia</title>
      </Head>
      <header>
        <Navbar />
        <MobileNavbar />
      </header>
      {showCart && <Cart />}

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
