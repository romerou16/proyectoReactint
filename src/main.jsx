import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './components/CartContext.jsx';
import App from './App.jsx';
import './index.css';


const Main = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

export default Main;