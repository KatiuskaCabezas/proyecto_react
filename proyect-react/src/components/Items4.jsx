export const Item4 = ({nombre, precio, destacado}) => {

    return (
        // un tipo de estilo, se usa operador terneario, permite hacer una cosa u otra
        //spread operator
        <article style={{border: destacado ? "solid gold" : "solid gray"}}>
            <p>Item 4</p>
            <p>{nombre} </p>
            <p>Precio: $ {precio} </p>

        </article>
    );   
};