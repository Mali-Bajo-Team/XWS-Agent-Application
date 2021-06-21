import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<nav className="navbar">
			<h1> WebShop client </h1>
			<div className="links">
				<Link to="/">Home</Link>
				{user && <Link to="/products">Products</Link>}
				{user ? (
					<button
						onClick={() => {
							// Todo: Call real log out
							setUser(null);
						}}
					>
						Logout
					</button>
				) : (
					<Link
						to="/login"
						style={{
							color: 'white',
							backgroundColor: '#22ad9a',
							borderRadius: '2em',
							border: '1px solid white',
							padding: '0.7em',
						}}
					>
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
