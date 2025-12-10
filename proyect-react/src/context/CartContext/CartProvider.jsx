/* Proveedor */

import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //Función auxiliar, avisa si algo está o no
    const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
    };

    //Para saber si el producto existe en el carrito
    const addItem = (item) => {
        if (exists(item.id)) {
        alert(`El Producto ya Existe`);
        return;      
        }

        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    
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

    const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    // deleteItem,
    // total,
    // checkout,
  };

 return (
  <CartContext.Provider value={values}>
    {children}
  </CartContext.Provider>
  
);

};    
