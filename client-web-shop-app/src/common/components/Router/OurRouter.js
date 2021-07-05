import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../../pages/guest/Home';
import Products from '../../../pages/administrator/Products';
import ProductDetails from '../../../modules/Product/components/organisms/ProductDetails/ProductDetails';
import CreateProduct from '../../../modules/Product/components/molecules/CreateProduct/CreateProduct';
import SignUp from '../../../modules/Auth/components/organisms/SignUp/SignUp';
import Login from '../../../modules/Auth/components/organisms/Login/Login';
import UserContextProvider from '../../../modules/Auth/context/UserContext';
import ProductsContextProvider from '../../../modules/Product/context/ProductsContext';
import ShoopingCartContextProvider from '../../../modules/ShopingCart/context/ShoppingCartContext';
import './OurRouter.modules.css';
import EditProduct from '../../../modules/Product/components/molecules/EditProduct/EditProduct';
import ShopingCart from '../../../modules/ShopingCart/ShopingCart';

const OurRouter = () => {
	return (
		<Router>
			<div className="App">
				<UserContextProvider>
					<ProductsContextProvider>
						<ShoopingCartContextProvider>
							<Navbar />
							<div className="content">
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/products">
										<Products />
									</Route>
									<Route exact path="/products/create">
										<CreateProduct />
									</Route>
									<Route exact path="/products/edit">
										<EditProduct />
									</Route>
									<Route path="/products/:id">
										<ProductDetails />
									</Route>
									<Route exact path="/cart">
										<ShopingCart />
									</Route>
									<Route path="/signup">
										<SignUp />
									</Route>
									<Route path="/login">
										<Login />
									</Route>
								</Switch>
							</div>
						</ShoopingCartContextProvider>
					</ProductsContextProvider>
				</UserContextProvider>
			</div>
		</Router>
	);
};

export default OurRouter;
