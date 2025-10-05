//Componete presentacional

import { ItemList } from "../Item.List/Item.List";

export const ItemListContainer = ({ titulo, productos }) => {
    // estado

    // llama a una API

    return (
        <section>
            <h1>{ titulo }</h1> 

            <ItemList lista= {productos} />           

           
        </section>       
    );

   
};