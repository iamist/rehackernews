import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container m-auto my-2 bg-gray-100">
      <Header></Header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, veritatis mollitia omnis necessitatibus voluptatum, ut placeat minima ducimus, commodi corporis suscipit? Ad quia quaerat, aliquid esse illo voluptatibus cum omnis?</p>
      <Footer></Footer>
    </div>
  );
}

export default App;
