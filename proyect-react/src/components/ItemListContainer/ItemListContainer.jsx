//Componete presentacional

import { useEffect, useState } from "react";
import { ItemList } from "../Item.List/Item.List";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        fetch("/data/products.json")      //Buscamos la ruta de los productos
        
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
        if (category) {
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);  

    return (
        <section>
            <h1>{ titulo }</h1> 
            <ItemList lista= {products} />       
        </section>     
    );
   };