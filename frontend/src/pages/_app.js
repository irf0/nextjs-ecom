import Layout from "../Components/Layout";
import { ProductProvider } from "../context/ProductContext";
import { StateContext } from "../context/StateContext";
import { Slide, ToastContainer } from "react-toastify";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <ToastContainer
          position="top-center"
          theme="light"
          transition={Slide}
          newestOnTop={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
