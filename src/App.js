import React from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
