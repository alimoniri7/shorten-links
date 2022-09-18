import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Landing/>
      <Footer/>
    </>
  );
};

export default App;
