import { client } from "lib/client";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type=='product']{
        slug{
            current
        }
      }`;
      const products = await client.fetch(query);
      setProducts(products);
    };
    fetchData();
  }, []);

  const getProduct = async (slug) => {
    const allProductsQuery = `*[_type=="product"]`;
    const allProductsData = await client.fetch(allProductsQuery);

    const oneProductQuery = `*[_type=="product" && slug.current=='${slug}'][0]`;
    const oneProductData = await client.fetch(oneProductQuery);

    return { allProductsData, oneProductData };
  };

  return (
    <ProductContext.Provider value={{ products, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
