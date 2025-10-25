//Retorna de la API el detalle

import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({}); //{} valor true

    const {id}= useParams();

    useEffect(() => {
        fetch("/data/products.json")

        .then((res) => {
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos"); //Se ve con el host                
            } 
            return res.json();
        })

        //Para traer el ID del producto que queramos
        .then((data) => {
            const found = data.find((p) => p.id === id);
            if (found) {
                setDetail(found);
            } else {
                throw new Error("Producto no encontrado");
            }
        })
         .catch((error) => {
            console.log(error);            
        });

    }, [id]);    

    return (
    <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail= { detail } /> 
        ) : ( 
        <p> Cargando...</p>)
        }

    </main>
    );
};