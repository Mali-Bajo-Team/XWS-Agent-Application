import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1> WebShop client </h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link
					to="/login"
					style={{
						color: 'white',
						backgroundColor: '#22ad9a',
						borderRadius: '2em',
						padding: '0.7em',
					}}
				>
					Login
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
