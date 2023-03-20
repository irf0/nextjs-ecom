// import React, { createContext, useContext, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Context = createContext();

// export const StateContext = ({ children }) => {
//   const [qty, setQty] = useState(1);
//   const [showCart, setShowCart] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalQuantities, setTotalQuantities] = useState(0);

//   let foundProduct;
//   let index;

//   //1.Qty choose
//   const incQty = () => {
//     setQty((prevQty) => prevQty + 1);
//   };
//   const decQty = () => {
//     setQty((prevQty) => {
//       if (prevQty - 1 < 1) return 1;
//       return prevQty - 1;
//     });
//   };

//   //2.Add to Cart(most imp.)

//   //i.Add
//   //pdt & qty coming from [slug].js
//   const onAdd = (product, quantity) => {
//     const checkPdtAlreadyInCart = cartItems.find(
//       (item) => item._id === product._id
//     );

//     //ii.Check
//     if (checkPdtAlreadyInCart) {
//       setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);
//       setTotalPrice(
//         (prevTotalPrice) => prevTotalPrice + product.price * quantity //inc qty
//       );

//       //iii.Update
//       const updatedCartItems = cartItems.map((cartPdt) => {
//         if (cartPdt._id === product._id)
//           return {
//             ...cartPdt,
//             quantity: cartPdt.quantity + quantity, //+inc qty
//           };
//       });
//       setCartItems(updatedCartItems);
//     } else {
//       product.quantity = quantity;
//       setCartItems([...cartItems, { ...product }]);
//       setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);
//       setTotalPrice(
//         (prevTotalPrice) => prevTotalPrice + product.price * quantity //inc qty
//       );
//     }
//     toast.success(`${qty} ${product.name} Added to the Cart`, {
//       position: "top-center",
//       theme: "light",
//       pauseOnHover: false,
//       draggable: false,
//     });
//   };

//   //3.Remove from cart
//   const onRemove = (product) => {
//     foundProduct = cartItems.find((item) => item._id === product._id);
//     const newCartItems = cartItems.filter((item) => item._id !== product._id);
//     setTotalQuantities((prevQty) => prevQty - foundProduct.quantity);
//     setTotalPrice(
//       (prevTotalPrice) =>
//         prevTotalPrice - foundProduct.price * foundProduct.quantity
//     );
//     setCartItems(newCartItems);
//     toast.error(`${qty} ${product.name} Removed from the Cart`, {
//       position: "top-center",
//       theme: "light",
//       pauseOnHover: false,
//       draggable: false,
//     });
//   };

//   //4.Change the Quantity,TotalPrice inside the cart
//   // const toggleCartItems = (id, value) => {
//   //   foundProduct = cartItems.find((item) => item._id === id);
//   //   index = cartItems.findIndex((product) => product._id === id);

//   //   let newCartItems = cartItems.filter((item) => item._id !== id);

//   //   if (value === "inc") {
//   //     setCartItems([
//   //       ...newCartItems,
//   //       { ...foundProduct, quantity: foundProduct.quantity },
//   //     ]);
//   //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
//   //     setTotalQuantities((prevTotalQty) => prevTotalQty + 1);
//   //   } else if (value === "dec") {
//   //     if (foundProduct.quantity > 1) {
//   //       setCartItems([
//   //         ...newCartItems,
//   //         { foundProduct, quantity: foundProduct.quantity },
//   //       ]);
//   //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
//   //       setTotalQuantities((prevTotalQty) => prevTotalQty - 1);
//   //     }
//   //   }
//   // };

//   //Quantity
//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((cartItem) => {
//       if (cartItem.id === id) {
//         return { ...cartItem, quantity: cartItem.quantity + 1 };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCart);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems.map((cartItem) => {
//       if (cartItem.id === id && cartItem.quantity > 1) {
//         return { ...cartItem, quantity: cartItem.quantity - 1 };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCart);
//   };

//   return (
//     <Context.Provider
//       value={{
//         incQty,
//         decQty,
//         qty,
//         showCart,
//         setShowCart,
//         cartItems,
//         setCartItems,
//         totalPrice,
//         setTotalPrice,
//         totalQuantities,
//         setTotalQuantities,
//         onAdd,
//         onRemove,
//         // toggleCartItems,
//         increaseQuantity,
//         decreaseQuantity,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
// export const useStateContext = () => useContext(Context);
