import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import CreateProduct from './CreateProduct';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/create">
              <CreateProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
