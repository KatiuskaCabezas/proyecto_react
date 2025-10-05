export const Boton = ({texto, color}) => {
    const estilo = {
        backgroundColor: color,
        color: "white",
    };
 
    const saludar = () => {
        alert('Boton clickeado');
    };
    return (
        <button style={estilo} onClick={saludar}
        >{texto}
        </button> 
    );   
       
};

