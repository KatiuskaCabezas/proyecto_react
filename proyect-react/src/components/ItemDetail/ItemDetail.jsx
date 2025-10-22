//Detalle de vista

import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {
    return (
    <Item {...detail}>
        <p>Children</p>
    </Item>
    );     
};