/* Exporta el contecto*/

import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};