// App2.js (ranije AppRoutes.js)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BurgerBackground from './components/BurgerBackground';
import Burgers from './components/Burgers';
import Footer from './components/Footer';
import Cart from './components/Cart';

const App2 = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BurgerBackground />
                <Burgers />
                <Footer />
                <Cart />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App2;
