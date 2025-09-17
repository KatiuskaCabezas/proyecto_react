export const Boton = ({texto, color}) => {
    const estilo = {
        backgroundColor: color,
        color: "white",
    };
    return <button style={estilo}>{texto}</button>;    
};

