import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App container m-auto my-2 bg-gray-100">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
