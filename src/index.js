import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavbarHome from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavbarHome/>
    <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions/>} />
          <Route path="products" element={<Products/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

