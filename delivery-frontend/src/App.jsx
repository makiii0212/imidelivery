import { BrowserRouter, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import React, { useEffect } from 'react';
import AppRoutes from './App2';
import './App.css';

function AppWithTokenHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, '/');
    }
  }, [location]);

  return <AppRoutes />;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppWithTokenHandler />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
