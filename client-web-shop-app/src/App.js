import Navbar from './components/Navbar';
import Home from './pages/guest/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/administrator/Products'
import ProductDetails from './containers/Product/ProductDetails';
import CreateProduct from './containers/Product/CreateProduct';
import SignUp from './pages/guest/SignUp';

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
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
