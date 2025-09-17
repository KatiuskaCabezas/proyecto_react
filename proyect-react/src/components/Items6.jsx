export const Item6 = (props) => {
    const { nombre, precio } = props;

    return (
        <article>
            <p>Item 6</p>
            <p>{nombre} </p>
            <p>Precio: $ {precio} </p>
            
        </article>
    );   
};