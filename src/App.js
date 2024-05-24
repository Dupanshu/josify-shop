import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;