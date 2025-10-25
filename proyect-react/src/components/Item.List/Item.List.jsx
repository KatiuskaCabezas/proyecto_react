// Se encarga de decidir si le pasa las cosas a Item o muestra un p, solo mapea

import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({lista}) => {

    //El fragment <></> sirve para no crear otro nodo que contenga los productos
    /*Para que map funcione se debe incluir el key y siempre va en el padre*/
    //En este caso se pasa como operador spread, para pasar clave valor del prop

    return ( <>

        {lista.length ? (
            lista.map((prod) => (
            <Link to={`/detail/${prod.id}`} key= {prod.id}>
            <Item  {...prod} />
            </Link>        
          ) ) 
        ) : (
                <p>No hay productos</p>
            )}        
     </>
    );   
    
     /* El map, mapea el true */ 
     /* Todo mapeo de algo que se renderiza dinamicamente tiene que pasarle el key,
     para que el React sepa a quien le esta modificando cosas*/
   
};