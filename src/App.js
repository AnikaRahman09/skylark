import './App.css';
import Home from './components/HomeSection/Home';
import Transaction from './components/TransactionSection/Transaction';
import Works from './components/WhatWeDoSection/Works';
import Promo from './components/PromoSection/Promo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>

      <Home/>
      <Works/>
      <Transaction/>
      <Promo/>
      <Footer/>
    </>
  );
}

export default App;
