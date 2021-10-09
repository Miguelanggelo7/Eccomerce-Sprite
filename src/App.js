import './App.css';
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import CheckoutPage from './components/CheckoutPage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CheckoutPage />
      {/* <Products/> */}
    </div>
  );
}

export default App;
