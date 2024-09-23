import { createContext, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const val = {
    products,
    currency,
    delivery_fee
  };

  return (
    <ShopContext.Provider value={val}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
