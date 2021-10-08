import './App.css';
import Product from "./components/Product";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Products/>
    </div>
  );
}

export default App;
