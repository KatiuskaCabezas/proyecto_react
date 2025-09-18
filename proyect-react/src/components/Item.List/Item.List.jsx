// Se encarga de decidir si le pasa las cosas a Item o muestra un p

import { Item } from "../Item/Item"

export const ItemList = ({lista}) => {

    //El fragment <></> sirve para no crear otro nodo que contenga los productos

    return ( <>

        {lista.length ? (lista.map((prod) => (
            <Item key= {prod.id} {...prod}>
                <button>soy un botón</button>
            </Item>
            ) ) 
        ) : (
                <p>No hay productos</p>
            )}        
     </>
    )   
    
     /* El ternario ? se usa como if y : como else, el map, mapea el true */ 
     /* Todo mapeo de algo que se renderiza dinamicamente tiene que pasarle el key,
     para que el React sepa a quien le esta modificando cosas*/
   
}