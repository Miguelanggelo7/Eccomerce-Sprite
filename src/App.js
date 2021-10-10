import './App.css';
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import CheckoutPage from './components/CheckoutPage';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Products />
          </Route>
          <Route path='/checkout-page' exact>
            <CheckoutPage />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
