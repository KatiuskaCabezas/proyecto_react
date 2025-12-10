import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

   const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (Item) => {
    if (exists(Item.id)) {
        alert(`El Producto ya Existe`);
        return;      
        }

    setCart([...cart, Item]);
    alert(`${Item.name} agregado`);
    
  };

  /* ---------------  Vaciar carrito    ------------------ */
  const clearCart = () => {
    setCart([]);
  };

  /* --------------  Calcular total de ítems en el carrito ----------------- */
  const getTotalItems = () => {
    if (cart.length) {
    return cart.length;
    }
    };

  const values = {cart, addItem, clearCart, getTotalItems};  
  
    return <CartContext.Provider values={values}>{children}</CartContext.Provider>;
  };
