import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  const addItemToCar = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  // toast.success(`${qty} ${product.name} Added to the Cart`, {
  //   position: "top-center",
  //   theme: "light",
  //   pauseOnHover: false,
  //   draggable: false,
  // });

  //1.Get the qty.
  const getQty = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  //2.Inc the qty
  const increaseQty = (id) => {
    setCartItems((currItems) => {
      //scn1->Item not in cart already
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }
      //scn2->Item already in the cart
      else {
        return currItems.map((item) => {
          if (item.id === id) {
            //Item +1
            return { item, quantity: item.quantity + 1 };
          } else {
            return item; //keep all as it is
          }
        });
      }
    });
  };

  //3.Dec the qty
  const decreaseQty = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == 1) {
        //if decrease reach to 1 then don't do anything further
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //4.Add to Cart
  const addItemToCart = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        //no id is there means->This item is not in cart already
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //5.Delete from Cart
  const deleteCartItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  //6.Get the total Price of all items
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  //7.Get the total items in the cart
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        qty,
        setQty,
        getQty,
        increaseQty,
        decreaseQty,
        addItemToCart,
        deleteCartItem,
        getTotalPrice,
        totalCartQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
