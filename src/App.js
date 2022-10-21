// import { Outlet, Link } from 'react-router-dom';
import Newnav from './components/navbar/Newnav';
import About from './pages/About/About';
import Intro from './pages/Intro/Intro';
import Products from './pages/products/Products';


function App() {
  return (
    <div className="App">
      <Newnav />
      <Intro />
      <About />
      <Products />
    {/* <Outlet/>  */}
    </div>
  );
}

export default App;
