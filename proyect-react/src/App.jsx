// Recibe todo de los componentes

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <>
    <BrowserRouter>  
      <div>
           <Header />
           <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />           
           </Routes>                                 
           <Footer />         
      </div>
    </BrowserRouter>             
    </>
  );
}

export default App;
