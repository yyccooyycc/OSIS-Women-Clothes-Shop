import React from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
