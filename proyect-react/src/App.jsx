// Recibe todo de los componentes

import './App.css';
import { Boton } from './components/Boton';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <>
      <div>
           <Header />
           <Boton color={'green'} texto={'Saludar'}/>
           <Form />
           <Footer /> 
        
      </div>
      
    </>
  );
}

export default App;
