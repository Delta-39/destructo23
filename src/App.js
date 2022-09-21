import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContanier'


export default function App() {
  return (
    <div class="app" >
       <NavBar />
       <ItemListContainer saludo= {'Welcome'} />
    </div>    
  )
}

