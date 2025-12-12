//Componete presentacional

import { useEffect, useState } from "react";
import { ItemList } from "../Item.List/Item.List";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {

      const URL = "https://6939fe90c8d59937aa098a9d.mockapi.io/products";

        fetch(URL)  //URL API
        
     //Esperar la respuesta de la promesa, la palabra res la ponemos nosotros
        .then((res) => {
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos");                
            } 
            return res.json();  //Retorna los datos transformados en JS
        })

     //Esperamos la data de los datos transformamos en JS, 
     // la palabra data la ponemos nosotros
       .then((data) => {
        if (categoryId) {
          setProducts(data.filter((prod) => prod.category === categoryId));
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);  

    return (
        <section>
            <h1>{ titulo }</h1> 
            <ItemList lista= {products} />       
        </section>     
    );
   };