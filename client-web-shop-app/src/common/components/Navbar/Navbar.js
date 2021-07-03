import { Link } from 'react-router-dom';
import { UserContext } from '../../../modules/Auth/context/UserContext';
import { useContext } from 'react';
import './Navbar.modules.css';

const Navbar = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<nav className="navbar">
			<h1> WebShop client </h1>
			<div className="links">
				<Link to="/">Home</Link>
				{user && <Link to="/products">Products</Link>}
				{user && <Link to="/cart">Shoping Cart</Link>}
				{user ? (
					<Link
						to="/"
						className="authBtn"
						onClick={() => {
							// Todo: Call real log out
							setUser(null);
							console.log('log out simulation');
						}}
					>
						Logout
					</Link>
				) : (
					<Link to="/login" className="authBtn">
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
