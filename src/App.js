// import { Outlet, Link } from 'react-router-dom';
import Newnav from './components/navbar/Newnav';
import About from './pages/About/About';
import Footer from './pages/footer/Footer';
import Intro from './pages/Intro/Intro';
import Products from './pages/products/Products';
import Section5 from './pages/section5/Section5';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Newnav />
      <Intro />
      <About />
      <Products />
      <Section5 />
      <Footer />
    {/* <Outlet/>  */}
    </div>
  );
}

export default App;
