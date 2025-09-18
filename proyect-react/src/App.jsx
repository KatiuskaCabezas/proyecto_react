// Recibe todo de los componentes

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const arrayProducts = [
    { id: 1, nombre: "Remera", precio: 20000, descripcion: "Remera de algodón" },
    { id: 2, nombre: "Pantalon", precio: 80000, descripcion: "Pantalon de jean" },
    { id:3, nombre: "Zapatilla", precio: 200000, descripcion: "Zapatillas deportivas" }

  ]

  // const prod = { nombre: "Remera", precio: 20000, descripcion: "Ropa deportiva" };
  
  return (
    <>
      <div>
           <Header />
           <ItemListContainer titulo= {"Bienvenidos a la tienda de Embark"} 
              productos= {arrayProducts} />
           <Footer />
        
        
        
      </div>
      
    </>
  );
}

export default App;
