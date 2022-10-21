import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
import About from './pages/About/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';
import Intro from './pages/Intro/Intro';
import Products from './pages/products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Intro />} />
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

