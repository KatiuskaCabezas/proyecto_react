// Recibe todo de los componentes

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <>
      <div>
           <Header />
           <ItemListContainer titulo={"Bienvenidos"} />
           
           <Footer /> 
        
      </div>
      
    </>
  );
}

export default App;
