import './App.css';
import Product from "./components/Product";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
