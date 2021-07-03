import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../../../../common/components/Navbar/Navbar';
// TODO: Napisati komponentu za welcome
import Home from '../../../../pages/guest/Home';
import Products from '../../../../pages/administrator/Products';
import ProductDetails from '../../../Product/components/organisms/ProductDetails/ProductDetails';
import CreateProduct from '../../../Product/components/molecules/CreateProduct/CreateProduct';
import SignUp from '../../../../pages/guest/SignUp';
import Login from '../../../../pages/guest/Login';
import { UserContext } from '../../../../common/context/UserContext';
import { useMemo, useState } from 'react';
import './OurRouter.modules.css';

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
							<Route path="/products/:id">
								<ProductDetails />
							</Route>
							<Route path="/create">
								<CreateProduct />
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
