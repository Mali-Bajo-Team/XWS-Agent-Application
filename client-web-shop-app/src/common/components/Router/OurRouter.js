import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../../pages/guest/Home';
import Products from '../../../pages/administrator/Products';
import ProductDetails from '../../../modules/Product/components/organisms/ProductDetails/ProductDetails';
import CreateProduct from '../../../modules/Product/components/molecules/CreateProduct/CreateProduct';
import SignUp from '../../../modules/Auth/components/organisms/SignUp/SignUp';
import Login from '../../../modules/Auth/components/organisms/Login/Login';
import { UserContext } from '../../../modules/Auth/context/UserContext';
import { useMemo, useState } from 'react';
import './OurRouter.modules.css';
import EditProduct from '../../../modules/Product/components/molecules/EditProduct/EditProduct';
import ShopingCart from '../../../modules/ShopingCart/ShopingCart';

const OurRouter = () => {
	const [user, setUser] = useState(null);
	const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<Router>
			<div className="App">
				<UserContext.Provider value={providerUser}>
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
							<Route exact path="/products/edit/:id">
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
				</UserContext.Provider>
			</div>
		</Router>
	);
};

export default OurRouter;
