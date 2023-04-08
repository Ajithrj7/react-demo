import React from 'react';
import ReactDOM from 'react-dom/client';
import List from "./components/List"
import Gallery from "./components/Gallery"
import Message from "./components/Message"
import Data from "./components/Data"
import ProductList from "./components/ProductList"
import Counter from "./components/Counter"
import Cards from './components/Cards';


function App() {
  return (
    <>
      <h2>This is working fine for me</h2>
      <Gallery/>
      <Message/>
      <Data/>
      <List/>
      <ProductList/>
      <Counter/>
      <Cards/>
      
    </>
  )
}

export default App;



