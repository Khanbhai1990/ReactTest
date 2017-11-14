import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from  './ShoppingCart';

class App extends Component {
  render() {
    var newYear = new Date().getFullYear();
    return (
      <div className="App">
        <ShoppingCart copyRight = {newYear} />
      </div>
    );
  }
}

export default App;
