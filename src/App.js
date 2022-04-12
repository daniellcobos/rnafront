import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';    
import Avaluador from "./components/avaluador"
import {Route, Link, Routes} from 'react-router-dom';
import Directorio from './components/directorio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
 
    
 
  
  return (
    
    <div className="App">
      <header className="Headbanner">
        <h6><Link className='lonk' to="/">Directorio Registro Nacional de Avaluadores</Link></h6>
      </header>
      <div >
      <Routes>
            <Route exact path="/" element ={<Directorio/>}>
               
              </Route>
              <Route exact path="avaluador/:id" element =  {<Avaluador></Avaluador>}></Route>
              
        </Routes>
      </div>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}


export default App;
