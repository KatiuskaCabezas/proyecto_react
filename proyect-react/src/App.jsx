import './App.css';
import { Boton } from './components/Boton';
import { Item1 } from './components/Items1';
import { Item2 } from './components/Items2';
import { Item3 } from './components/Items3';
import { Item4 } from './components/Items4';
import { Item5 } from './components/Items5';
import { Item6 } from './components/Items6';

function App() {
  const prod = { nombre: "Remera", precio: 20000, descripcion: "Ropa deportiva" };
  
  return (
    <>
      <div>
        <Boton texto={"Enviar"} color={"green"} />
        <Boton texto={"Cancelar"} color={"red"} />
        <Item1 nombre={prod.nombre} precio={prod.precio} />
        {/* clave valor */}
        <Item2 item={prod}/> 
        {/* se pasa solo el valor, y nº cantidad de valores que necesite */}
        <Item3 {...prod} />
        <Item4 {...prod} destacado={false} />
        <Item6 nombre= "Remera" precio= {50000}/>
        <Item5>
          <h1>Item 5</h1>
          <p>{prod.nombre} </p>
          <p>{prod.precio} </p>
        </Item5>

    
        
        
        
      </div>
      
    </>
  );
}

export default App;
