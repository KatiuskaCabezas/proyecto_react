// Es donde pasan las props

export const Item = ({nombre, precio, descripcion, children}) => {
     /*El key siempre va en el padre, en este caso en el aerticle*/
    return (
        <article >
                    <h2>{nombre}</h2>
                    <p>Precio: ${precio}</p>
                    <p>Descripción: {descripcion}</p>
                    {children}
                </article>
    )
    
}