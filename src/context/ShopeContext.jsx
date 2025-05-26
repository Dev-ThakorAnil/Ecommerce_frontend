import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopeContext = createContext();

const ShopeContextProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [ShowSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "₹";
  const delivery_fee = 10;

  //  Corrected addToCart logic
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      // Deep clone nested object to prevent mutation
      newCart[itemId] = { ...(newCart[itemId] || {}) };

      // Update quantity
      newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;

      return newCart;
    });
    toast.success("Item added to cart");
  };

  // Total cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
          console.error("Error reading cart item:", error);
        }
      }
    }
    return totalCount;
  };

  // Debug log
  useEffect(() => {}, [cartItems]);

  const UpdateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  // Cart Total

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  // Context value
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    UpdateQuantity,
    getCartAmount,
  };

  return (
    <ShopeContext.Provider value={value}>{children}</ShopeContext.Provider>
  );
};

export default ShopeContextProvider;
