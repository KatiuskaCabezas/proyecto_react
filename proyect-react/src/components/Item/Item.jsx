// Es donde pasan las props, se crea la card
//Se incluye Children

export const Item = ({nombre, precio, descripcion, children}) => {
     
    return (
        <article >
                    <h2>{nombre}</h2>
                    <p>Precio: ${precio}</p>
                    <p>Descripción: {descripcion}</p>
                    {children}
                </article>
    )
    
}