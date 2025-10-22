//Detalle de vista

import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {
    return (
    <Item {...detail}>
        <button>Enviar al Carrito</button>
    </Item>
    );     
};