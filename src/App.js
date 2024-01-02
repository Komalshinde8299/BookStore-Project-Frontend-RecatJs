import logo from './logo.svg';
import './App.css';
import './Display.css';
import CartBar from './CartBar';
import Books from './Books';
import Cart from './Cart';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Customer from './Customer';
import PopupDetails from './PopupDetails';
import PopupButton from './PopupButton';
import CounterItem from './CounterItem';
import Sucess from './Sucess';
import CartPage from './Component/CartPage';
import SignUp from './SignUp';
import Login from './Login';
import { Toggle } from './Component/Toggle';
import React, { useState } from 'react';
import Colapse from './Colapse';
import DataProvider1 from './Data/DataProvider1'




function App() {

  return (
      <DataProvider1>
        <BrowserRouter>
        
          <Routes>
          <Route
            path="/"
            element={<Navigate to="/books" />}
          ></Route>
            
            <Route path='/cartBar' element={<CartBar />}></Route>
            

            <Route path='/books' element={<Books />} className='bookdisplay'></Route>

            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/customer' element={<Customer />}></Route>
            <Route path='/pop' element={<PopupButton />}></Route>
            <Route path='/counter' element={<CounterItem />}></Route>
            <Route path='/image' element={<Sucess />}></Route>
            {/* <Route path='/cartpage' element={<CartPage/>}></Route> */}
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/toggle' element={<Toggle />}></Route>
            <Route path='/colapse' element={<Colapse />}></Route>








          </Routes>
        </BrowserRouter>
      </DataProvider1>
  );
}

export default App;
