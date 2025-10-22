// Es donde pasan las props, se crea la card
//Se incluye Children

import "./Item.css";

export const Item = ({name, price, category, description, imageUrl, children}) => {
     
    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
                    <h2 className="product-title">{name}</h2>
                    <p>Precio: ${price}</p>
                    <p>Categoría: {category}</p>
                    <p>Descripción: {description}</p>
                    {children}
                </article>
    );    
};