import logo from './logo.svg';
import './App.css';
import CartBar from './CartBar';
import Books from './Books';
import Cart from './Cart';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Customer from './Customer';
import PopupDetails from './PopupDetails';
import PopupButton from './PopupButton';
import CounterItem from './CounterItem';
import Sucess from './Sucess';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/cartBar' element={ <CartBar/>}></Route>
        <Route path='/books' element={ <Books/>}></Route>
        <Route path='/cart' element={ <Cart/>}></Route>
        <Route path='/customer' element={ <Customer/>}></Route> 
        <Route path='/pop' element={<PopupButton/>}></Route>
        <Route path='/counter' element={<CounterItem/>}></Route>
        <Route path='/image' element={<Sucess/>}></Route>
       
        
        

        
    
     
     
     </Routes>
     </BrowserRouter>
     
    
    </div>
  
  );
}

export default App;
