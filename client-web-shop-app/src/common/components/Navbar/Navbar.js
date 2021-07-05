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
				{user && user.role === 'user' ? (
					<Link to="/cart">Shopping Cart</Link>
				) : (
					''
				)}
				{user ? (
					<Link
						to="/"
						className="authBtn"
						onClick={() => {
							setUser(null);
							localStorage.removeItem('loggedUser');
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
